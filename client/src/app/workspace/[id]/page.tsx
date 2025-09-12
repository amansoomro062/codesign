"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { 
  MousePointer, 
  Square, 
  Circle, 
  Type, 
  Move, 
  ZoomIn, 
  ZoomOut, 
  Undo, 
  Redo, 
  Play,
  Share2,
  Menu,
  Layers,
  Palette,
  Settings,
  Users,
  MessageCircle
} from "lucide-react"
import Link from "next/link"
import { DesignCanvas } from "@/packages/design-platform/codesign-canvas/canvas"
import { ToolPanel } from "@/packages/design-platform/codesign-tools/tool-panel"
import { LayersPanel } from "@/components/workspace/layers-panel"
import { PropertiesPanel } from "@/components/workspace/properties-panel"

interface WorkspacePageProps {
  params: {
    id: string
  }
}

export default function WorkspacePage({ params }: WorkspacePageProps) {
  const [selectedTool, setSelectedTool] = useState<string>('select')
  const [zoom, setZoom] = useState(100)
  const [showLeftPanel, setShowLeftPanel] = useState(true)
  const [showRightPanel, setShowRightPanel] = useState(true)
  const [activeLeftTab, setActiveLeftTab] = useState<'layers' | 'assets'>('layers')
  const [activeRightTab, setActiveRightTab] = useState<'properties' | 'ai'>('properties')
  
  const canvasRef = useRef<HTMLDivElement>(null)

  const tools = [
    { id: 'select', icon: MousePointer, name: 'Select', shortcut: 'V' },
    { id: 'frame', icon: Square, name: 'Frame', shortcut: 'F' },
    { id: 'rectangle', icon: Square, name: 'Rectangle', shortcut: 'R' },
    { id: 'ellipse', icon: Circle, name: 'Ellipse', shortcut: 'O' },
    { id: 'text', icon: Type, name: 'Text', shortcut: 'T' },
    { id: 'move', icon: Move, name: 'Hand', shortcut: 'H' },
  ]

  const handleToolSelect = (toolId: string) => {
    setSelectedTool(toolId)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 400))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 25))
  }

  return (
    <div className="h-screen bg-slate-900 flex flex-col overflow-hidden">
      {/* Top Bar */}
      <header className="h-12 bg-slate-800 border-b border-slate-700 flex items-center px-4 z-50">
        <div className="flex items-center space-x-4">
          <Link href="/dashboard" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
              <span className="text-xs font-bold">CD</span>
            </div>
            <span className="font-semibold">CoDesign</span>
          </Link>
          <div className="h-4 w-px bg-slate-600" />
          <span className="text-white font-medium">Mobile App Design</span>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
              <Undo className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
              <Redo className="w-4 h-4" />
            </Button>
            <div className="h-4 w-px bg-slate-600 mx-2" />
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700" onClick={handleZoomOut}>
              <ZoomOut className="w-4 h-4" />
            </Button>
            <span className="text-white text-sm w-12 text-center">{zoom}%</span>
            <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700" onClick={handleZoomIn}>
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-slate-700">
            <Play className="w-4 h-4 mr-2" />
            Present
          </Button>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <div className="flex items-center space-x-1 ml-4">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm">
              Y
            </div>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">
              A
            </div>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0 text-white hover:bg-slate-700">
              <Users className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className={`bg-slate-800 border-r border-slate-700 transition-all duration-300 ${showLeftPanel ? 'w-64' : 'w-0 overflow-hidden'}`}>
          <div className="h-full flex flex-col">
            <div className="h-12 border-b border-slate-700 flex items-center px-4">
              <div className="flex space-x-1">
                <Button
                  variant={activeLeftTab === 'layers' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveLeftTab('layers')}
                  className={activeLeftTab === 'layers' ? 'bg-purple-600 text-white' : 'text-white hover:bg-slate-700'}
                >
                  <Layers className="w-4 h-4 mr-2" />
                  Layers
                </Button>
                <Button
                  variant={activeLeftTab === 'assets' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveLeftTab('assets')}
                  className={activeLeftTab === 'assets' ? 'bg-purple-600 text-white' : 'text-white hover:bg-slate-700'}
                >
                  <Palette className="w-4 h-4 mr-2" />
                  Assets
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              {activeLeftTab === 'layers' && <LayersPanel />}
              {activeLeftTab === 'assets' && (
                <div className="p-4 text-white">
                  <h3 className="font-semibold mb-4">Assets</h3>
                  <p className="text-sm text-slate-400">Asset management coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Tool Bar */}
          <div className="h-16 bg-slate-800 border-b border-slate-700 flex items-center px-4">
            <div className="flex items-center space-x-1">
              {tools.map((tool) => {
                const Icon = tool.icon
                return (
                  <Button
                    key={tool.id}
                    variant={selectedTool === tool.id ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => handleToolSelect(tool.id)}
                    className={selectedTool === tool.id 
                      ? 'bg-purple-600 text-white' 
                      : 'text-white hover:bg-slate-700'
                    }
                    title={`${tool.name} (${tool.shortcut})`}
                  >
                    <Icon className="w-4 h-4" />
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 bg-slate-900 relative overflow-hidden" ref={canvasRef}>
            <DesignCanvas selectedTool={selectedTool} zoom={zoom} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className={`bg-slate-800 border-l border-slate-700 transition-all duration-300 ${showRightPanel ? 'w-80' : 'w-0 overflow-hidden'}`}>
          <div className="h-full flex flex-col">
            <div className="h-12 border-b border-slate-700 flex items-center px-4">
              <div className="flex space-x-1">
                <Button
                  variant={activeRightTab === 'properties' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveRightTab('properties')}
                  className={activeRightTab === 'properties' ? 'bg-purple-600 text-white' : 'text-white hover:bg-slate-700'}
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Design
                </Button>
                <Button
                  variant={activeRightTab === 'ai' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveRightTab('ai')}
                  className={activeRightTab === 'ai' ? 'bg-purple-600 text-white' : 'text-white hover:bg-slate-700'}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  AI
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              {activeRightTab === 'properties' && <PropertiesPanel />}
              {activeRightTab === 'ai' && (
                <div className="p-4 text-white">
                  <h3 className="font-semibold mb-4">AI Assistant</h3>
                  <p className="text-sm text-slate-400">AI design assistance coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}