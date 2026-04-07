'use client'

import { motion } from 'framer-motion'
import { Sun, Home, Compass, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Sun,
    title: 'Natural Light',
    description: 'Floor-to-ceiling glass walls blur the line between indoor comfort and outdoor tranquility.',
    color: 'bg-sunset/10 text-sunset',
  },
  {
    icon: Home,
    title: 'Indoor-Outdoor Living',
    description: 'Expansive patios and poolside spaces designed for the seamless art of desert leisure.',
    color: 'bg-pool/10 text-pool-dark',
  },
  {
    icon: Compass,
    title: 'Geometric Precision',
    description: 'Clean lines and intentional curves echo the architectural language of mid-century modernism.',
    color: 'bg-gold/10 text-gold',
  },
  {
    icon: Sparkles,
    title: 'Curated Details',
    description: 'Every element has been thoughtfully selected—from vintage fixtures to local materials.',
    color: 'bg-peach-dark/10 text-charcoal',
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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 px-6 bg-pool/5">
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
            What We Offer
          </span>
          
          <h2 className="font-playfair text-4xl lg:text-5xl text-charcoal mb-4">
            Architectural Excellence
          </h2>
          
          <p className="font-dm text-lg text-warm-gray max-w-2xl mx-auto">
            Four pillars of design that define every space we create — 
            principles rooted in the golden age of modernism.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group bg-desert rounded-xl p-6 shadow-retro-sm card-lift cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                  <IconComponent size={24} />
                </div>
                
                <h3 className="font-archivo text-xl text-charcoal mb-2">{feature.title}</h3>
                
                <p className="font-dm text-sm text-warm-gray leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
