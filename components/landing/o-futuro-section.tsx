"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { LineChart, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: LineChart,
    title: "Inteligência para a Escola",
    description:
      "Cada interação dos alunos vira dado. A escola recebe insights sobre dúvidas mais frequentes, dificuldades de aprendizado e evolução turma a turma — pra melhorar o ensino e o conteúdo do Lupol².",
  },
  {
    icon: ShieldCheck,
    title: "Controle do Professor",
    description:
      "Em provas e momentos críticos, o professor pode pausar o acesso da turma com um clique. Sem cola, sem stress — tecnologia a favor da avaliação justa.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export function OFuturoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="o-futuro"
      ref={ref}
      className="py-28 px-6 relative overflow-hidden bg-gradient-to-br from-gray-900 via-teal-950 to-gray-900"
    >
      {/* Vertical line pattern (data/structure feel) */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px)",
          backgroundSize: "80px 100%",
        }}
      />

      {/* Animated cyan/teal orbs */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-cyan-500/25 to-teal-500/20 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-3xl"
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
            Para escolas e instituições
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-white mb-6 text-balance">
            O{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
              Futuro
            </span>{" "}
            da Educação
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto text-pretty">
            Mais do que ajudar alunos — transformar como a escola ensina
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 overflow-hidden hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500"
            >
              {/* Card gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center mb-6 shadow-xl shadow-teal-500/25"
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-[family-name:var(--font-display)]">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Corner decoration */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 opacity-5 blur-2xl group-hover:opacity-15 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
