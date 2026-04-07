'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Introduction() {
  return (
    <section id="introduction" className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-retro-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-pool/20 to-peach/20">
                {/* Placeholder for pool image */}
                <div className="w-full h-full bg-pool/30 flex items-center justify-center">
                  <svg 
                    className="w-32 h-32 text-pool/50"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <rect x="10" y="30" width="80" height="50" rx="4" />
                    <path d="M20 40 C30 45, 40 40, 50 45 C60 50, 70 45, 80 40" />
                    <path d="M20 50 C30 55, 40 50, 50 55 C60 60, 70 55, 80 50" />
                    <path d="M20 60 C30 65, 40 60, 50 65 C60 70, 70 65, 80 60" />
                    <circle cx="85" cy="20" r="8" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunset/90 rounded-2xl -z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-playfair text-4xl text-cream-white">60s</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block font-dm text-xs tracking-[0.2em] uppercase text-pool-dark mb-4">
              Our Philosophy
            </span>
            
            <h2 className="font-playfair text-4xl lg:text-5xl text-charcoal mb-6">
              Design for Living
            </h2>
            
            <p className="font-dm text-lg text-warm-gray leading-relaxed mb-6">
              Imagine a place where the desert meets design — where clean geometric lines 
              embrace natural curves, and where every detail has been intentionally crafted 
              for the pursuit of leisure.
            </p>
            
            <p className="font-dm text-base text-warm-gray/80 leading-relaxed mb-8">
              We believe in the power of mid-century modernism: an aesthetic that celebrates 
              sun-drenched optimism, architectural precision, and the timeless appeal of 
              simplicity. Our spaces are designed to inspire, to relax, and to elevate 
              everyday moments into extraordinary experiences.
            </p>

            <div className="flex flex-wrap gap-6">
              {[
                { number: '1965', label: 'Heritage' },
                { number: '100+', label: 'Projects' },
                { number: '50+', label: 'Architects' },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-archivo text-3xl text-sunset">{stat.number}</span>
                  <span className="block font-dm text-xs uppercase tracking-wider text-warm-gray">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
