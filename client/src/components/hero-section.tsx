"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Star, Play, ArrowRight, MousePointer2 } from "lucide-react"
import { motion } from "framer-motion"
import { fetchGitHubStats, formatStat, type GitHubStats } from "@/lib/github-stats"

export function HeroSection() {
  const [stats, setStats] = useState<GitHubStats>({
    stars: 125,
    forks: 32,
    contributors: 28,
    users: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const githubStats = await fetchGitHubStats()
        setStats(githubStats)
      } catch (error) {
        console.error('Failed to load GitHub stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadStats()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none w-full h-full">
        {/* Sarah - Cursor movement without rectangle drawing */}
        <motion.div
          className="absolute"
          initial={{ x: 400, y: 180, opacity: 0 }}
          animate={{
            x: [400, 480, 520, 540, 500, 450, 400],
            y: [180, 160, 170, 200, 220, 200, 180],
            opacity: [0, 1, 1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear",
            delay: 1,
          }}
        >
          <MousePointer2 className="w-6 h-6 text-purple-400 drop-shadow-lg" />
          <div className="absolute -top-8 -left-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            Sarah
          </div>
          <motion.div
            className="absolute top-3 left-3 w-4 h-4 border-2 border-purple-400/80 rounded-full"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.4,
              times: [0, 0.3, 1],
              repeat: Infinity,
              repeatDelay: 7.6,
              delay: 1.2,
            }}
          />
        </motion.div>

        {/* Alex - Complex design workflow with enhanced click and drag effects */}
        <motion.div
          className="absolute"
          initial={{ x: 900, y: 180, opacity: 0 }}
          animate={{
            x: [900, 1000, 1150, 1200, 1050, 950, 900],
            y: [180, 160, 200, 280, 320, 250, 180],
            opacity: [0, 1, 1, 1, 1, 1, 1],
            rotate: [0, -5, 0, 5, 0, -3, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <MousePointer2 className="w-6 h-6 text-blue-400 drop-shadow-lg" />
          <div className="absolute -top-8 -left-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            Alex
          </div>
          <motion.div
            className="absolute top-3 left-3 w-6 h-6 border-2 border-blue-400/80 rounded-full"
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 0.6,
              times: [0, 0.4, 1],
              repeat: Infinity,
              repeatDelay: 11.4,
              delay: 2.5,
            }}
          />
          <motion.div
            className="absolute top-2 left-2 w-8 h-6 border-2 border-blue-400/60 rounded bg-blue-400/20"
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 8,
              delay: 4,
            }}
          />
          <motion.div
            className="absolute top-4 left-4 w-1 h-1 bg-blue-400/60 rounded-full"
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 0.2,
              delay: 4,
            }}
          />
        </motion.div>

        {/* Maya - Dragging animation */}
        <motion.div
          className="absolute"
          initial={{ x: 350, y: 380, opacity: 0 }}
          animate={{
            x: [350, 420, 480, 520, 460, 400, 350],
            y: [380, 360, 370, 400, 420, 410, 380],
            opacity: [0, 1, 1, 1, 1, 1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <MousePointer2 className="w-6 h-6 text-green-400 drop-shadow-lg" />
          <div className="absolute -top-8 -left-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            Maya
          </div>
          {/* Drag trail effect */}
          <motion.div
            className="absolute top-3 left-3 w-3 h-3 border border-green-400/80 rounded-full"
            animate={{
              scale: [0, 1.8, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 5.7,
              delay: 3.5,
            }}
          />
          {/* Drag indicator dots */}
          <motion.div
            className="absolute top-2 left-2 w-8 h-4 border border-green-400/60 rounded bg-green-400/20"
            animate={{
              opacity: [0, 0.8, 0.8, 0],
              scaleX: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 4,
            }}
          />
          {/* Drag indicator dots */}
          <motion.div
            className="absolute top-4 left-4 w-1 h-1 bg-green-400 rounded-full"
            animate={{
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 0.3,
              delay: 4.2,
            }}
          />
        </motion.div>

        {/* Additional cursor - Design element creation with enhanced effects */}
        <motion.div
          className="absolute"
          initial={{ x: 800, y: 380, opacity: 0 }}
          animate={{
            x: [800, 950, 1100, 1180, 1050, 900, 800],
            y: [380, 360, 400, 450, 480, 440, 380],
            opacity: [0, 1, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
            delay: 5,
          }}
        >
          <MousePointer2 className="w-5 h-5 text-pink-400 drop-shadow-lg" />
          <div className="absolute -top-7 -left-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">Dev</div>
          <motion.div
            className="absolute top-2 left-2 w-5 h-5 border-2 border-pink-400/60 rounded-full"
            animate={{
              scale: [0, 2.5, 0],
              opacity: [0, 0.7, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 9.2,
              delay: 6,
            }}
          />
          <motion.div
            className="absolute top-1 left-1 w-2 h-2 bg-pink-400 rounded-full"
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 7,
            }}
          />
          <motion.div
            className="absolute top-3 left-0 w-1 h-1 bg-pink-400/80 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2.5,
              delay: 7.3,
            }}
          />
          <motion.div
            className="absolute top-0 left-3 w-1 h-1 bg-pink-400/60 rounded-full"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 2.6,
              delay: 7.6,
            }}
          />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="inline-flex items-center px-6 py-3 rounded-full glass text-white text-sm font-medium backdrop-blur-md"
            >
              <Star className="w-4 h-4 mr-2 text-accent" />
              Open Source Design Revolution
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] text-balance tracking-tight"
            >
              Design the
              <br />
              <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">Future</span>
              <br />
              Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed text-pretty font-light"
            >
              The world's first open-source AI-powered design platform. Real-time collaboration meets intelligent
              assistance in a tool built by the community, for the community.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button size="lg" asChild className="text-lg px-10 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group font-semibold border-0 cursor-pointer">
              <a href="https://github.com/amansoomro062/codesign" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-3" />
                Star on GitHub
                <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              size="lg"
              className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group font-semibold cursor-pointer"
            >
              <Play className="w-5 h-5 mr-3" />
              Watch Demo
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="flex items-center justify-center space-x-12 text-sm text-white/70 pt-12"
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-medium">
                {isLoading ? '...' : formatStat(stats.stars)} Stars
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="font-medium">
                {isLoading ? '...' : formatStat(stats.contributors)} Contributors
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="font-medium">
                {isLoading ? '...' : formatStat(stats.users)} Users
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
