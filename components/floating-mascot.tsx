"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function FloatingMascot() {
  const mascotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mascot = mascotRef.current
    if (!mascot) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const rect = mascot.getBoundingClientRect()
      const x = clientX - rect.left - rect.width / 2
      const y = clientY - rect.top - rect.height / 2

      // Calculate distance from center
      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = 100

      // Calculate movement factor (less movement when cursor is far away)
      const factor = Math.min(distance / maxDistance, 1)

      // Apply subtle movement
      mascot.style.transform = `translate(${x * factor * 0.03}px, ${y * factor * 0.03}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={mascotRef} className="absolute -right-24 top-1/2 -translate-y-1/2 hidden xl:block">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
      >
        <div className="relative w-32 h-32">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-purple-600 opacity-20 blur-xl"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <span className="text-6xl">🤖</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
