"use client"

import { motion } from "framer-motion"
import { Brain, Shield, Zap, FileText, Share2, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Intelligent Analysis",
    description: "Advanced AI algorithms understand context and nuance in your research queries",
  },
  {
    icon: Shield,
    title: "Source Verification",
    description: "Every claim is cross-referenced and verified against multiple authoritative sources",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get comprehensive research results in minutes, not hours or days",
  },
  {
    icon: FileText,
    title: "Multiple Formats",
    description: "Export your research as PDF, Markdown, JSON, or directly to your tools",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Share findings with your team with one click, complete with all sources",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Track your research history and insights with detailed analytics",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Powerful Features for Modern Research</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Everything you need to conduct thorough, verifiable research
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
