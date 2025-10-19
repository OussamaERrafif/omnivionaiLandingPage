"use client"

import { motion } from "framer-motion"

interface Metadata {
  sourcesFound?: number
  elapsedTime?: string
  [key: string]: any
}

interface AgentStepMetaProps {
  metadata?: Metadata
  status: "active" | "complete" | "pending"
}

export function AgentStepMeta({ metadata, status }: AgentStepMetaProps) {
  if (!metadata) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="flex gap-3 text-xs text-muted-foreground"
    >
      {metadata.elapsedTime && <span>{metadata.elapsedTime}</span>}
      {status === "active" && <span className="text-primary">In progress...</span>}
    </motion.div>
  )
}
