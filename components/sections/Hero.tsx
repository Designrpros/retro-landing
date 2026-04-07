'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle - Pool */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -right-20 top-1/4 w-96 h-96 bg-pool/30 rounded-full blur-3xl"
        />
        
        {/* Large Circle - Peach */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -left-20 bottom-1/4 w-80 h-80 bg-peach/40 rounded-full blur-3xl"
        />
        
        {/* Floating Geometric Shapes */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute right-1/4 top-1/3 w-24 h-24 border-4 border-pool/40 rotate-45"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute left-1/3 bottom-1/3 w-16 h-16 bg-sunset/20 rounded-full"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute right-1/3 top-20 w-8 h-32 bg-gold/30 rounded-full"
        />
      </div>
      
      {/* Diagonal Lines Decoration */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none opacity-10"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <line x1="0" y1="100" x2="100" y2="0" stroke="#2D2424" strokeWidth="0.2"/>
        <line x1="20" y1="100" x2="100" y2="20" stroke="#2D2424" strokeWidth="0.15"/>
        <line x1="0" y1="80" x2="80" y2="0" stroke="#2D2424" strokeWidth="0.15"/>
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block font-dm text-xs tracking-[0.2em] uppercase text-charcoal/60">
            Palm Springs Inspired
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.95] mb-6"
        >
          Where the
          <br />
          <span className="text-pool-dark">Desert</span> Meets
          <br />
          Design
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-dm text-lg md:text-xl text-charcoal/70 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Sun-drenched optimism filtered through geometric precision. 
          A mid-century modern experience crafted with intention.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#introduction"
            className="bg-sunset text-white px-8 py-4 rounded-lg font-archivo text-sm font-bold shadow-retro uppercase tracking-wider hover:shadow-retro-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Step Inside
          </a>
          
          <a
            href="#showcase"
            className="font-dm text-sm text-charcoal/80 hover:text-charcoal transition-colors underline-offset-4 hover:underline"
          >
            View the Collection →
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#introduction"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-charcoal/50 hover:text-charcoal transition-colors"
        >
          <span className="font-dm text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}
