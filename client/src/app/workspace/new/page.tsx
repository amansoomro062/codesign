"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  Square, 
  FileText, 
  Palette, 
  Users,
  ArrowLeft,
  Plus,
  Search
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

interface Template {
  id: string
  name: string
  category: 'mobile' | 'web' | 'tablet' | 'component' | 'other'
  width: number
  height: number
  thumbnail: string
  description: string
  popular?: boolean
}

const templates: Template[] = [
  {
    id: 'mobile-app',
    name: 'Mobile App',
    category: 'mobile',
    width: 375,
    height: 812,
    thumbnail: '/api/placeholder/200/300',
    description: 'iPhone 14 Pro Max frame for mobile app design',
    popular: true
  },
  {
    id: 'desktop-web',
    name: 'Desktop Website',
    category: 'web',
    width: 1440,
    height: 1024,
    thumbnail: '/api/placeholder/300/200',
    description: 'Standard desktop website layout',
    popular: true
  },
  {
    id: 'tablet',
    name: 'Tablet',
    category: 'tablet',
    width: 834,
    height: 1194,
    thumbnail: '/api/placeholder/250/300',
    description: 'iPad Pro frame for tablet interfaces'
  },
  {
    id: 'component',
    name: 'Component',
    category: 'component',
    width: 400,
    height: 300,
    thumbnail: '/api/placeholder/200/150',
    description: 'Reusable component artboard'
  },
  {
    id: 'blank',
    name: 'Blank Canvas',
    category: 'other',
    width: 800,
    height: 600,
    thumbnail: '/api/placeholder/200/150',
    description: 'Start with an empty canvas'
  }
]

export default function NewWorkspacePage() {
  const router = useRouter()
  const [projectName, setProjectName] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
  const [customDimensions, setCustomDimensions] = useState({ width: 800, height: 600 })
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    template.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleCreateProject = () => {
    if (!projectName.trim()) return
    
    // In a real app, this would create the project and navigate to the workspace
    const projectId = Date.now().toString()
    router.push(`/workspace/${projectId}`)
  }

  const getCategoryIcon = (category: Template['category']) => {
    switch (category) {
      case 'mobile':
        return <Smartphone className="w-4 h-4" />
      case 'web':
        return <Monitor className="w-4 h-4" />
      case 'tablet':
        return <Tablet className="w-4 h-4" />
      case 'component':
        return <Square className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <h1 className="text-xl font-bold text-white">Create New Design</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Template Selection */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Choose a Template</h2>
              <p className="text-white/70">Start with a preset or create a custom artboard</p>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
              <Input
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/40 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card 
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedTemplate?.id === template.id 
                        ? 'ring-2 ring-purple-500 bg-purple-500/10' 
                        : 'bg-white/5 hover:bg-white/10'
                    } border border-white/10`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <CardContent className="p-4">
                      <div className="aspect-[4/3] bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg mb-3 flex items-center justify-center relative">
                        {template.popular && (
                          <div className="absolute top-2 right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                            Popular
                          </div>
                        )}
                        <div className="text-center">
                          {getCategoryIcon(template.category)}
                          <div className="text-xs text-white/60 mt-1">
                            {template.width}×{template.height}
                          </div>
                        </div>
                      </div>
                      <h3 className="font-semibold text-white mb-1">{template.name}</h3>
                      <p className="text-xs text-white/60 leading-relaxed">{template.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Custom Dimensions */}
            <Card className="mt-6 bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Custom Dimensions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white/70">Width (px)</Label>
                    <Input
                      type="number"
                      value={customDimensions.width}
                      onChange={(e) => setCustomDimensions(prev => ({ ...prev, width: Number(e.target.value) }))}
                      className="bg-white/10 border-white/20 text-white"
                      min="100"
                      max="5000"
                    />
                  </div>
                  <div>
                    <Label className="text-white/70">Height (px)</Label>
                    <Input
                      type="number"
                      value={customDimensions.height}
                      onChange={(e) => setCustomDimensions(prev => ({ ...prev, height: Number(e.target.value) }))}
                      className="bg-white/10 border-white/20 text-white"
                      min="100"
                      max="5000"
                    />
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="mt-4 border-white/20 text-white hover:bg-white/10"
                  onClick={() => setSelectedTemplate({
                    id: 'custom',
                    name: 'Custom',
                    category: 'other',
                    width: customDimensions.width,
                    height: customDimensions.height,
                    thumbnail: '',
                    description: `Custom ${customDimensions.width}×${customDimensions.height} artboard`
                  })}
                >
                  Use Custom Size
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Project Settings */}
          <div>
            <div className="sticky top-8">
              <Card className="bg-white/5 border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Project Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-white/70">Project Name</Label>
                    <Input
                      placeholder="My Awesome Design"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      className="bg-white/10 border-white/20 text-white placeholder-white/40"
                    />
                  </div>

                  {selectedTemplate && (
                    <div>
                      <Label className="text-white/70">Selected Template</Label>
                      <div className="mt-2 p-3 bg-white/5 rounded-lg border border-white/10">
                        <div className="flex items-center space-x-2 mb-2">
                          {getCategoryIcon(selectedTemplate.category)}
                          <span className="text-white font-medium">{selectedTemplate.name}</span>
                        </div>
                        <div className="text-sm text-white/60">
                          {selectedTemplate.width}×{selectedTemplate.height} px
                        </div>
                        <div className="text-xs text-white/50 mt-1">
                          {selectedTemplate.description}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label className="text-white/70">Quick Actions</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                      >
                        <Users className="w-4 h-4 mr-1" />
                        Team
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                      >
                        <Palette className="w-4 h-4 mr-1" />
                        Styles
                      </Button>
                    </div>
                  </div>

                  <Button
                    onClick={handleCreateProject}
                    disabled={!projectName.trim() || !selectedTemplate}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Create Project
                  </Button>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="mt-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white text-sm">💡 Pro Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-xs text-white/70 space-y-2">
                    <li>• Use descriptive names for better organization</li>
                    <li>• Mobile-first designs work great for responsive layouts</li>
                    <li>• Custom dimensions are perfect for unique use cases</li>
                    <li>• You can always resize artboards later</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}