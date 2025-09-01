"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Globe, Zap } from "lucide-react"
import { motion } from "framer-motion"

const visionPoints = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "Every decision is made with our community in mind. Open source means open governance, transparent roadmaps, and inclusive development.",
  },
  {
    icon: Globe,
    title: "Accessible to All",
    description:
      "Design tools should be available to everyone, regardless of budget or background. Open source breaks down barriers and democratizes creativity.",
  },
  {
    icon: Zap,
    title: "Innovation Through Collaboration",
    description:
      "The best ideas come from diverse perspectives. Our open platform enables rapid innovation and experimentation from contributors worldwide.",
  },
]

export function VisionSection() {
  return (
    <section id="vision" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why Open Source Design Matters
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            We believe that the future of design tools lies in open collaboration, transparency, and community-driven
            innovation. Here's why we're committed to the open source way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-6">
                    <point.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            "Design tools should empower creators, not limit them."
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            By keeping CoDesign open source, we ensure that the tools designers and developers rely on remain in the
            hands of the community that uses them. Together, we're building something bigger than any single company
            could create alone.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
