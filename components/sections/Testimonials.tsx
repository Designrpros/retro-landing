'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonial = {
  quote: "This place captures exactly what I imagined when dreaming of retro-modernist perfection. Clean lines, warm light, and the kind of leisure that only thoughtful design can create.",
  author: "Eleanor Vance",
  title: "Architect & Design Director",
  location: "Los Angeles, CA",
}

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 bg-midnight">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pool/20 rounded-full mb-8">
            <Quote className="w-8 h-8 text-pool" />
          </div>

          <blockquote className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-cream-white leading-tight mb-8">
            "{testimonial.quote}"
          </blockquote>

          <div className="flex flex-col items-center">
            <span className="font-archivo text-lg text-gold mb-1">{testimonial.author}</span>
            <span className="font-dm text-sm text-cream-white/60 mb-1">{testimonial.title}</span>
            <span className="font-dm text-xs text-cream-white/40 uppercase tracking-wider">{testimonial.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute left-0 w-32 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 Q50 50 0 100" stroke="#7FCCCC" strokeWidth="0.5" fill="none"/>
          <path d="M20 0 Q70 50 20 100" stroke="#7FCCCC" strokeWidth="0.3" fill="none"/>
        </svg>
      </div>
    </section>
  )
}
