export type StepCategory = "thinking" | "searching" | "retrieving" | "verifying" | "synthesizing" | "formatting"

export interface Source {
  title: string
  domain: string
  favicon?: string
}

export interface SearchStep {
  id?: string
  message: string
  category?: StepCategory
  status: "active" | "complete" | "pending"
  queries?: string[]
  search_queries?: string[]
  sites_visited?: string[]
  sources?: Array<{ title: string; domain: string; favicon?: string }>
  results?: Source[]
  metadata?: {
    sourcesFound?: number
    elapsedTime?: string
    [key: string]: any
  }
  sources_found?: number
}
