"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, MessageCircle, Heart, Users, GitFork, Star } from "lucide-react"
import { motion } from "framer-motion"
import { fetchGitHubStats, formatStat, type GitHubStats } from "@/lib/github-stats"

export function CommunitySection() {
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

  const statsData = [
    { icon: Star, label: "GitHub Stars", value: isLoading ? "..." : formatStat(stats.stars), color: "text-yellow-500" },
    { icon: GitFork, label: "Forks", value: isLoading ? "..." : formatStat(stats.forks), color: "text-primary" },
    { icon: Users, label: "Contributors", value: isLoading ? "..." : formatStat(stats.contributors), color: "text-accent" },
    { icon: Heart, label: "Sponsors", value: "0", color: "text-red-500" },
  ]

  return (
    <section id="community" className="relative py-24 bg-gradient-to-br from-slate-950 via-purple-950/25 to-slate-950">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(168,85,247,0.3) 1px, transparent 0)`,
            backgroundSize: "85px 85px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Built by the Community,
            <br />
            <span className="text-primary">For the Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            CoDesign thrives because of our amazing open-source community. Join thousands of designers and developers
            shaping the future of design tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-primary/10 mb-4 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Sponsorship CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 border-purple-500/20 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to sponsor CoDesign?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Help us build the future of open-source design tools. Your sponsorship enables us to dedicate more time 
                to development, pay contributors, and maintain infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 cursor-pointer">
                  <a href="https://github.com/sponsors/amansoomro062" target="_blank" rel="noopener noreferrer">
                    <Heart className="w-4 h-4 mr-2" />
                    Become a Sponsor
                  </a>
                </Button>
                <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 cursor-pointer">
                  <a href="mailto:sponsor@codesign.dev">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Custom Sponsorship
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Contribute?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a designer, developer, or just passionate about open source, there's a place for you in our
            community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 group cursor-pointer">
              <a href="https://github.com/amansoomro062/codesign" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group cursor-pointer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
