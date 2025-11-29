"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface CoffeeButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function CoffeeButton({ children, className, onClick }: CoffeeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        // Base styles
        "relative inline-block px-8 py-3 bg-amber text-coffee-brown font-handwritten text-xl font-bold rounded-lg border-2 border-coffee-brown transition-all duration-150",
        // 3D shadow effect - hard edge, no blur
        "shadow-[4px_4px_0px_0px_#2C1810]",
        // Hover effect - move down to cover shadow (press effect)
        "hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_#2C1810]",
        // Active state - fully pressed
        "active:translate-x-1 active:translate-y-1 active:shadow-none",
        className,
      )}
    >
      {children}
    </button>
  )
}