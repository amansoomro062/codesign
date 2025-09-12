"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  MoreHorizontal, 
  Plus,
  Square,
  Circle,
  Type,
  Image,
  Folder,
  FolderOpen,
  ChevronRight,
  ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Layer {
  id: string
  name: string
  type: 'frame' | 'rectangle' | 'ellipse' | 'text' | 'image' | 'group'
  visible: boolean
  locked: boolean
  children?: Layer[]
  expanded?: boolean
  selected?: boolean
}

const mockLayers: Layer[] = [
  {
    id: '1',
    name: 'Mobile App Design',
    type: 'frame',
    visible: true,
    locked: false,
    expanded: true,
    children: [
      {
        id: '2',
        name: 'Header',
        type: 'group',
        visible: true,
        locked: false,
        expanded: true,
        children: [
          { id: '3', name: 'Background', type: 'rectangle', visible: true, locked: false },
          { id: '4', name: 'Title', type: 'text', visible: true, locked: false, selected: true },
          { id: '5', name: 'Menu Icon', type: 'image', visible: true, locked: false }
        ]
      },
      {
        id: '6',
        name: 'Content',
        type: 'group',
        visible: true,
        locked: false,
        expanded: false,
        children: [
          { id: '7', name: 'Card 1', type: 'rectangle', visible: true, locked: false },
          { id: '8', name: 'Card 2', type: 'rectangle', visible: true, locked: false }
        ]
      },
      { id: '9', name: 'Footer', type: 'rectangle', visible: true, locked: false }
    ]
  }
]

export function LayersPanel() {
  const [layers, setLayers] = useState<Layer[]>(mockLayers)

  const getLayerIcon = (type: Layer['type']) => {
    switch (type) {
      case 'frame':
        return <Square className="w-4 h-4 text-purple-400" />
      case 'rectangle':
        return <Square className="w-4 h-4 text-blue-400" />
      case 'ellipse':
        return <Circle className="w-4 h-4 text-green-400" />
      case 'text':
        return <Type className="w-4 h-4 text-orange-400" />
      case 'image':
        return <Image className="w-4 h-4 text-pink-400" />
      case 'group':
        return <Folder className="w-4 h-4 text-yellow-400" />
      default:
        return <Square className="w-4 h-4 text-gray-400" />
    }
  }

  const toggleLayerVisibility = (layerId: string) => {
    const updateLayer = (layers: Layer[]): Layer[] => {
      return layers.map(layer => {
        if (layer.id === layerId) {
          return { ...layer, visible: !layer.visible }
        }
        if (layer.children) {
          return { ...layer, children: updateLayer(layer.children) }
        }
        return layer
      })
    }
    setLayers(updateLayer(layers))
  }

  const toggleLayerLock = (layerId: string) => {
    const updateLayer = (layers: Layer[]): Layer[] => {
      return layers.map(layer => {
        if (layer.id === layerId) {
          return { ...layer, locked: !layer.locked }
        }
        if (layer.children) {
          return { ...layer, children: updateLayer(layer.children) }
        }
        return layer
      })
    }
    setLayers(updateLayer(layers))
  }

  const toggleLayerExpansion = (layerId: string) => {
    const updateLayer = (layers: Layer[]): Layer[] => {
      return layers.map(layer => {
        if (layer.id === layerId) {
          return { ...layer, expanded: !layer.expanded }
        }
        if (layer.children) {
          return { ...layer, children: updateLayer(layer.children) }
        }
        return layer
      })
    }
    setLayers(updateLayer(layers))
  }

  const selectLayer = (layerId: string) => {
    const updateLayer = (layers: Layer[]): Layer[] => {
      return layers.map(layer => {
        const isSelected = layer.id === layerId
        const updatedLayer = { ...layer, selected: isSelected }
        if (layer.children) {
          updatedLayer.children = updateLayer(layer.children)
        }
        return updatedLayer
      })
    }
    setLayers(updateLayer(layers))
  }

  const renderLayer = (layer: Layer, depth = 0) => {
    const hasChildren = layer.children && layer.children.length > 0
    const isExpanded = layer.expanded && hasChildren

    return (
      <div key={layer.id} className="select-none">
        <div 
          className={cn(
            "flex items-center py-1 px-2 hover:bg-slate-700/50 cursor-pointer group rounded",
            layer.selected && "bg-purple-600/20 border border-purple-600/30"
          )}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={() => selectLayer(layer.id)}
        >
          {/* Expansion toggle */}
          <div className="w-4 h-4 flex items-center justify-center mr-1">
            {hasChildren && (
              <Button
                variant="ghost"
                size="sm"
                className="w-4 h-4 p-0 hover:bg-transparent"
                onClick={(e) => {
                  e.stopPropagation()
                  toggleLayerExpansion(layer.id)
                }}
              >
                {isExpanded ? (
                  <ChevronDown className="w-3 h-3 text-white/60" />
                ) : (
                  <ChevronRight className="w-3 h-3 text-white/60" />
                )}
              </Button>
            )}
          </div>

          {/* Layer icon */}
          <div className="mr-2">
            {getLayerIcon(layer.type)}
          </div>

          {/* Layer name */}
          <div className={cn(
            "flex-1 text-sm truncate",
            layer.selected ? "text-white font-medium" : "text-white/80",
            !layer.visible && "text-white/40"
          )}>
            {layer.name}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0 hover:bg-slate-600"
              onClick={(e) => {
                e.stopPropagation()
                toggleLayerVisibility(layer.id)
              }}
            >
              {layer.visible ? (
                <Eye className="w-3 h-3 text-white/60" />
              ) : (
                <EyeOff className="w-3 h-3 text-white/40" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-6 h-6 p-0 hover:bg-slate-600"
              onClick={(e) => {
                e.stopPropagation()
                toggleLayerLock(layer.id)
              }}
            >
              {layer.locked ? (
                <Lock className="w-3 h-3 text-white/60" />
              ) : (
                <Unlock className="w-3 h-3 text-white/40" />
              )}
            </Button>
          </div>
        </div>

        {/* Render children */}
        {isExpanded && layer.children && (
          <div>
            {layer.children.map(child => renderLayer(child, depth + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col text-white">
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Layers</h3>
          <Button variant="ghost" size="sm" className="w-6 h-6 p-0 hover:bg-slate-700">
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto py-2">
        {layers.map(layer => renderLayer(layer))}
      </div>
    </div>
  )
}