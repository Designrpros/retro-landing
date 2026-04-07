# Technical Specification: Retro Landing ⚙️

## Technology Stack

| Category | Choice | Rationale |
|----------|--------|-----------|
| **Framework** | Next.js 14 (App Router) | SSR, performance, modern React patterns |
| **Styling** | Tailwind CSS + shadcn/ui | Utility-first, design system alignment |
| **Animations** | Framer Motion | React-native, hardware-accelerated |
| **Icons** | Lucide React | Clean, geometric, tree-shakeable |
| **Fonts** | Google Fonts | Playfair Display, Work Sans, Space Mono |
| **Build Tool** | Next.js built-in | Zero extra config for this scope |

---

## Project Structure

```
retro-landing/
├── app/
│   ├── globals.css           # CSS variables, base styles
│   ├── layout.tsx            # Root layout with fonts
│   ├── page.tsx              # Landing page composition
│   └── sections/
│       ├── hero.tsx
│       ├── introduction.tsx
│       ├── features.tsx
│       ├── showcase.tsx
│       ├── testimonial.tsx
│       ├── cta.tsx
│       └── footer.tsx
├── components/
│   ├── ui/                   # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── layout/
│   │   ├── max-width-wrapper.tsx
│   │   ├── section.tsx
│   │   └── grid.tsx
│   ├── navigation/
│   │   ├── navbar.tsx
│   │   └── nav-link.tsx
│   ├── hero/
│   │   ├── hero-title.tsx
│   │   └── geometric-background.tsx
│   ├── features/
│   │   └── feature-card.tsx
│   └── decorative/
│       ├── geometric-divider.tsx
│       └── pattern-background.tsx
├── lib/
│   ├── utils.ts              # cn() helper
│   └── animations.ts         # Shared Framer Motion variants
├── public/
│   ├── images/               # Optimized images
│   ├── icons/                # SVG icons
│   └── patterns/             # Background patterns
├── styles/
│   ├── tailwind.config.ts
│   └── globals.css
└── docs/                     # Documentation
```

---

