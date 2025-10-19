"use client"

import { motion } from "framer-motion"

interface AgentStepQueriesProps {
  queries: string[]
}

export function AgentStepQueries({ queries }: AgentStepQueriesProps) {
  if (!queries || queries.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ delay: 0.2 }}
      className="space-y-1"
    >
      {queries.map((query, i) => (
        <div key={i} className="text-xs text-muted-foreground pl-2 border-l border-primary/20">
          {query}
        </div>
      ))}
    </motion.div>
  )
}
