"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { 
  Move, 
  Square, 
  Palette, 
  Type, 
  RotateCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline
} from "lucide-react"
import { cn } from "@/lib/utils"

interface PropertySection {
  title: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}

function PropertySection({ title, icon: Icon, children }: PropertySection) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className="border-b border-slate-700 last:border-b-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 text-white hover:bg-slate-700/50 transition-colors"
      >
        <div className="flex items-center space-x-2">
          <Icon className="w-4 h-4" />
          <span className="font-medium text-sm">{title}</span>
        </div>
        <div className={cn(
          "transform transition-transform",
          isExpanded ? "rotate-90" : ""
        )}>
          ▶
        </div>
      </button>
      {isExpanded && (
        <div className="px-3 pb-3">
          {children}
        </div>
      )}
    </div>
  )
}

export function PropertiesPanel() {
  const [selectedElement] = useState({
    type: 'text',
    x: 120,
    y: 80,
    width: 200,
    height: 40,
    rotation: 0,
    opacity: 100,
    fill: '#FFFFFF',
    stroke: '#000000',
    strokeWidth: 0,
    text: 'Selected Text',
    fontSize: 16,
    fontWeight: 400,
    textAlign: 'left' as 'left' | 'center' | 'right',
    letterSpacing: 0,
    lineHeight: 1.2
  })

  const [properties, setProperties] = useState(selectedElement)

  const updateProperty = (key: keyof typeof properties, value: any) => {
    setProperties(prev => ({ ...prev, [key]: value }))
  }

  const presetColors = [
    '#FFFFFF', '#F3F4F6', '#9CA3AF', '#374151', '#000000',
    '#EF4444', '#F97316', '#EAB308', '#22C55E', '#3B82F6',
    '#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#6366F1'
  ]

  return (
    <div className="h-full bg-slate-800 text-white overflow-auto">
      <div className="p-3 border-b border-slate-700">
        <h3 className="font-semibold text-sm">Design Properties</h3>
        <p className="text-xs text-white/60 mt-1">
          {properties.type === 'text' ? 'Text Element' : 'Shape Element'} selected
        </p>
      </div>

      {/* Position & Size */}
      <PropertySection title="Position & Size" icon={Move}>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs text-white/70">X</Label>
              <Input
                type="number"
                value={properties.x}
                onChange={(e) => updateProperty('x', Number(e.target.value))}
                className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label className="text-xs text-white/70">Y</Label>
              <Input
                type="number"
                value={properties.y}
                onChange={(e) => updateProperty('y', Number(e.target.value))}
                className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs text-white/70">Width</Label>
              <Input
                type="number"
                value={properties.width}
                onChange={(e) => updateProperty('width', Number(e.target.value))}
                className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <Label className="text-xs text-white/70">Height</Label>
              <Input
                type="number"
                value={properties.height}
                onChange={(e) => updateProperty('height', Number(e.target.value))}
                className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
          <div>
            <Label className="text-xs text-white/70">Rotation</Label>
            <div className="flex items-center space-x-2">
              <Slider
                value={[properties.rotation]}
                onValueChange={(value) => updateProperty('rotation', value[0])}
                max={360}
                min={-360}
                step={1}
                className="flex-1"
              />
              <Input
                type="number"
                value={properties.rotation}
                onChange={(e) => updateProperty('rotation', Number(e.target.value))}
                className="h-7 w-16 text-xs bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
        </div>
      </PropertySection>

      {/* Appearance */}
      <PropertySection title="Appearance" icon={Palette}>
        <div className="space-y-3">
          <div>
            <Label className="text-xs text-white/70">Fill</Label>
            <div className="flex items-center space-x-2 mt-1">
              <div 
                className="w-6 h-6 rounded border border-slate-600 cursor-pointer"
                style={{ backgroundColor: properties.fill }}
              />
              <Input
                type="text"
                value={properties.fill}
                onChange={(e) => updateProperty('fill', e.target.value)}
                className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="grid grid-cols-5 gap-1 mt-2">
              {presetColors.map((color) => (
                <button
                  key={color}
                  onClick={() => updateProperty('fill', color)}
                  className="w-6 h-6 rounded border border-slate-600 hover:border-white/40 transition-colors"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          
          <div>
            <Label className="text-xs text-white/70">Stroke</Label>
            <div className="flex items-center space-x-2 mt-1">
              <div 
                className="w-6 h-6 rounded border border-slate-600 cursor-pointer"
                style={{ backgroundColor: properties.stroke }}
              />
              <Input
                type="text"
                value={properties.stroke}
                onChange={(e) => updateProperty('stroke', e.target.value)}
                className="h-7 text-xs bg-slate-700 border-slate-600 text-white flex-1"
              />
              <Input
                type="number"
                value={properties.strokeWidth}
                onChange={(e) => updateProperty('strokeWidth', Number(e.target.value))}
                className="h-7 w-16 text-xs bg-slate-700 border-slate-600 text-white"
                min="0"
                max="20"
              />
            </div>
          </div>

          <div>
            <Label className="text-xs text-white/70">Opacity</Label>
            <div className="flex items-center space-x-2">
              <Slider
                value={[properties.opacity]}
                onValueChange={(value) => updateProperty('opacity', value[0])}
                max={100}
                min={0}
                step={1}
                className="flex-1"
              />
              <span className="text-xs w-8 text-center">{properties.opacity}%</span>
            </div>
          </div>
        </div>
      </PropertySection>

      {/* Text Properties - only show for text elements */}
      {properties.type === 'text' && (
        <PropertySection title="Text" icon={Type}>
          <div className="space-y-3">
            <div>
              <Label className="text-xs text-white/70">Content</Label>
              <Input
                type="text"
                value={properties.text}
                onChange={(e) => updateProperty('text', e.target.value)}
                className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs text-white/70">Font Size</Label>
                <Input
                  type="number"
                  value={properties.fontSize}
                  onChange={(e) => updateProperty('fontSize', Number(e.target.value))}
                  className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
                  min="6"
                  max="200"
                />
              </div>
              <div>
                <Label className="text-xs text-white/70">Weight</Label>
                <select
                  value={properties.fontWeight}
                  onChange={(e) => updateProperty('fontWeight', Number(e.target.value))}
                  className="h-7 text-xs bg-slate-700 border border-slate-600 text-white rounded px-2 w-full"
                >
                  <option value={300}>Light</option>
                  <option value={400}>Regular</option>
                  <option value={500}>Medium</option>
                  <option value={600}>Semibold</option>
                  <option value={700}>Bold</option>
                </select>
              </div>
            </div>

            <div>
              <Label className="text-xs text-white/70">Alignment</Label>
              <div className="flex space-x-1 mt-1">
                {(['left', 'center', 'right'] as const).map((align) => (
                  <Button
                    key={align}
                    variant={properties.textAlign === align ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => updateProperty('textAlign', align)}
                    className={cn(
                      "h-7 px-2",
                      properties.textAlign === align 
                        ? "bg-purple-600 text-white" 
                        : "text-white/70 hover:bg-slate-700"
                    )}
                  >
                    {align === 'left' && <AlignLeft className="w-3 h-3" />}
                    {align === 'center' && <AlignCenter className="w-3 h-3" />}
                    {align === 'right' && <AlignRight className="w-3 h-3" />}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs text-white/70">Letter Spacing</Label>
                <Input
                  type="number"
                  value={properties.letterSpacing}
                  onChange={(e) => updateProperty('letterSpacing', Number(e.target.value))}
                  className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
                  step="0.1"
                  min="-2"
                  max="5"
                />
              </div>
              <div>
                <Label className="text-xs text-white/70">Line Height</Label>
                <Input
                  type="number"
                  value={properties.lineHeight}
                  onChange={(e) => updateProperty('lineHeight', Number(e.target.value))}
                  className="h-7 text-xs bg-slate-700 border-slate-600 text-white"
                  step="0.1"
                  min="0.5"
                  max="3"
                />
              </div>
            </div>
          </div>
        </PropertySection>
      )}

      {/* No Selection State */}
      {!properties && (
        <div className="p-6 text-center">
          <Square className="w-12 h-12 text-white/20 mx-auto mb-4" />
          <h3 className="text-white/60 font-medium mb-2">No Selection</h3>
          <p className="text-xs text-white/40">Select an element to see its properties</p>
        </div>
      )}
    </div>
  )
}