'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 px-6 bg-sunset">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block font-dm text-xs tracking-[0.2em] uppercase text-cream-white/70 mb-4">
            Begin Your Journey
          </span>
          
          <h2 className="font-playfair text-4xl lg:text-5xl xl:text-6xl text-cream-white mb-6">
            Reserve Your Escape
          </h2>
          
          <p className="font-dm text-lg text-cream-white/80 max-w-xl mx-auto mb-10">
            Join us in the pursuit of leisure. Sign up to receive updates, 
            exclusive offers, and early access to our curated experiences.
          </p>

          {/* Email Signup Form */}
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg bg-cream-white text-charcoal font-dm placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-cream-white"
              required
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-lg bg-midnight text-cream-white font-archivo font-bold text-sm uppercase tracking-wider hover:bg-charcoal transition-colors shadow-retro-sm"
            >
              Join
            </button>
          </form>

          <p className="font-dm text-xs text-cream-white/50">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
