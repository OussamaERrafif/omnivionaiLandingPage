import Header from "@/components/landing/header"
import Hero from "@/components/landing/hero"
import LetAIWork from "@/components/landing/let-ai-work"
import BeforeAfter from "@/components/landing/before-after"
import Features from "@/components/landing/features"
import Testimonials from "@/components/landing/testimonials"
import Pricing from "@/components/landing/pricing"
import Footer from "@/components/landing/footer"
import { AnimatedBackground } from "@/components/landing/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <Header />
        <Hero />
        <LetAIWork />
        <BeforeAfter />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </main>
  )
}
