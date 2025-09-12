"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Search, Filter, Grid, List, FolderOpen, FileText, Users, Star } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

interface Project {
  id: string
  name: string
  thumbnail: string
  lastModified: string
  collaborators: number
  starred: boolean
  type: 'design' | 'prototype' | 'component'
}

const mockProjects: Project[] = [
  {
    id: "1",
    name: "Mobile App Design",
    thumbnail: "/api/placeholder/300/200",
    lastModified: "2 hours ago",
    collaborators: 3,
    starred: true,
    type: "design"
  },
  {
    id: "2", 
    name: "Website Redesign",
    thumbnail: "/api/placeholder/300/200",
    lastModified: "1 day ago",
    collaborators: 5,
    starred: false,
    type: "design"
  },
  {
    id: "3",
    name: "Component Library",
    thumbnail: "/api/placeholder/300/200", 
    lastModified: "3 days ago",
    collaborators: 2,
    starred: true,
    type: "component"
  }
]

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>(mockProjects)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleStar = (projectId: string) => {
    setProjects(prev => prev.map(project => 
      project.id === projectId 
        ? { ...project, starred: !project.starred }
        : project
    ))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CD</span>
                </div>
                <span className="text-xl font-bold text-white">CoDesign</span>
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <nav className="flex items-center space-x-6">
                <Link href="/dashboard" className="text-white font-medium">
                  Dashboard
                </Link>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Projects
                </Link>
                <Link href="/teams" className="text-white/70 hover:text-white transition-colors">
                  Teams
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Design
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your Designs</h1>
          <p className="text-white/70">Create, collaborate, and iterate on your design projects</p>
        </div>

        {/* Filters & Search */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-white/70 hover:text-white hover:bg-white/10'}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Link href="/workspace/new">
            <Card className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Create New Design</h3>
                <p className="text-sm text-white/70">Start with a blank canvas or template</p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/workspace/components">
            <Card className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FolderOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Component Library</h3>
                <p className="text-sm text-white/70">Browse and manage design components</p>
              </CardContent>
            </Card>
          </Link>

          <Card className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-white mb-2">Team Projects</h3>
              <p className="text-sm text-white/70">Collaborate with your team</p>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`/workspace/${project.id}`}>
                  <Card className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-t-lg flex items-center justify-center">
                        <FileText className="w-8 h-8 text-white/60" />
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-white truncate">{project.name}</h3>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              toggleStar(project.id)
                            }}
                            className="text-white/40 hover:text-yellow-400 transition-colors"
                          >
                            <Star className={`w-4 h-4 ${project.starred ? 'fill-yellow-400 text-yellow-400' : ''}`} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-white/70">{project.lastModified}</span>
                          <div className="flex items-center text-white/70">
                            <Users className="w-3 h-3 mr-1" />
                            {project.collaborators}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link href={`/workspace/${project.id}`}>
                  <Card className="bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg flex items-center justify-center">
                          <FileText className="w-6 h-6 text-white/60" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold text-white">{project.name}</h3>
                            {project.starred && (
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            )}
                          </div>
                          <p className="text-sm text-white/70">{project.lastModified}</p>
                        </div>
                        <div className="flex items-center text-white/70">
                          <Users className="w-4 h-4 mr-1" />
                          {project.collaborators}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-white/70 mb-6">Create your first design project to get started</p>
            <Link href="/workspace/new">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                <Plus className="w-4 h-4 mr-2" />
                Create New Design
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}