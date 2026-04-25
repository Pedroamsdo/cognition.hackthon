"use client"

import { motion } from "framer-motion"
import { MessageCircle, Check, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function HeroSplit() {
  return (
    <section className="min-h-screen pt-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-emerald-50/50 to-white" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-teal-100/40 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-emerald-100/40 to-transparent rounded-full blur-3xl" />
      
      {/* Central headline */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center pt-12 pb-8 px-6"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-600 text-white text-sm font-medium mb-8 shadow-lg shadow-teal-600/25"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          Seu professor disponível 24/7
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-display)] text-gray-900 max-w-5xl mx-auto leading-tight text-balance">
          Estude com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-600">
            WhatsApp
          </span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto text-pretty"
        >
          Dois mentores especializados prontos para ajudar você a dominar{" "}
          <span className="text-emerald-600 font-semibold">Redação</span> e{" "}
          <span className="text-teal-600 font-semibold">Matemática</span>
        </motion.p>
      </motion.div>

      {/* Split sections */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 mt-10">
        {/* Writing Section - Left */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500 opacity-90" />
          <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 overflow-hidden min-h-[520px] shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-emerald-100/50 blur-xl" />
            <div className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-teal-100/50 blur-xl" />
            
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="mb-6">
                <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-br from-emerald-500 to-teal-600 mb-5 shadow-lg shadow-emerald-500/30 transform group-hover:scale-110 transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&q=85"
                    alt="Professor Cassiano"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                  Professor Cassiano
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                Desenvolva sua escrita com feedback personalizado, correções detalhadas e dicas para criar textos impactantes.
              </motion.p>

              <motion.ul variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "Correção de redações ENEM",
                  "Análise de coerência textual",
                  "Sugestões de vocabulário",
                  "Prática de gêneros textuais",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-4 text-gray-800 font-medium text-lg"
                  >
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={itemVariants}>
                <ChatPreview 
                  type="writing"
                  messages={[
                    { from: "user", text: "Pode corrigir minha redação?" },
                    { from: "ai", text: "Claro! Envie o texto que vou analisar estrutura, argumentação e gramática." },
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Math Section - Right */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative group md:mt-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-3xl transform -rotate-1 group-hover:-rotate-2 transition-transform duration-500 opacity-90" />
          <div className="relative bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 overflow-hidden min-h-[520px] shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
            {/* Floating elements */}
            <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-teal-100/50 blur-xl" />
            <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-cyan-100/50 blur-xl" />
            
            <div className="relative z-10">
              <motion.div variants={itemVariants} className="mb-6">
                <div className="relative w-24 h-24 rounded-full p-1 bg-gradient-to-br from-teal-600 to-cyan-600 mb-5 shadow-lg shadow-teal-500/30 transform group-hover:scale-110 transition-transform">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=85"
                    alt="Professor Weiss"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                  Professor Weiss
                </h2>
              </motion.div>

              <motion.p variants={itemVariants} className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                Resolva problemas passo a passo, entenda conceitos complexos e domine a matemática de forma intuitiva.
              </motion.p>

              <motion.ul variants={containerVariants} className="space-y-4 mb-8">
                {[
                  "Resolução passo a passo",
                  "Explicação de fórmulas",
                  "Preparação para ENEM",
                  "Do básico ao avançado",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-center gap-4 text-gray-800 font-medium text-lg"
                  >
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-md">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={itemVariants}>
                <ChatPreview 
                  type="math"
                  messages={[
                    { from: "user", text: "Como resolver x² - 5x + 6 = 0?" },
                    { from: "ai", text: "Vou te mostrar usando Bhaskara! a=1, b=-5, c=6..." },
                  ]}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="relative z-10 text-center mt-16 pb-20"
      >
        <Button
          size="lg"
          className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white gap-3 text-lg px-10 py-7 rounded-2xl shadow-xl shadow-teal-600/30 hover:shadow-2xl hover:shadow-teal-600/40 transition-all transform hover:scale-105"
          asChild
        >
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-6 h-6" />
            Conversar com os Mentores
            <GraduationCap className="w-5 h-5" />
          </a>
        </Button>
        <p className="mt-6 text-base text-gray-500">
          Basta enviar uma mensagem e começar a aprender
        </p>
      </motion.div>
    </section>
  )
}

function ChatPreview({ 
  type, 
  messages 
}: { 
  type: "writing" | "math"
  messages: { from: "user" | "ai"; text: string }[] 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="bg-gray-50 rounded-2xl p-4 border border-gray-200 shadow-inner"
    >
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-200">
        <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <span className="text-sm font-semibold text-gray-900">WhatsApp</span>
        <span className="ml-auto text-xs text-gray-500 bg-teal-100 px-2 py-0.5 rounded-full text-teal-700 font-medium">online</span>
      </div>
      
      <div className="space-y-2">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.from === "user" ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 + i * 0.2 }}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm font-medium ${
                msg.from === "user"
                  ? "bg-[#DCF8C6] text-gray-900 rounded-tr-sm"
                  : "bg-white text-gray-900 border border-gray-200 rounded-tl-sm shadow-sm"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
