"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-10 px-6 bg-white border-t border-teal-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-teal-500/20">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-base font-bold font-[family-name:var(--font-display)] text-gray-900">
            Lupol<sup className="text-teal-600">2</sup><span className="text-teal-600">.ai</span>
          </span>
        </div>

        <p className="text-sm text-gray-500 font-medium">
          {new Date().getFullYear()} Lupol².ai. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors font-medium">
            Termos de Uso
          </a>
          <a href="#" className="text-sm text-gray-500 hover:text-teal-600 transition-colors font-medium">
            Privacidade
          </a>
        </div>
      </div>
    </motion.footer>
  )
}
