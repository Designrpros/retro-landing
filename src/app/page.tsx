'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PoolsuiteOasis() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Compute spring positions only when mounted (client-side)
  const glowX = isMounted ? (mousePos.x / window.innerWidth - 0.5) * 50 : 0;
  const glowY = isMounted ? (mousePos.y / window.innerHeight - 0.5) * 50 : 0;
  const poolX = isMounted ? (mousePos.x / window.innerWidth - 0.5) * 30 : 0;

  return (
    <div className="relative w-full min-h-screen overflow-hidden select-none">
      {/* Lighting: Suntan Glow Blobs */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none" 
        animate={{ 
          x: glowX,
          y: glowY
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        style={{ 
          backgroundColor: 'var(--glow)', 
          top: '10%', 
          left: '50%',
          x: '-50%'
        }} 
      />
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-10 pointer-events-none" 
        animate={{ 
          x: poolX
        }}
        transition={{ type: "spring", stiffness: 30, damping: 15 }}
        style={{ 
          backgroundColor: 'var(--pool)', 
          bottom: '10%', 
          right: '10%'
        }} 
      />

      {/* Main Content Area */}
      <div className="relative z-10 h-screen w-full flex flex-col">
        
        {/* Top Section: Architectural Space */}
        <div className="flex-grow relative w-full h-full">
          
          {/* Hero Text: Drifting in */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute top-1/4 left-10 z-20"
          >
            <h1 className="text-8xl md:text-[12rem] font-black italic tracking-tighter leading-none uppercase" style={{ color: 'var(--shadow)' }}>
              Oasis<span style={{ color: 'var(--glow)' }}>.</span>
            </h1>
            <p className="text-sm tracking-[0.3em] uppercase font-medium mt-4 ml-2" style={{ color: 'var(--shadow)', opacity: 0.6 }}>
              A Digital Sanctuary for High-End Minimalism
            </p>
          </motion.div>

          {/* The "Villa" Architectural Slab */}
          <div className="absolute right-0 top-0 w-1/3 h-3/4 bg-white brutalist-shadow" 
               style={{ borderLeft: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="h-full w-full p-12 flex flex-col justify-end gap-6">
              <div className="w-full h-px bg-stone-200" />
              <div className="text-right">
                <p className="text-xs tracking-widest uppercase font-bold" style={{ color: 'var(--shadow)' }}>Villa One</p>
                <p className="text-sm opacity-50" style={{ color: 'var(--shadow)' }}>Architectural Series 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: The Pool */}
        <div className="h-[40vh] w-full pool-water relative z-30">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-full h-full opacity-20" 
              style={{ 
                background: 'radial-gradient(circle at center, white 0%, transparent 70%)', 
                mixBlendMode: 'overlay' 
              }} 
            />
          </div>
          
          {/* Floating Cassette */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-stone-800 rounded-md shadow-xl flex flex-col items-center justify-center cursor-pointer border border-stone-600 retro-cassette"
            style={{ color: 'var(--sands)' }}
          >
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[9px] font-mono uppercase tracking-tighter">REC</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-tighter">Snd-Track_01.mp3</span>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-stone-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-orange-400"
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-8">
            {['Curated Sounds', 'Sunscreen', 'Architecture'].map((link) => (
              <motion.a 
                key={link}
                href="#"
                className="text-sm uppercase tracking-widest font-medium opacity-60 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--sands)' }}
                whileHover={{ y: -2 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      {/* Status Bar */}
      <div className="fixed top-4 left-4 z-50 text-[10px] font-mono uppercase tracking-tighter opacity-40 pointer-events-none" 
           style={{ color: 'var(--shadow)' }}>
        <span>Suns out // 12:00 PM</span>
      </div>
    </div>
  );
}
