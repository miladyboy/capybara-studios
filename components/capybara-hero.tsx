"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function CapybaraHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Simple floating animation for elements
    const elements = container.querySelectorAll(".floating-element")

    elements.forEach((el, index) => {
      const htmlEl = el as HTMLElement
      const baseDelay = index * 0.5

      // Set initial position with slight randomness
      htmlEl.style.animationDelay = `${baseDelay}s`
    })
  }, [])

  return (
    <div ref={containerRef} className="relative h-full w-full">
      {/* Main capybara character */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/placeholder.svg?height=300&width=300"
          alt="Capybara mascot"
          width={300}
          height={300}
          className="floating-element animate-float"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[15%] left-[10%] floating-element animate-float">
        <div className="bg-purple-200 h-16 w-16 rounded-full flex items-center justify-center">
          <span className="text-purple-800 text-xl">✨</span>
        </div>
      </div>

      <div className="absolute top-[20%] right-[15%] floating-element animate-float">
        <div className="bg-blue-200 h-12 w-12 rounded-full flex items-center justify-center">
          <span className="text-blue-800 text-lg">🤖</span>
        </div>
      </div>

      <div className="absolute bottom-[20%] left-[20%] floating-element animate-float">
        <div className="bg-pink-200 h-14 w-14 rounded-full flex items-center justify-center">
          <span className="text-pink-800 text-xl">💡</span>
        </div>
      </div>

      <div className="absolute bottom-[15%] right-[10%] floating-element animate-float">
        <div className="bg-amber-200 h-10 w-10 rounded-full flex items-center justify-center">
          <span className="text-amber-800 text-lg">🎯</span>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-pink-100/50 rounded-3xl -z-10"></div>
    </div>
  )
}
