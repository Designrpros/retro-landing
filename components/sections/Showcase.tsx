'use client'

import { motion } from 'framer-motion'

const showcaseImages = [
  { title: 'Poolside Living', description: 'Where water meets architecture' },
  { title: 'Desert Modern', description: 'Clean lines in warm tones' },
  { title: 'Golden Hour', description: 'Light as a material' },
]

export default function Showcase() {
  return (
    <section id="showcase" className="py-24 lg:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-dm text-xs tracking-[0.2em] uppercase text-pool-dark mb-4">
            Gallery
          </span>
          
          <h2 className="font-playfair text-4xl lg:text-5xl text-charcoal mb-4">
            Visual Stories
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative overflow-hidden rounded-xl shadow-retro transition-all duration-300 group-hover:shadow-retro-lg ${
                index === 0 ? 'aspect-[3/4]' : 'aspect-square'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-pool/40 via-peach/30 to-gold/40 group-hover:scale-105 transition-transform duration-500">
                  {/* Placeholder Pattern */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-desert/50 backdrop-blur-sm flex items-center justify-center">
                        <svg 
                          className="w-10 h-10 text-charcoal/30"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="12" cy="12" r="3" />
                          <path d="M3 9h18" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-archivo text-xl text-cream-white mb-1">{image.title}</h3>
                    <p className="font-dm text-sm text-cream-white/80">{image.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
