import type { Metadata } from 'next'
import { Playfair_Display, Archivo, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  weight: ['400', '700', '900'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Retro Landing | Where the Desert Meets Design',
  description: 'A mid-century modern landing page experience crafted with intention and sun-drenched optimism.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${archivo.variable} ${dmSans.variable}`}>
      <body className="bg-[#F5E6D3] text-[#2D2424] antialiased">{children}</body>
    </html>
  )
}
