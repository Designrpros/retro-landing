/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        archivo: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
        dm: ['var(--font-dm)', 'system-ui', 'sans-serif'],
      },
      colors: {
        desert: {
          DEFAULT: '#F5E6D3',
          dark: '#E5D6C3',
        },
        pool: {
          DEFAULT: '#7FCCCC',
          dark: '#5BA3A3',
          light: '#E8F5F5',
        },
        sunset: {
          DEFAULT: '#E85A3F',
          coral: '#D4746E',
        },
        peach: {
          DEFAULT: '#FFCDAB',
          dark: '#E8A882',
        },
        midnight: {
          DEFAULT: '#1A3A3A',
        },
        charcoal: {
          DEFAULT: '#2D2424',
        },
        gold: {
          DEFAULT: '#D4A853',
        },
      },
      boxShadow: {
        'retro': '6px 6px 0px #2D2424',
        'retro-sm': '4px 4px 0px #2D2424',
        'retro-lg': '8px 8px 0px #2D2424',
        'retro-hover': '8px 8px 0px #2D2424',
        'warm': '0 8px 24px rgba(196, 168, 138, 0.4)',
        'warm-sm': '0 4px 12px rgba(196, 168, 138, 0.3)',
        'warm-lg': '0 12px 32px rgba(196, 168, 138, 0.5)',
        'inset': 'inset 0 2px 4px rgba(45, 36, 36, 0.08)',
        'retro-dark': '4px 4px 0px #1A3A3A',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'float-slow': 'float 8s ease-in-out infinite 1s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
