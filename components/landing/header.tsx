"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { LiquidGlassButton } from "@/components/ui/liquid-glass-button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      // small translate effect proportional to scrollY but capped
      const y = Math.min(window.scrollY, 60)
      setOffset(y / 6) // gentle movement
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-50">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-auto"
        style={{ transform: `translateY(${offset}px)`, transition: "transform 280ms ease" }}
      >
  {/* Centered pill - transparent glass look */}
  <div className="rounded-full bg-transparent border border-[rgba(255,255,255,0.06)] backdrop-blur-[8px] shadow-2xl shadow-[rgba(10,20,40,0.12)]">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shadow-md bg-transparent">
                <Image
                  src={resolvedTheme === "dark" ? "/White.png" : "/Black.png"}
                  alt="AI logo"
                  width={36}
                  height={36}
                  priority={true}
                />
              </div>
              <span className="font-semibold text-foreground hidden sm:inline">AI Deep Search</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
                Features
              </Link>
              <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
                Pricing
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                About
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-2 hover:bg-muted rounded-lg transition"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <div className="hidden sm:flex gap-2">
                <LiquidGlassButton variant="ghost" size="sm">
                  Sign In
                </LiquidGlassButton>
                <LiquidGlassButton size="sm">Get Started</LiquidGlassButton>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
            </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="#features" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition">
              Features
            </Link>
            <Link href="#pricing" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition">
              Pricing
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm hover:bg-muted rounded-lg transition">
              About
            </Link>
            <div className="flex gap-2 px-4 pt-2">
              <LiquidGlassButton variant="ghost" size="sm" className="flex-1">
                Sign In
              </LiquidGlassButton>
              <LiquidGlassButton size="sm" className="flex-1">
                Get Started
              </LiquidGlassButton>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
