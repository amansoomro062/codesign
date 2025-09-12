"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Menu, X, Palette, Users } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-3 hover:opacity-90 transition-all hover:scale-105 cursor-pointer"
          >
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl border border-white/20 backdrop-blur-sm">
                <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg border border-white/30">
                <Users className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white drop-shadow-sm" />
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">
              Co<span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Design</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all cursor-pointer"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("ai-demo")}
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all cursor-pointer"
            >
              AI Demo
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all cursor-pointer"
            >
              Vision
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild className="hidden sm:flex hover:bg-white/10 text-white cursor-pointer">
              <a href="https://github.com/amansoomro062/codesign" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-white/10 text-white cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all w-full text-left rounded-lg cursor-pointer"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all w-full text-left rounded-lg cursor-pointer"
              >
                Community
              </button>
              <button
                onClick={() => scrollToSection("ai-demo")}
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all w-full text-left rounded-lg cursor-pointer"
              >
                AI Demo
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all w-full text-left rounded-lg cursor-pointer"
              >
                Vision
              </button>
              <a
                href="https://github.com/amansoomro062/codesign"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-all w-full text-left rounded-lg cursor-pointer sm:hidden"
              >
                <div className="flex items-center space-x-2">
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
