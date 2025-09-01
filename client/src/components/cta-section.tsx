"use client"

import { Button } from "@/components/ui/button"
import { Github, MessageCircle, ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-900 via-pink-900/20 to-slate-900">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(236,72,153,0.4) 1px, transparent 0)`,
            backgroundSize: "65px 65px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Ready to Shape the Future of Design?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty">
            Join our growing community of designers and developers who are building the next generation of open source
            design tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Github className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Contribute Code</h3>
              <p className="text-muted-foreground mb-4">Help us build features, fix bugs, and improve the codebase.</p>
              <Button asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 group cursor-pointer">
                <a href="https://github.com/amansoomro062/codesign" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  View Repository
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-accent/10 text-accent mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Join Community</h3>
              <p className="text-muted-foreground mb-4">
                Connect with other contributors and get help with your projects.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group cursor-pointer">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discord
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Star & Share</h3>
              <p className="text-muted-foreground mb-4">Help us grow by starring the repo and sharing with others.</p>
              <Button asChild className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white border-0 group cursor-pointer">
                <a href="https://github.com/amansoomro062/codesign" target="_blank" rel="noopener noreferrer">
                  <Star className="w-4 h-4 mr-2" />
                  Star on GitHub
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl p-8 md:p-12 border border-pink-500/20 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">Start Contributing Today</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're fixing a typo in documentation or building a major feature, every contribution matters.
              Check out our contributor guide to get started.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 text-lg px-8 py-6 group cursor-pointer">
                <a href="https://github.com/amansoomro062/codesign" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 text-lg px-8 py-6 cursor-pointer">
                Read Docs
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
