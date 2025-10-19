"use client"

import type React from "react"

import { Brain, Search, FileSearch, ShieldCheck, Sparkles, Activity, Check } from "lucide-react"
import { motion } from "framer-motion"
import type { StepCategory } from "@/types/search-step"

interface AgentStepIconProps {
  category: StepCategory
  status: "active" | "complete" | "pending"
}

export function AgentStepIcon({ category, status }: AgentStepIconProps) {
  const iconMap: Record<StepCategory, React.ReactElement> = {
    thinking: <Brain className="w-4 h-4" />,
    searching: <Search className="w-4 h-4" />,
    retrieving: <FileSearch className="w-4 h-4" />,
    verifying: <ShieldCheck className="w-4 h-4" />,
    synthesizing: <Sparkles className="w-4 h-4" />,
    formatting: <Activity className="w-4 h-4" />,
  }

  const getColor = () => {
    if (status === "complete") return "text-primary"
    if (status === "active") return "text-primary"
    return "text-muted-foreground"
  }

  return (
    <div className={`relative flex-shrink-0 ${getColor()}`}>
      {status === "active" && (
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />
      )}
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          status === "complete" ? "bg-primary/20" : status === "active" ? "bg-primary/10" : "bg-muted"
        }`}
      >
        {status === "complete" ? (
          <Check className="w-4 h-4 text-primary" />
        ) : status === "active" ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            {iconMap[category]}
          </motion.div>
        ) : (
          iconMap[category]
        )}
      </div>
    </div>
  )
}
