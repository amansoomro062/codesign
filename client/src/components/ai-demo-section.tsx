"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Code, Palette, Wand2 } from "lucide-react"
import { motion } from "framer-motion"

export function AIDemoSection() {
  return (
    <section id="ai-demo" className="relative py-24 bg-gradient-to-br from-slate-900 via-green-900/15 to-slate-900">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      
      {/* Animated background dots */}
      <motion.div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        animate={{
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34,197,94,0.4) 1px, transparent 0)`,
            backgroundSize: "75px 75px",
          }}
        />
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            AI-Powered Design Intelligence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Watch how our AI assistant transforms your design workflow with intelligent suggestions and automated code
            generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Smart Design Suggestions</h3>
              </div>
              <p className="text-muted-foreground pl-10">
                Get contextual design recommendations based on your project's style and best practices.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Instant Code Export</h3>
              </div>
              <p className="text-muted-foreground pl-10">
                Convert your designs to production-ready React, Vue, or HTML code in seconds.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Color & Typography AI</h3>
              </div>
              <p className="text-muted-foreground pl-10">
                Generate harmonious color palettes and typography combinations that match your brand.
              </p>
            </div>

            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 group cursor-pointer">
              <Wand2 className="w-5 h-5 mr-2" />
              Try AI Features
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 backdrop-blur-sm p-8 relative">
                  {/* Mock AI Interface */}
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-lg p-6 shadow-2xl border border-white/10">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground ml-4">CoDesign AI Assistant</span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-sm text-foreground">
                              I've analyzed your design and suggest using a more consistent spacing pattern. Would you
                              like me to apply a 8px grid system?
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <Code className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div className="flex-1">
                          <div className="bg-muted rounded-lg p-3">
                            <p className="text-sm text-foreground">
                              Your button component is ready! I've generated React code with proper accessibility
                              attributes and responsive design.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-primary" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    className="absolute bottom-4 left-4 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center"
                  >
                    <Wand2 className="w-4 h-4 text-accent" />
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
