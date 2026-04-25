"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MessageCircle, GraduationCap } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-teal-100 shadow-lg shadow-teal-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/25 group-hover:shadow-xl group-hover:shadow-teal-500/30 transition-shadow">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 tracking-tight">
            Lupol<sup className="text-teal-600">2</sup><span className="text-teal-600">.ai</span>
          </span>
        </motion.a>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "Como Funciona", href: "#como-funciona" },
            { label: "Porquê", href: "#porque" },
            { label: "Demo", href: "#demo" },
            { label: "O Futuro", href: "#o-futuro" },
          ].map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-600 hover:text-teal-600 transition-colors font-semibold relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Button 
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white gap-2 px-6 py-5 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:shadow-teal-500/30 transition-all rounded-xl font-semibold"
            asChild
          >
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Fale Conosco
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  )
}
