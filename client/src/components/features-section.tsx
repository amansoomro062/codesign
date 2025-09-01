"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Zap, GitBranch, Puzzle, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Design together with your team in real-time. See cursors, comments, and changes as they happen across the globe.",
    color: "text-primary",
    highlight: false,
  },
  {
    icon: Zap,
    title: "AI Design Assistant",
    description:
      "Get intelligent suggestions, auto-generate components, and accelerate your design workflow with cutting-edge AI.",
    color: "text-accent",
    highlight: true,
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Built-in version control with branching, merging, and history tracking for design files.",
    color: "text-secondary",
    highlight: false,
  },
  {
    icon: Puzzle,
    title: "Plugin Ecosystem",
    description: "Extend functionality with community plugins or build your own with our open API.",
    color: "text-primary",
    highlight: false,
  },
]

export function FeaturesSection() {
  const IconComponent0 = features[0].icon
  const IconComponent1 = features[1].icon
  const IconComponent2 = features[2].icon
  const IconComponent3 = features[3].icon

  return (
    <section id="features" className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(168,85,247,0.3) 1px, transparent 0)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Modern Design
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Everything you need to design, collaborate, and ship faster than ever before.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
          {/* Large feature card - Real-time Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-1"
          >
            <Card className="h-full glass hover:scale-[1.02] transition-all duration-500 border-border/50">
              <CardContent className="p-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`p-4 rounded-2xl bg-primary/10 ${features[0].color} w-fit mb-6`}>
                    <IconComponent0 className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{features[0].title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{features[0].description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Large feature card - AI Design Assistant */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 lg:row-span-2"
          >
            <Card
              className={`h-full glass hover:scale-[1.02] transition-all duration-500 border-border/50 ${features[1].highlight ? "ring-2 ring-accent/50 bg-accent/5" : ""}`}
            >
              <CardContent className="p-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`p-4 rounded-2xl bg-accent/20 ${features[1].color} w-fit mb-6 relative`}>
                    <IconComponent1 className="w-8 h-8" />
                    {features[1].highlight && (
                      <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-accent animate-pulse" />
                    )}
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{features[1].title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{features[1].description}</p>
                  {features[1].highlight && (
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      <Sparkles className="w-4 h-4 mr-2" />
                      AI Powered
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Small feature card - Version Control */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full glass hover:scale-[1.02] transition-all duration-500 border-border/50">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className={`p-3 rounded-xl bg-secondary/10 ${features[2].color} w-fit mb-4`}>
                    <IconComponent2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{features[2].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{features[2].description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Small feature card - Plugin Ecosystem */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="h-full glass hover:scale-[1.02] transition-all duration-500 border-border/50">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className={`p-3 rounded-xl bg-primary/10 ${features[3].color} w-fit mb-4`}>
                    <IconComponent3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{features[3].title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{features[3].description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
