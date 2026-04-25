"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Send, Lightbulb } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Abra o WhatsApp",
    description: "Clique no botão e inicie uma conversa com nosso mentor de IA.",
  },
  {
    number: "02",
    icon: Send,
    title: "Envie sua Dúvida",
    description: "Mande sua questão de matemática ou redação. Pode ser texto, foto ou áudio.",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Receba a Resposta",
    description: "Em segundos, receba explicações detalhadas e personalizadas.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="como-funciona" className="py-28 px-6 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-100/50 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-emerald-100/50 blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-5 py-2 rounded-full bg-teal-600 text-white text-sm font-semibold mb-6 shadow-lg shadow-teal-600/25"
          >
            Simples assim
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6 text-balance">
            Como{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              Funciona?
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Três passos simples para começar a aprender
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-10 relative"
        >
          {/* Connection line */}
          <div className="hidden md:block absolute top-28 left-[20%] right-[20%] h-1 bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 rounded-full" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white border-2 border-teal-100 rounded-3xl p-10 h-full shadow-xl hover:shadow-2xl hover:border-teal-300 transition-all duration-500">
                {/* Number badge */}
                <div className="absolute -top-5 left-10 px-5 py-2 rounded-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white text-lg font-bold shadow-lg shadow-teal-500/30">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-8 mt-4 shadow-xl shadow-teal-500/25 group-hover:shadow-2xl group-hover:shadow-teal-500/35 transition-shadow"
                >
                  <step.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
