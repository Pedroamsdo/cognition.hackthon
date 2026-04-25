"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Play } from "lucide-react"

const VIDEO_ID = "s36qaOT0kxc"

export function DemoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="demo"
      ref={ref}
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white" />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-teal-100/50 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-teal-600 text-white text-sm font-semibold mb-6 shadow-lg shadow-teal-600/25"
          >
            <Play className="w-4 h-4 fill-white" />
            Veja em ação
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6 text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              Demo
            </span>{" "}
            ao vivo
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Veja o Lupol².ai resolvendo dúvidas reais de redação e matemática no WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="relative group"
        >
          {/* Gradient border glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-teal-500 via-emerald-500 to-cyan-500 rounded-3xl opacity-30 group-hover:opacity-60 blur-xl transition-opacity duration-500" />

          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-2 border-teal-100 bg-gray-900">
            <iframe
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
              title="Demo do Lupol².ai"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-8 text-gray-500 text-sm"
        >
          Não consegue ver o vídeo?{" "}
          <a
            href={`https://youtube.com/watch?v=${VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 font-semibold underline underline-offset-4"
          >
            Abrir no YouTube
          </a>
        </motion.p>
      </div>
    </section>
  )
}