## Tailwind Configuration

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        cream: "#FDF6E9",
        desert: "#F5E6D3",
        mint: "#E8F5F5",
        midnight: "#1A3A3A",
        
        // Accents
        teal: {
          DEFAULT: "#7EC8C8",
          dark: "#5BA3A3",
        },
        peach: {
          DEFAULT: "#FFCDAB",
          dark: "#E8A882",
        },
        coral: "#FF6B6B",
        pink: "#F2C4C4",
        gold: "#D4A853",
        
        // Text
        charcoal: "#2D2D2D",
        "warm-gray": "#6B6560",
        muted: "#9B8B8B",
      },
      fontFamily: {
        display: ["Playfair Display", "Georgia", "serif"],
        heading: ["Archivo Black", "system-ui", "sans-serif"],
        body: ["Work Sans", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      boxShadow: {
        "retro": "6px 6px 0px #2D2D2D",
        "retro-sm": "4px 4px 0px #2D2D2D",
        "retro-lg": "8px 8px 0px #2D2D2D",
        "long": "12px 12px 0px rgba(45, 45, 45, 0.1)",
        "warm": "0 4px 12px rgba(45, 45, 45, 0.15)",
        "warm-lg": "0 8px 24px rgba(45, 45, 45, 0.15)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "38": "9.5rem",
      },
      borderRadius: {
        "retro": "12px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Font Loading Strategy

```typescript
// app/layout.tsx
import { Playfair_Display, Work_Sans, Space_Mono } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${workSans.variable} ${spaceMono.variable}`}
    >
      <body className="font-body bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## Animation Specifications

### Framer Motion Variants

```typescript
// lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
};

export const cardLift = {
  rest: { y: 0, boxShadow: "0 4px 12px rgba(45, 45, 45, 0.15)" },
  hover: {
    y: -4,
    boxShadow: "0 12px 32px rgba(45, 45, 45, 0.2)",
  },
  transition: { duration: 0.3, ease: "easeOut" },
};

export const letterStagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const letterAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] },
};
```

### Animation Guidelines

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page load | Fade up elements | 600ms | ease-out |
| Scroll reveal | Fade up + translateY | 600ms | ease-out |
| Button hover | Scale 1.02 | 200ms | ease-out |
| Button click | Scale 0.98 | 100ms | ease-out |
| Card hover | Lift + shadow increase | 300ms | ease-out |
| Nav underline | Width 0 → 100% | 200ms | ease-in-out |
| Geometric parallax | Slow scroll offset | ongoing | linear |

---

## Component Specifications

### Button Variants

```typescript
// Button variants to implement
const buttonVariants = {
  primary: "bg-coral text-white shadow-retro hover:shadow-retro-lg hover:-translate-y-0.5",
  secondary: "bg-teal text-white shadow-retro hover:shadow-retro-lg hover:-translate-y-0.5",
  outline: "border-2 border-charcoal bg-transparent hover:bg-charcoal hover:text-white",
  ghost: "bg-transparent hover:bg-cream/50",
};

const buttonSizes = {
  default: "px-6 py-3 text-base",
  sm: "px-4 py-2 text-sm",
  lg: "px-8 py-4 text-lg",
  icon: "h-10 w-10",
};
```

### Card Pattern

```typescript
// Card component structure
const cardStyles = `
  bg-mint
  rounded-retro
  p-6
  shadow-warm
  transition-all
  duration-300
  hover:shadow-warm-lg
  hover:-translate-y-1
`;
```

### Section Spacing

```typescript
// Section wrapper spacing
const sectionSpacing = {
  default: "py-20 md:py-28 lg:py-32",
  compact: "py-16 md:py-20",
  expansive: "py-32 md:py-40 lg:py-48",
};
```

---

## Performance Targets

| Metric | Target | Implementation |
|--------|--------|----------------|
| **LCP** | < 2.0s | Preload hero image, use `next/image` |
| **CLS** | < 0.05 | Define image dimensions, use aspect-ratio |
| **FID** | < 100ms | Defer non-critical JS |
| **TBT** | < 200ms | Lazy load below-fold |
| **Total Size** | < 500KB | Image optimization, minification |

### Optimization Strategies

1. **Images**
   - Use WebP/AVIF formats
   - Implement lazy loading (`loading="lazy"`)
   - Use `next/image` for optimization
   - Preload hero image

2. **Fonts**
   - Preload font files
   - Use `font-display: swap`
   - Subset fonts (Latin only)

3. **CSS/JS**
   - Purge unused Tailwind classes
   - Minify on build
   - Inline critical CSS

4. **Animations**
   - Use `transform` and `opacity` only
   - Avoid animating layout properties
   - Use `will-change` sparingly

---

## Responsive Breakpoints

```css
/* Tailwind defaults - mobile first */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Responsive Patterns

| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero | 100vh, stacked | 80vh | 100vh |
| Features | 1 column | 2 columns | 3–4 columns |
| Testimonial | Full width | Full width | Max-width centered |
| Nav | Hamburger | Hamburger | Horizontal |
| Section padding | py-16 | py-20 | py-32 |

---

## Accessibility Requirements

| Requirement | Implementation |
|-------------|----------------|
| **WCAG Level** | AA minimum |
| **Contrast** | 4.5:1 normal text, 3:1 large text |
| **Focus** | Visible focus ring on all interactive elements |
| **Keyboard** | Full keyboard navigation support |
| **ARIA** | Semantic HTML + ARIA where needed |
| **Motion** | Respect `prefers-reduced-motion` |
| **Touch** | Minimum 44×44px touch targets |

---

## SEO Requirements

```html
<!-- Essential meta tags -->
<title>Retro Landing — Mid-Century Modern Design</title>
<meta name="description" content="A landing page capturing the essence of Palm Springs mid-century modernism — clean lines, warm colors, and architectural charm.">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Open Graph -->
<meta property="og:title" content="Retro Landing">
<meta property="og:description" content="Mid-century modern design, Palm Springs aesthetic">
<meta property="og:image" content="/og-image.jpg">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Retro Landing">
<meta name="twitter:description" content="Mid-century modern design, Palm Springs aesthetic">
<meta name="twitter:image" content="/og-image.jpg">
```

---

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.x",
    "tailwind-merge": "^2.x",
    "clsx": "^2.x",
    "class-variance-authority": "^0.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^20.x",
    "@types/react": "^18.x",
    "@types/react-dom": "^18.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "tailwindcss": "^3.x",
    "eslint": "^8.x",
    "eslint-config-next": "14.x",
    "prettier": "^3.x"
  }
}
```

---

## Build Configuration

```javascript
// next.config.js
const nextConfig = {
  output: "export", // Static site generation
  distDir: "dist",
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
};

module.exports = nextConfig;
```

---

## Development Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

---

*Technical specification for Retro Landing — Palm Springs mid-century aesthetic* 🏖️⚙️
