"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Plan {
  type: "free" | "pro" | "enterprise"
  name: string
  price: {
    monthly: number
    yearly: number
  }
  features: string[]
  searchLimit: number
  resetPeriod: "daily" | "weekly" | "monthly"
  popular?: boolean
}

const plans: Plan[] = [
  {
    type: "free",
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    searchLimit: 5,
    resetPeriod: "daily",
    features: ["5 searches per day", "Basic export", "Community support", "Standard sources"],
  },
  {
    type: "pro",
    name: "Pro",
    price: { monthly: 19, yearly: 190 },
    searchLimit: 100,
    resetPeriod: "monthly",
    popular: true,
    features: [
      "100 searches per month",
      "Advanced export formats",
      "Priority support",
      "API access",
      "Custom source integration",
      "Team collaboration",
    ],
  },
  {
    type: "enterprise",
    name: "Enterprise",
    price: { monthly: 99, yearly: 990 },
    searchLimit: 1000,
    resetPeriod: "monthly",
    features: [
      "1000 searches per month",
      "Full API access",
      "Dedicated support",
      "Custom integrations",
      "Advanced analytics",
      "SSO & security features",
    ],
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            Choose the plan that fits your research needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isYearly ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted"
            >
              <motion.div
                className="inline-block h-6 w-6 transform rounded-full bg-primary"
                animate={{ x: isYearly ? 28 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
              />
            </button>
            <span className={`text-sm ${isYearly ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
              Yearly <span className="text-primary text-xs ml-1">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-lg border transition-all ${
                plan.popular
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20 md:scale-105"
                  : "border-border bg-background"
              } p-8`}
            >
              {plan.popular && (
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">
                  ${isYearly ? plan.price.yearly : plan.price.monthly}
                </span>
                <span className="text-muted-foreground ml-2">{isYearly ? "/year" : "/month"}</span>
              </div>

              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground">
                  {plan.searchLimit} searches per {plan.resetPeriod}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
