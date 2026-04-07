'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  company: [
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Newsletter', href: '#' },
    { label: 'Events', href: '#' },
    { label: 'Gallery', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="py-16 lg:py-20 px-6 bg-midnight border-t border-cream-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="font-playfair text-2xl text-cream-white mb-4 block">
              Desert.
            </a>
            <p className="font-dm text-sm text-cream-white/50 mb-6">
              Sun-drenched optimism filtered through geometric precision.
            </p>
            
            <div className="flex gap-4">
              {['Instagram', 'Twitter', 'Pinterest'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream-white/10 flex items-center justify-center text-cream-white/60 hover:bg-pool/20 hover:text-pool transition-colors"
                  aria-label={social}
                >
                  <span className="font-dm text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-archivo text-sm uppercase tracking-wider text-cream-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-dm text-sm text-cream-white/50 hover:text-cream-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-archivo text-sm uppercase tracking-wider text-cream-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-dm text-sm text-cream-white/50 hover:text-cream-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-archivo text-sm uppercase tracking-wider text-cream-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="font-dm text-sm text-cream-white/50 hover:text-cream-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-dm text-xs text-cream-white/30">
            © 2024 Desert. All rights reserved. Crafted with intention.
          </p>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-dm text-xs text-cream-white/50 hover:text-gold transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
