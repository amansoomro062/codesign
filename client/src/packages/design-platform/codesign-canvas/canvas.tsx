"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion } from "framer-motion"

interface DesignCanvasProps {
  selectedTool: string
  zoom: number
}

interface CanvasElement {
  id: string
  type: 'rectangle' | 'ellipse' | 'text' | 'frame'
  x: number
  y: number
  width: number
  height: number
  fill: string
  stroke?: string
  strokeWidth?: number
  text?: string
  fontSize?: number
  selected: boolean
}

export function DesignCanvas({ selectedTool, zoom }: DesignCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null)
  const [elements, setElements] = useState<CanvasElement[]>([])
  const [isDrawing, setIsDrawing] = useState(false)
  const [startPoint, setStartPoint] = useState({ x: 0, y: 0 })
  const [currentElement, setCurrentElement] = useState<CanvasElement | null>(null)
  const [selectedElements, setSelectedElements] = useState<string[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 })
  const [isPanning, setIsPanning] = useState(false)

  // Canvas interaction handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - panOffset.x) / (zoom / 100)
    const y = (e.clientY - rect.top - panOffset.y) / (zoom / 100)

    // Check if clicking on an existing element
    const clickedElement = elements.find(el => 
      x >= el.x && x <= el.x + el.width && y >= el.y && y <= el.y + el.height
    )

    if (selectedTool === 'select') {
      if (clickedElement) {
        // Select element and prepare for dragging
        setSelectedElements([clickedElement.id])
        setElements(prev => prev.map(el => ({
          ...el,
          selected: el.id === clickedElement.id
        })))
        setIsDragging(true)
        setDragOffset({
          x: x - clickedElement.x,
          y: y - clickedElement.y
        })
      } else {
        // Deselect all elements
        setSelectedElements([])
        setElements(prev => prev.map(el => ({ ...el, selected: false })))
      }
    } else if (selectedTool === 'move') {
      // Pan mode
      setIsPanning(true)
      setStartPoint({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y })
    } else if (['rectangle', 'ellipse', 'frame'].includes(selectedTool)) {
      // Start drawing new shape
      setIsDrawing(true)
      setStartPoint({ x, y })
      
      const newElement: CanvasElement = {
        id: `${selectedTool}-${Date.now()}`,
        type: selectedTool as 'rectangle' | 'ellipse' | 'frame',
        x,
        y,
        width: 0,
        height: 0,
        fill: selectedTool === 'frame' ? 'transparent' : '#8B5CF6',
        stroke: selectedTool === 'frame' ? '#8B5CF6' : undefined,
        strokeWidth: selectedTool === 'frame' ? 2 : undefined,
        selected: false
      }
      
      setCurrentElement(newElement)
    } else if (selectedTool === 'text') {
      // Add text element
      const newTextElement: CanvasElement = {
        id: `text-${Date.now()}`,
        type: 'text',
        x,
        y,
        width: 200,
        height: 40,
        fill: '#FFFFFF',
        text: 'Type something',
        fontSize: 16,
        selected: true
      }
      
      setElements(prev => [...prev, newTextElement])
      setSelectedElements([newTextElement.id])
    }
  }, [selectedTool, zoom, elements, panOffset])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - panOffset.x) / (zoom / 100)
    const y = (e.clientY - rect.top - panOffset.y) / (zoom / 100)

    if (isPanning) {
      setPanOffset({
        x: e.clientX - startPoint.x,
        y: e.clientY - startPoint.y
      })
    } else if (isDrawing && currentElement) {
      // Update current drawing element
      const width = Math.abs(x - startPoint.x)
      const height = Math.abs(y - startPoint.y)
      const newX = Math.min(x, startPoint.x)
      const newY = Math.min(y, startPoint.y)
      
      setCurrentElement({
        ...currentElement,
        x: newX,
        y: newY,
        width,
        height
      })
    } else if (isDragging && selectedElements.length > 0) {
      // Drag selected elements
      setElements(prev => prev.map(el => {
        if (selectedElements.includes(el.id)) {
          return {
            ...el,
            x: x - dragOffset.x,
            y: y - dragOffset.y
          }
        }
        return el
      }))
    }
  }, [isDrawing, isDragging, isPanning, currentElement, startPoint, selectedElements, dragOffset, zoom, panOffset])

  const handleMouseUp = useCallback(() => {
    if (isDrawing && currentElement && currentElement.width > 5 && currentElement.height > 5) {
      setElements(prev => [...prev, currentElement])
    }
    
    setIsDrawing(false)
    setIsDragging(false)
    setIsPanning(false)
    setCurrentElement(null)
  }, [isDrawing, currentElement])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        setElements(prev => prev.filter(el => !selectedElements.includes(el.id)))
        setSelectedElements([])
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedElements])

  const renderElement = (element: CanvasElement) => {
    const commonProps = {
      key: element.id,
      style: {
        position: 'absolute' as const,
        left: element.x,
        top: element.y,
        width: element.width,
        height: element.height,
        border: element.selected ? '2px solid #8B5CF6' : element.stroke ? `${element.strokeWidth}px solid ${element.stroke}` : 'none',
        backgroundColor: element.fill !== 'transparent' ? element.fill : 'transparent',
        cursor: selectedTool === 'select' ? 'move' : 'default',
        pointerEvents: 'none' as const
      }
    }

    switch (element.type) {
      case 'rectangle':
      case 'frame':
        return <div {...commonProps} className="border-dashed" />
      
      case 'ellipse':
        return <div {...commonProps} style={{ ...commonProps.style, borderRadius: '50%' }} />
      
      case 'text':
        return (
          <div
            {...commonProps}
            style={{
              ...commonProps.style,
              color: element.fill,
              fontSize: element.fontSize,
              fontFamily: 'Inter, sans-serif',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '8px',
              backgroundColor: 'transparent',
              border: element.selected ? '2px solid #8B5CF6' : 'none'
            }}
          >
            {element.text}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-slate-900">
      {/* Canvas Grid Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: `${20 * (zoom / 100)}px ${20 * (zoom / 100)}px`,
          transform: `translate(${panOffset.x}px, ${panOffset.y}px)`
        }}
      />

      {/* Canvas Container */}
      <div
        ref={canvasRef}
        className="absolute inset-0 cursor-crosshair"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          cursor: selectedTool === 'move' ? 'grab' : selectedTool === 'select' ? 'default' : 'crosshair',
          transform: `scale(${zoom / 100})`,
          transformOrigin: '0 0'
        }}
      >
        {/* Canvas Elements */}
        <div
          style={{
            transform: `translate(${panOffset.x / (zoom / 100)}px, ${panOffset.y / (zoom / 100)}px)`
          }}
        >
          {/* Artboard/Frame placeholder */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-white rounded-lg shadow-2xl border-2 border-gray-200 relative">
              <div className="absolute -top-6 left-0 text-white text-sm font-medium">
                Mobile App Design
              </div>
            </div>
          </div>

          {/* Rendered Elements */}
          {elements.map(renderElement)}
          
          {/* Current Drawing Element */}
          {currentElement && renderElement(currentElement)}
        </div>
      </div>

      {/* Canvas Info */}
      <div className="absolute bottom-4 left-4 bg-slate-800 rounded-lg px-3 py-2 text-white text-sm">
        Tool: {selectedTool} | Zoom: {zoom}% | Elements: {elements.length}
      </div>

      {/* Selection Info */}
      {selectedElements.length > 0 && (
        <div className="absolute bottom-4 right-4 bg-purple-600 rounded-lg px-3 py-2 text-white text-sm">
          {selectedElements.length} selected
        </div>
      )}
    </div>
  )
}