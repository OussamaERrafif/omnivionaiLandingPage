"use client"

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const liquidGlassButtonVariants = cva(
  "relative group transition-all duration-500 ease-out overflow-hidden",
  {
    variants: {
      variant: {
        default: 'backdrop-blur-2xl bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 hover:from-primary/40 hover:via-primary/30 hover:to-primary/20 border border-primary/50 hover:border-primary/70 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_48px_0_rgba(31,38,135,0.5)] text-primary-foreground',
        outline: 'backdrop-blur-2xl bg-gradient-to-br from-background/20 via-background/10 to-transparent hover:from-background/30 hover:via-background/20 border border-border/60 hover:border-border/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] hover:shadow-[0_8px_48px_0_rgba(0,0,0,0.15)] text-foreground',
        ghost: 'backdrop-blur-2xl bg-gradient-to-br from-transparent via-accent/5 to-transparent hover:from-accent/20 hover:via-accent/10 border border-transparent hover:border-accent/30 shadow-[0_4px_24px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.1)] text-foreground',
        premium: 'backdrop-blur-2xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-orange-500/10 hover:from-purple-500/40 hover:via-pink-500/30 hover:to-orange-500/20 border border-purple-400/50 hover:border-purple-300/70 shadow-[0_8px_32px_0_rgba(168,85,247,0.4)] hover:shadow-[0_8px_48px_0_rgba(168,85,247,0.6)] text-white',
      },
      size: {
        default: 'h-10 px-5 py-2.5',
        sm: 'h-8 px-3.5 text-xs',
        lg: 'h-12 px-7 text-base',
        xl: 'h-14 px-9 text-lg',
        icon: 'size-10',
        'icon-sm': 'size-8',
        'icon-lg': 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

interface LiquidGlassButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof liquidGlassButtonVariants> {
  asChild?: boolean
  children: React.ReactNode
}

function LiquidGlassButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: LiquidGlassButtonProps) {
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([])

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const angleX = (y - centerY) / 25
        const angleY = (centerX - x) / 25

        buttonRef.current.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.03) translateZ(8px)`
      }
    }

    const handleMouseLeave = () => {
      if (buttonRef.current) {
        buttonRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)'
      }
    }

    const handleClick = (e: MouseEvent) => {
      if (buttonRef.current) {
        const rect = buttonRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const id = Date.now()
        
        setRipples(prev => [...prev, { x, y, id }])
        
        setTimeout(() => {
          setRipples(prev => prev.filter(ripple => ripple.id !== id))
        }, 800)
      }
    }

    const button = buttonRef.current
    if (button) {
      button.addEventListener('mousemove', handleMouseMove)
      button.addEventListener('mouseleave', handleMouseLeave)
      button.addEventListener('click', handleClick)
    }

    return () => {
      if (button) {
        button.removeEventListener('mousemove', handleMouseMove)
        button.removeEventListener('mouseleave', handleMouseLeave)
        button.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const Comp = asChild ? Slot : 'button'

  if (asChild) {
    return (
      <Comp
        ref={buttonRef}
        className={cn(
          liquidGlassButtonVariants({ variant, size }),
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98]",
          className
        )}
        style={{ 
          transformStyle: 'preserve-3d',
          transition: 'transform 0.1s ease-out'
        }}
        {...props}
      >
        {children}
      </Comp>
    )
  }

  return (
    <Comp
      ref={buttonRef}
      className={cn(
        liquidGlassButtonVariants({ variant, size }),
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98]",
        className
      )}
      style={{ 
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out'
      }}
      {...props}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 dark:from-white/20 dark:via-white/5" />

      {/* Liquid Movement Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl animate-[liquidMove_3s_ease-in-out_infinite] dark:via-white/20" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-transparent via-white/20 to-transparent blur-xl animate-[liquidMove_4s_ease-in-out_infinite_reverse] dark:via-white/15" />
      </div>

      {/* Enhanced Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out rounded-2xl dark:via-white/25 skew-x-12" />

      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute rounded-full bg-white/40 dark:bg-white/30 pointer-events-none animate-[ripple_0.8s_ease-out_forwards]"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '10px',
            height: '10px',
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Button Content with Enhanced Shadow */}
      <div className="relative flex items-center gap-2 font-semibold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] transition-all duration-300" style={{ transform: 'translateZ(4px)' }}>
        {children}
      </div>

      {/* Multiple Highlight Layers */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent dark:via-white/40" />
      <div className="absolute bottom-0 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent dark:via-white/30" />

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-tl-2xl opacity-60 dark:from-white/10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-white/20 to-transparent rounded-br-2xl opacity-60 dark:from-white/10" />

      {/* Enhanced Outer Glow on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/10 dark:group-hover:bg-white/15 blur-2xl transition-all duration-500 -z-10 scale-95 group-hover:scale-110" />
      
      {/* Pulsing Ambient Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-3xl animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes liquidMove {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        @keyframes ripple {
          0% {
            width: 10px;
            height: 10px;
            opacity: 1;
          }
          100% {
            width: 200px;
            height: 200px;
            opacity: 0;
          }
        }
      `}</style>
    </Comp>
  )
}

export { LiquidGlassButton, liquidGlassButtonVariants }