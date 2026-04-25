"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FallingElement {
  id: number
  char: string
  x: number
  duration: number
  size: number
  type: "math" | "writing"
  opacity: number
  delay: number
  sway: number
}

interface StaticElement {
  id: number
  char: string
  x: number
  y: number
  size: number
  type: "math" | "writing"
  rotation: number
  pulseDuration: number
}

const mathSymbols = [
  "π", "∑", "∫", "√", "∞", "÷", "×", "+", "−", "=", 
  "Δ", "θ", "α", "β", "γ", "λ", "μ", "σ", "φ", "ω",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "x", "y", "z", "n", "f(x)", "∂", "∇", "≠", "≤", "≥",
  "²", "³", "⁴", "⁵", "∈", "∉", "⊂", "∪", "∩", "∀"
]

const writingChars = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
  "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "§", "¶", "«", "»", "...", "!", "?", ",", ".", ";",
  ":", '"', "'", "&", "@", "~", "*", "—", "–", "…"
]

export function GlobalFallingBackground() {
  const [elements, setElements] = useState<FallingElement[]>([])
  const [staticElements, setStaticElements] = useState<StaticElement[]>([])

  const createElement = useCallback(() => {
    const type = Math.random() > 0.5 ? "math" : "writing"
    const chars = type === "math" ? mathSymbols : writingChars
    const newElement: FallingElement = {
      id: Date.now() + Math.random(),
      char: chars[Math.floor(Math.random() * chars.length)],
      x: Math.random() * 100,
      duration: 12 + Math.random() * 10,
      size: 32 + Math.random() * 72,
      type,
      opacity: 0.4 + Math.random() * 0.5,
      delay: Math.random() * 0.3,
      sway: (Math.random() - 0.5) * 80,
    }
    setElements((prev) => [...prev.slice(-35), newElement])
  }, [])

  useEffect(() => {
    // Create initial batch with staggered timing
    for (let i = 0; i < 20; i++) {
      setTimeout(() => createElement(), i * 60)
    }

    const interval = setInterval(createElement, 280)
    return () => clearInterval(interval)
  }, [createElement])

  // Static background elements for texture - generated only on client to avoid hydration mismatch
  useEffect(() => {
    const items: StaticElement[] = []
    for (let i = 0; i < 18; i++) {
      const type = Math.random() > 0.5 ? "math" : "writing"
      const chars = type === "math" ? mathSymbols : writingChars
      items.push({
        id: i,
        char: chars[Math.floor(Math.random() * chars.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 40 + Math.random() * 80,
        type,
        rotation: (Math.random() - 0.5) * 40,
        pulseDuration: 3 + Math.random() * 3,
      })
    }
    setStaticElements(items)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static scattered elements for texture */}
      {staticElements.map((el) => (
        <motion.span
          key={`static-${el.id}`}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.15, 0.3, 0.15],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: el.pulseDuration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute select-none font-bold ${
            el.type === "math" 
              ? "text-teal-500 font-mono" 
              : "text-emerald-400 font-serif italic"
          }`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: el.size,
            transform: `rotate(${el.rotation}deg)`,
          }}
        >
          {el.char}
        </motion.span>
      ))}

      {/* Falling animated elements */}
      <AnimatePresence>
        {elements.map((element) => (
          <motion.span
            key={element.id}
            initial={{ 
              y: -100, 
              x: 0,
              opacity: 0, 
              rotate: element.type === "math" ? -45 : 45, 
              scale: 0.3 
            }}
            animate={{ 
              y: "120vh", 
              x: [0, element.sway, -element.sway * 0.5, element.sway * 0.3, 0],
              opacity: [0, element.opacity, element.opacity, element.opacity * 0.5, 0], 
              rotate: element.type === "math" ? [null, 0, 45, 90] : [null, 0, -45, -90],
              scale: [0.3, 1, 1.1, 1, 0.8]
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: element.duration, 
              ease: "linear",
              delay: element.delay,
              x: {
                duration: element.duration,
                ease: "easeInOut",
              }
            }}
            className={`absolute font-bold select-none ${
              element.type === "math" 
                ? "text-teal-600 font-mono drop-shadow-lg" 
                : "text-emerald-500 font-serif italic drop-shadow-lg"
            }`}
            style={{
              left: `${element.x}%`,
              fontSize: element.size,
              textShadow: element.type === "math" 
                ? "0 0 30px rgba(13, 148, 136, 0.6), 0 0 60px rgba(13, 148, 136, 0.3)" 
                : "0 0 30px rgba(16, 185, 129, 0.6), 0 0 60px rgba(16, 185, 129, 0.3)",
            }}
          >
            {element.char}
          </motion.span>
        ))}
      </AnimatePresence>


    </div>
  )
}
