import { Github, MessageCircle, Twitter, Heart, Palette, Users } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg border border-white/10">
                  <Palette className="w-4 h-4 text-white drop-shadow-sm" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md border border-white/20">
                  <Users className="w-2 h-2 text-white drop-shadow-sm" />
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                Co<span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">Design</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              Open source design collaboration platform built by the community, for the community.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#ai-demo" className="hover:text-foreground transition-colors">
                  AI Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contributors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-purple-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2025 CoDesign. Open source under MIT License.</p>
          <div className="flex items-center space-x-1 text-muted-foreground text-sm mt-4 sm:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-purple-500" />
            <span>by the community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
