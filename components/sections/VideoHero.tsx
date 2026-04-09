'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Play, Pause, Volume2, VolumeX } from 'lucide-react'

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.autoplay = true
      video.play().catch(() => {
        // Autoplay may be blocked by browser
        setShowControls(true)
      })
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-desert via-desert to-pool/20" />
        
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.6 }}
          src="/retro-landing/media/renders/brand_video_combined.mp4"
          muted
          loop
          playsInline
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-desert/90 via-desert/40 to-transparent" />
      </div>

      {/* Video Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 right-4 z-20 flex gap-2"
          >
            <button
              onClick={togglePlay}
              className="p-2 rounded-full bg-charcoal/30 backdrop-blur-sm hover:bg-charcoal/50 transition-colors"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause size={18} className="text-white" />
              ) : (
                <Play size={18} className="text-white" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-charcoal/30 backdrop-blur-sm hover:bg-charcoal/50 transition-colors"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <VolumeX size={18} className="text-white" />
              ) : (
                <Volume2 size={18} className="text-white" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Geometric Shapes (subtle over video) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -right-20 top-1/4 w-96 h-96 bg-pool/20 rounded-full blur-3xl"
        />
        
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -left-20 bottom-1/4 w-80 h-80 bg-peach/30 rounded-full blur-3xl"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute right-1/4 top-1/3 w-24 h-24 border-4 border-white/20 rotate-45"
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute left-1/3 bottom-1/3 w-16 h-16 bg-sunset/20 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block font-dm text-xs tracking-[0.2em] uppercase text-charcoal/70">
            Palm Springs Inspired
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-charcoal leading-[0.95] mb-6 drop-shadow-lg"
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
          className="font-dm text-lg md:text-xl text-charcoal/80 max-w-xl mx-auto mb-10 leading-relaxed drop-shadow-md"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#introduction"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-charcoal/70 hover:text-charcoal transition-colors"
        >
          <span className="font-dm text-xs tracking-widest uppercase mb-2">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}