"use client"

import { Button } from "@/components/ui/button"
import { 
  MousePointer, 
  Square, 
  Circle, 
  Type, 
  Move, 
  Minus,
  Pen,
  Image,
  Shapes
} from "lucide-react"

interface Tool {
  id: string
  name: string
  icon: React.ComponentType<{ className?: string }>
  shortcut: string
  category: 'select' | 'shapes' | 'text' | 'draw'
}

interface ToolPanelProps {
  selectedTool: string
  onToolSelect: (toolId: string) => void
  orientation?: 'vertical' | 'horizontal'
}

const tools: Tool[] = [
  { id: 'select', name: 'Select', icon: MousePointer, shortcut: 'V', category: 'select' },
  { id: 'frame', name: 'Frame', icon: Square, shortcut: 'F', category: 'shapes' },
  { id: 'rectangle', name: 'Rectangle', icon: Square, shortcut: 'R', category: 'shapes' },
  { id: 'ellipse', name: 'Ellipse', icon: Circle, shortcut: 'O', category: 'shapes' },
  { id: 'line', name: 'Line', icon: Minus, shortcut: 'L', category: 'shapes' },
  { id: 'pen', name: 'Pen', icon: Pen, shortcut: 'P', category: 'draw' },
  { id: 'text', name: 'Text', icon: Type, shortcut: 'T', category: 'text' },
  { id: 'image', name: 'Image', icon: Image, shortcut: 'I', category: 'shapes' },
  { id: 'move', name: 'Hand', icon: Move, shortcut: 'H', category: 'select' },
]

export function ToolPanel({ selectedTool, onToolSelect, orientation = 'horizontal' }: ToolPanelProps) {
  const toolCategories = {
    select: tools.filter(tool => tool.category === 'select'),
    shapes: tools.filter(tool => tool.category === 'shapes'),
    draw: tools.filter(tool => tool.category === 'draw'),
    text: tools.filter(tool => tool.category === 'text'),
  }

  const renderToolButton = (tool: Tool) => {
    const Icon = tool.icon
    const isSelected = selectedTool === tool.id
    
    return (
      <Button
        key={tool.id}
        variant={isSelected ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onToolSelect(tool.id)}
        className={`
          relative group
          ${isSelected 
            ? 'bg-purple-600 text-white shadow-lg' 
            : 'text-white hover:bg-slate-700 hover:text-purple-300'
          }
        `}
        title={`${tool.name} (${tool.shortcut})`}
      >
        <Icon className="w-4 h-4" />
        
        {/* Tooltip */}
        <div className="absolute invisible group-hover:visible bg-slate-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap z-50 -bottom-8 left-1/2 transform -translate-x-1/2">
          {tool.name} ({tool.shortcut})
        </div>
      </Button>
    )
  }

  if (orientation === 'vertical') {
    return (
      <div className="flex flex-col space-y-2 p-2 bg-slate-800 border-r border-slate-700">
        {/* Selection Tools */}
        <div className="flex flex-col space-y-1">
          {toolCategories.select.map(renderToolButton)}
        </div>
        
        <div className="h-px bg-slate-600" />
        
        {/* Shape Tools */}
        <div className="flex flex-col space-y-1">
          {toolCategories.shapes.map(renderToolButton)}
        </div>
        
        <div className="h-px bg-slate-600" />
        
        {/* Drawing Tools */}
        <div className="flex flex-col space-y-1">
          {toolCategories.draw.map(renderToolButton)}
        </div>
        
        <div className="h-px bg-slate-600" />
        
        {/* Text Tools */}
        <div className="flex flex-col space-y-1">
          {toolCategories.text.map(renderToolButton)}
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-1 p-2 bg-slate-800 border-b border-slate-700">
      {/* Selection Tools */}
      <div className="flex space-x-1">
        {toolCategories.select.map(renderToolButton)}
      </div>
      
      <div className="w-px h-6 bg-slate-600 mx-2" />
      
      {/* Shape Tools */}
      <div className="flex space-x-1">
        {toolCategories.shapes.map(renderToolButton)}
      </div>
      
      <div className="w-px h-6 bg-slate-600 mx-2" />
      
      {/* Drawing Tools */}
      <div className="flex space-x-1">
        {toolCategories.draw.map(renderToolButton)}
      </div>
      
      <div className="w-px h-6 bg-slate-600 mx-2" />
      
      {/* Text Tools */}
      <div className="flex space-x-1">
        {toolCategories.text.map(renderToolButton)}
      </div>
    </div>
  )
}

export { tools }