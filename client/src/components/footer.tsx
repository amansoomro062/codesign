"use client"

import { Github, Twitter, Heart, Palette, Users, Star, BookOpen, Zap, ExternalLink } from "lucide-react"
import { DiscordIcon } from "@/components/ui/discord-icon"


export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 border-t border-purple-500/20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168,85,247,0.4) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl border border-white/20 backdrop-blur-sm">
                  <Palette className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/30">
                  <Users className="w-3 h-3 text-white drop-shadow-sm" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-white">
                  Co<span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Design</span>
                </span>
                <p className="text-purple-300 text-sm font-medium">Open Source Design Platform</p>
              </div>
            </div>
            
            <p className="text-slate-300 leading-relaxed max-w-md">
              The world&apos;s first open-source AI-powered design platform. Real-time collaboration meets intelligent assistance in a tool built by the community, for the community.
            </p>

            {/* Social links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/amansoomro062/codesign" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-purple-500/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-400/30 text-slate-300 hover:text-purple-300 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-indigo-500/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-indigo-400/30 text-slate-300 hover:text-indigo-300 transition-all duration-300 group"
              >
                <DiscordIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-sky-500/20 backdrop-blur-sm rounded-xl border border-white/10 hover:border-sky-400/30 text-slate-300 hover:text-sky-300 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-bold text-white mb-6 flex items-center">
              <Zap className="w-4 h-4 mr-2 text-purple-400" />
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('features')} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Features
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('ai-demo')} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  AI Demo
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Documentation
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  API Reference
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community links */}
          <div>
            <h3 className="font-bold text-white mb-6 flex items-center">
              <Users className="w-4 h-4 mr-2 text-pink-400" />
              Community
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/amansoomro062/codesign" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  GitHub Repository
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Discord Community
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/amansoomro062/codesign/graphs/contributors" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Contributors
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/amansoomro062/codesign/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Code of Conduct
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white mb-6 flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/amansoomro062/codesign/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Contributing Guide
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/amansoomro062/codesign/blob/main/README.md" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Getting Started
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/amansoomro062/codesign/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  MIT License
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="https://github.com/amansoomro062/codesign/releases" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center group">
                  Releases
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-purple-500/20 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-slate-400 text-sm">
            <p>© 2025 CoDesign. Open source under MIT License.</p>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/amansoomro062/codesign/blob/main/PRIVACY.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy</a>
              <a href="https://github.com/amansoomro062/codesign/blob/main/TERMS.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-400 text-sm group cursor-pointer" onClick={scrollToTop}>
            <span className="group-hover:text-purple-300 transition-colors">Made with</span>
            <Heart className="w-4 h-4 text-purple-500 group-hover:text-pink-400 transition-colors animate-pulse" />
            <span className="group-hover:text-purple-300 transition-colors">by the community</span>
            <div className="ml-2 p-1 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
              <Star className="w-3 h-3 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}