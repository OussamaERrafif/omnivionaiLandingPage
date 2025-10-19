"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { useState, useEffect } from "react"
import { SearchProgress } from "./search-progress"
import type { SearchStep } from "@/types/search-step"

export default function LetAIWork() {
  const [steps, setSteps] = useState<SearchStep[]>([
    {
      id: "1",
      category: "thinking",
      message: "Analyzing your research query...",
      status: "complete",
      metadata: { elapsedTime: "0.8s" },
    },
    {
      id: "2",
      category: "searching",
      message: "Searching across multiple sources...",
      status: "complete",
      queries: ["AI research trends", "machine learning applications"],
      metadata: { sourcesFound: 12, elapsedTime: "2.3s" },
    },
    {
      id: "3",
      category: "retrieving",
      message: "Retrieving relevant information...",
      status: "active",
      sites_visited: ["arxiv.org", "github.com", "medium.com"],
      metadata: { sourcesFound: 8, elapsedTime: "1.5s" },
    },
    {
      id: "4",
      category: "verifying",
      message: "Verifying sources and facts...",
      status: "pending",
      metadata: { elapsedTime: "0s" },
    },
    {
      id: "5",
      category: "synthesizing",
      message: "Synthesizing insights...",
      status: "pending",
      metadata: { elapsedTime: "0s" },
    },
    {
      id: "6",
      category: "formatting",
      message: "Formatting your report...",
      status: "pending",
      metadata: { elapsedTime: "0s" },
    },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setSteps((prev) => {
        const newSteps = [...prev]
        const activeIndex = newSteps.findIndex((s) => s.status === "active")

        if (activeIndex !== -1) {
          newSteps[activeIndex].status = "complete"
          if (activeIndex + 1 < newSteps.length) {
            newSteps[activeIndex + 1].status = "active"
          } else {
            newSteps[0].status = "active"
            newSteps.forEach((s, i) => {
              if (i > 0) s.status = "pending"
            })
          }
        }

        return newSteps
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Let AI Handle the Heavy Lifting
            </h2>
            <p className="text-lg text-muted-foreground mb-6 text-balance">
              While you focus on critical thinking and decision-making, our AI research engine handles the complex work
              of searching, verifying, and synthesizing information from multiple sources.
            </p>
            <ul className="space-y-3">
              {[
                "Multi-source verification for accuracy",
                "Real-time progress tracking",
                "Comprehensive source citations",
                "Export in multiple formats",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Search Progress Steps */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-background/50 backdrop-blur-sm rounded-lg border border-border p-6 space-y-2"
          >
            {steps.map((step, i) => (
              <SearchProgress key={step.id} step={step} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
