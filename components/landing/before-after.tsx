"use client"

import { motion } from "framer-motion"
import { Clock, Zap } from "lucide-react"

export default function BeforeAfter() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">From Hours to Minutes</h2>
          <p className="text-lg text-muted-foreground text-balance">
            See how AI Deep Search transforms your research workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-destructive/5 border border-destructive/20 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-destructive" />
              <h3 className="text-xl font-semibold text-foreground">Traditional Research</h3>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "Manual source searching",
                "Cross-referencing multiple sites",
                "Fact-checking each claim",
                "Organizing scattered notes",
                "Writing synthesis from scratch",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-destructive mt-1">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-3xl font-bold text-destructive">5+ Hours</div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/5 border border-primary/20 rounded-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">With AI Deep Search</h3>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "Automated multi-source search",
                "Instant cross-referencing",
                "Built-in fact verification",
                "Organized, structured output",
                "AI-synthesized comprehensive report",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-3xl font-bold text-primary">5 Minutes</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
