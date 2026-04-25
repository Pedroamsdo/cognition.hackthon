"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Clock, BrainCircuit, Target, Zap } from "lucide-react"

const reasons = [
  {
    icon: Clock,
    title: "Disponível 24/7",
    description: "Estude quando quiser, no seu horário. Madrugada, feriado, fim de semana.",
  },
  {
    icon: BrainCircuit,
    title: "IA Especializada",
    description: "Respostas precisas e personalizadas para seu nível de conhecimento.",
  },
  {
    icon: Target,
    title: "Foco no Resultado",
    description: "Preparação direcionada para ENEM, vestibulares e concursos.",
  },
  {
    icon: Zap,
    title: "Resposta Instantânea",
    description: "Texto, áudio ou imagem — perguntou, respondeu. Sem espera, sem fila.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
}

export function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="porque" className="py-28 px-6 relative overflow-hidden bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>
      
      {/* Animated gradient orbs */}
      <motion.div
        animate={{ 
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-br from-teal-500/30 to-emerald-500/30 blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -50, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500/20 to-teal-500/20 blur-3xl"
      />
      
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
            className="inline-block px-5 py-2 rounded-full bg-teal-500/20 text-teal-300 text-sm font-semibold mb-6 border border-teal-500/30 backdrop-blur-sm"
          >
            Por que escolher
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-white mb-6 text-balance">
            Por que nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">
              Mentores?
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Uma nova forma de aprender, direto no seu WhatsApp
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 overflow-hidden hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500"
            >
              {/* Card gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6 shadow-xl shadow-teal-500/25"
              >
                <reason.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {reason.description}
              </p>

              {/* Corner decoration */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 opacity-5 blur-2xl group-hover:opacity-15 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white gap-3 text-xl px-12 py-8 rounded-2xl shadow-2xl shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 font-semibold"
              asChild
            >
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-7 h-7" />
                Começar Agora no WhatsApp
                <ArrowRight className="w-6 h-6" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-8 text-gray-500 text-base"
          >
            Sem cadastro, sem complicação - basta enviar uma mensagem
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
