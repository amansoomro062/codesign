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

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 left-1/4 cursor-animate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <MousePointer2 className="w-6 h-6 text-white drop-shadow-lg" />
          <div className="absolute -top-8 -left-2 bg-white/90 text-black text-xs px-2 py-1 rounded shadow-lg">
            Sarah
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/3 cursor-animate"
          style={{ animationDelay: "1s" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <MousePointer2 className="w-6 h-6 text-accent drop-shadow-lg" />
          <div className="absolute -top-8 -left-2 bg-accent/90 text-black text-xs px-2 py-1 rounded shadow-lg">
            Alex
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 cursor-animate"
          style={{ animationDelay: "2s" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <MousePointer2 className="w-6 h-6 text-purple-500 drop-shadow-lg" />
          <div className="absolute -top-8 -left-2 bg-purple-500/90 text-white text-xs px-2 py-1 rounded shadow-lg">
            Maya
          </div>
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
            <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white group font-semibold border-0 cursor-pointer">
              <Github className="w-5 h-5 mr-3" />
              Star on GitHub
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
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
