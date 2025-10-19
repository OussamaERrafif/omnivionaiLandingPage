"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, Zap } from "lucide-react"

// Counting number component with color coding
function CountingNumber({ 
  target, 
  duration = 1000, 
  delay = 0,
  isMinutes = true 
}: { 
  target: number; 
  duration?: number; 
  delay?: number;
  isMinutes?: boolean;
}) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) {
      const timer = setTimeout(() => {
        setHasStarted(true)
        const startTime = Date.now()
        const endTime = startTime + duration

        const updateCount = () => {
          const now = Date.now()
          const progress = Math.min((now - startTime) / duration, 1)
          
          // Easing function for smooth animation
          const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          const currentCount = Math.floor(easeOutQuart * target)
          
          setCount(currentCount)
          
          if (progress < 1) {
            requestAnimationFrame(updateCount)
          } else {
            setCount(target)
          }
        }
        
        requestAnimationFrame(updateCount)
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [target, duration, delay, hasStarted])

  // Color logic based on target value
  const getColorClass = (value: number) => {
    if (value <= 10) return "text-green-500 dark:text-green-400" // Small numbers - green
    if (value <= 50) return "text-orange-500 dark:text-orange-400" // Medium numbers - orange
    return "text-red-500 dark:text-red-400" // Large numbers - red
  }

  return (
    <span className={`font-mono tabular-nums transition-colors duration-300 ${getColorClass(count)}`}>
      {count}{isMinutes ? 'm' : ''}
    </span>
  )
}

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150])
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200])

  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8">
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

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-16 md:gap-8">
            {/* Traditional Research */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-lg font-medium text-muted-foreground">Traditional Research</h3>
              </div>

              <ul className="space-y-6">
                {[
                  { task: "Manual source searching", time: 45 },
                  { task: "Cross-referencing multiple sites", time: 60 },
                  { task: "Fact-checking each claim", time: 50 },
                  { task: "Organizing scattered notes", time: 40 },
                  { task: "Writing synthesis from scratch", time: 85 },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="text-sm text-muted-foreground flex-1">{item.task}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-sm"
                    >
                      <CountingNumber 
                        target={item.time} 
                        delay={i * 800} // Sequential delay: 0ms, 800ms, 1600ms, etc.
                        duration={1200}
                      />
                    </motion.span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border/50">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl font-mono tabular-nums text-foreground"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <CountingNumber 
                      target={280} 
                      delay={4000} // Start after all list items finish (5 items * 800ms = 4000ms)
                      duration={2000}
                      isMinutes={false}
                    />
                    <span className="ml-1">minutes</span>
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Efficiency Indicators - Parallax */}
            <div className="hidden md:flex absolute inset-0 pointer-events-none">
              <motion.div
                style={{ y: y1 }}
                className="absolute left-1/4 top-1/2 -translate-y-1/2 flex flex-col items-center opacity-70"
              >
                <div className="text-3xl font-bold text-primary tabular-nums">98%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Faster</div>
              </motion.div>

              <motion.div
                style={{ y: y2 }}
                className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center opacity-60"
              >
                <div className="text-2xl font-bold text-primary/80 tabular-nums">56×</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">More Efficient</div>
              </motion.div>

              <motion.div
                style={{ y: y3 }}
                className="absolute right-1/4 top-2/3 -translate-y-1/2 flex flex-col items-center opacity-50"
              >
                <div className="text-2xl font-bold text-primary/60 tabular-nums">100+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Sources</div>
              </motion.div>
            </div>

            {/* AI Deep Search */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-medium text-foreground">With AI Deep Search</h3>
              </div>

              <ul className="space-y-6">
                {[
                  { task: "Automated multi-source search", time: 0.8 },
                  { task: "Instant cross-referencing", time: 0.5 },
                  { task: "Built-in fact verification", time: 1.2 },
                  { task: "Organized, structured output", time: 0.3 },
                  { task: "AI-synthesized comprehensive report", time: 2.2 },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start justify-between gap-4"
                  >
                    <span className="text-sm text-foreground flex-1">{item.task}</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-sm"
                    >
                      <CountingNumber 
                        target={item.time} 
                        delay={i * 600} // Shorter delays for AI section
                        duration={800}
                      />
                    </motion.span>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-4 border-t border-primary/20">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-2xl font-mono tabular-nums text-primary"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <CountingNumber 
                      target={5} 
                      delay={3000} // Start after AI list items finish (5 items * 600ms = 3000ms)
                      duration={1000}
                      isMinutes={false}
                    />
                    <span className="ml-1">minutes</span>
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Efficiency Indicators */}
          <div className="md:hidden flex flex-col items-center justify-center mt-12 space-y-8">
            <motion.div
              style={{ y: y1 }}
              className="flex flex-col items-center opacity-70"
            >
              <div className="text-3xl font-bold text-primary tabular-nums">98%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Faster</div>
            </motion.div>

            <motion.div
              style={{ y: y2 }}
              className="flex flex-col items-center opacity-60"
            >
              <div className="text-2xl font-bold text-primary/80 tabular-nums">56×</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">More Efficient</div>
            </motion.div>

            <motion.div
              style={{ y: y3 }}
              className="flex flex-col items-center opacity-50"
            >
              <div className="text-2xl font-bold text-primary/60 tabular-nums">100+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Sources</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
