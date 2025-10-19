"use client"

import { motion } from "framer-motion"

interface Source {
  title: string
  domain: string
  favicon?: string
}

interface AgentStepSourcesProps {
  sources: Source[]
  sourcesFound?: number
}

export function AgentStepSources({ sources, sourcesFound }: AgentStepSourcesProps) {
  if (!sources || sources.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ delay: 0.3 }}
      className="space-y-1"
    >
      <div className="text-xs font-medium text-foreground/70">
        {sourcesFound ? `${sourcesFound} sources found` : "Sources"}
      </div>
      <div className="flex flex-wrap gap-1">
        {sources.slice(0, 3).map((source, i) => (
          <div key={i} className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">
            {source.domain}
          </div>
        ))}
        {sources.length > 3 && (
          <div className="text-xs bg-muted px-2 py-1 rounded text-muted-foreground">+{sources.length - 3}</div>
        )}
      </div>
    </motion.div>
  )
}
