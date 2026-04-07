# Design Specification: Retro Landing 🏖️

## Visual Identity

### Design Philosophy

Imagine stepping into a mid-century modern home in Palm Springs on a late afternoon in January. The sun hangs low, casting long geometric shadows across pink stucco walls. A kidney-shaped pool reflects the fading light in fragmented patterns. The air is warm but dry, the sky a gradient from dusty coral to pale turquoise.

**This is the visual world we're creating:**
- Sun-drenched optimism filtered through geometric precision
- Mid-century bones with contemporary confidence
- Nostalgic but not dated

### Key Adjectives

| Quality | Description |
|---------|-------------|
| **Warm / Cool Tension** | Desert tones against pool blues create visual energy |
| **Geometric / Organic** | Sharp lines beside soft curves (echoing kidney pools) |
| **Confident** | Bold choices without intimidation |
| **Minimal / Rich** | Few elements, but each with depth |
| **Retro / Contemporary** | Period sensibility with modern rendering |

---

## Color System

### Primary Palette (Backgrounds & Surfaces)

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Background** | Desert Sand | `#F5E6D3` | Main page background |
| **Surface Primary** | Pool Blue | `#7EC8C8` | Cards, panels, CTAs |
| **Surface Secondary** | Mint Cream | `#E8F5F5` | Secondary surfaces |
| **Surface Dark** | Midnight Teal | `#1A3A3A` | Footers, contrast sections |
| **Paper White** | Cream | `#FDF6E9` | Elevated cards, text backgrounds |

### Accent Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary Accent** | Sunset Coral | `#FF6B6B` | Main CTAs, highlights |
| **Secondary Accent** | Peach | `#FFCDAB` | Secondary buttons, hover |
| **Tertiary Accent** | Soft Pink | `#F2C4C4` | Decorative elements |
| **Gold Accent** | Palm Gold | `#D4A853` | Special highlights |

### Text Colors

| Role | Color | Hex | Contrast |
|------|-------|-----|----------|
| **Primary Text** | Charcoal | `#2D2D2D` | 14.5:1 on cream |
| **Secondary Text** | Warm Gray | `#6B6560` | 5.2:1 on cream |
| **Muted Text** | Dusty Rose | `#9B8B8B` | 3.2:1 on cream |
| **Light Text** | Off White | `#FAFAFA` | On dark backgrounds |

### Shadow Colors

| Shadow Type | Value | Usage |
|-------------|-------|-------|
| **Warm Shadow** | `rgba(45, 45, 45, 0.15)` | Cards, elevated surfaces |
| **Hard Shadow** | `6px 6px 0px var(--color-charcoal)` | Retro offset effect |
| **Long Shadow** | `12px 12px 0px rgba(45, 45, 45, 0.1)` | Architectural cast |

### CSS Variables

```css
:root {
  /* Backgrounds */
  --color-cream: #FDF6E9;
  --color-desert: #F5E6D3;
  --color-mint: #E8F5F5;
  --color-midnight: #1A3A3A;
  
  /* Accents */
  --color-teal: #7EC8C8;
  --color-teal-dark: #5BA3A3;
  --color-peach: #FFCDAB;
  --color-peach-dark: #E8A882;
  --color-coral: #FF6B6B;
  --color-pink: #F2C4C4;
  --color-gold: #D4A853;
  
  /* Text */
  --color-charcoal: #2D2D2D;
  --color-warm-gray: #6B6560;
  --color-muted: #9B8B8B;
  
  /* Shadows */
  --shadow-warm: rgba(45, 45, 45, 0.15);
  --shadow-deep: rgba(45, 45, 45, 0.25);
}
```

---

## Typography

### Font Families

| Role | Font | Fallback |
|------|------|----------|
| **Display/Hero** | Playfair Display | Georgia, serif |
| **Headings** | Archivo Black | system-ui, sans-serif |
| **Body** | Work Sans | system-ui, sans-serif |
| **Accent** | Space Mono | monospace |

### Type Scale

```css
/* Display */
--font-display: 4.5rem / 5rem / -0.02em;  /* 72px */

/* Headings */
--font-7xl: 4.5rem / 5rem / -0.02em;      /* 72px */
--font-6xl: 3.75rem / 4rem / -0.01em;     /* 60px */
--font-5xl: 3rem / 3.5rem / 0;            /* 48px */
--font-4xl: 2.25rem / 2.75rem / 0;        /* 36px */
--font-3xl: 1.875rem / 2.25rem / 0;       /* 30px */
--font-2xl: 1.5rem / 2rem / 0;            /* 24px */
--font-xl: 1.25rem / 1.75rem / 0.01em;    /* 20px */
--font-lg: 1.125rem / 1.75rem / 0.01em;   /* 18px */

/* Body */
--font-base: 1rem / 1.75rem / 0.01em;      /* 16px */
--font-sm: 0.875rem / 1.5rem / 0.01em;     /* 14px */
--font-xs: 0.75rem / 1.25rem / 0.02em;     /* 12px */
```

### Typography Guidelines

- **Display text:** Use Playfair Display for hero headlines — elegant serifs with character
- **Headings:** Archivo Black for section headers — bold presence with geometric confidence
- **Body:** Work Sans for all body copy — clean, highly legible, warm
- **Labels/Mono:** Space Mono for dates, labels, technical text — retro authenticity

---

## Shadows & Depth

The Palm Springs aesthetic features harsh architectural shadows — long, defined cast shadows rather than soft diffuse shadows.

### Shadow System

```css
/* Subtle elevation */
--shadow-sm: 0 2px 4px var(--shadow-warm);

/* Card elevation */
--shadow-md: 0 4px 12px var(--shadow-warm);

/* Elevated cards */
--shadow-lg: 0 8px 24px var(--shadow-warm);

/* Retro hard shadow — iconic 60s feel */
--shadow-retro: 6px 6px 0px var(--color-charcoal);

/* Long architectural shadow */
--shadow-long: 12px 12px 0px rgba(45, 45, 45, 0.1);

/* Inset/pressed effect */
--shadow-inset: inset 0 2px 4px rgba(45, 45, 45, 0.1);
```

### Usage

- **Cards:** `--shadow-md` for default, `--shadow-lg` on hover
- **Buttons:** `--shadow-retro` for primary buttons
- **Feature blocks:** `--shadow-long` for that architectural cast
- **Inputs:** `--shadow-inset` for recessed appearance

---

## Spacing System

### Base Unit: 4px

| Name | Value | Usage |
|------|-------|-------|
| **space-1** | 4px | Tight internal spacing |
| **space-2** | 8px | Icon padding, tight pairs |
| **space-4** | 16px | Standard padding |
| **space-6** | 24px | Card padding |
| **space-8** | 32px | Section internal padding |
| **space-12** | 48px | Component separation |
| **space-16** | 64px | Small section separation |
| **space-20** | 80px | Medium section separation |
| **space-24** | 96px | Large section gap |
| **space-32** | 128px | Hero to content gap |
| **space-40** | 160px | Expansive sections |

### Spacing Guidelines

- **Macro whitespace:** Generous padding between sections (120px–200px vertical)
- **Micro whitespace:** Tight spacing within components (8px–16px)
- **Asymmetric balance:** Unequal margins create visual interest
- **Vertical rhythm:** 8px base unit for all spacing

---

## Border Radius

| Element | Value | Rationale |
|---------|-------|-----------|
| Buttons (default) | 8px | Slightly rounded, modern but not bubbly |
| Buttons (pill) | 9999px | Vintage pill shape for special CTAs |
| Cards | 12px | Subtle softness, architectural corners |
| Images | 4px | Minimal—just enough to soften edges |
| Inputs | 6px | Clean, functional |
| Decorative shapes | 0px | Sharp geometry for mid-century feel |

---

## Visual Elements

### Geometric Shapes

**Primary Motifs:**
- Circles (pools, sun, atomic age)
- Rounded rectangles (architecture)
- Diagonal lines (shadows, sun angles)
- Chevron patterns (60s textile influence)

### Textures

**Paper Grain Overlay:**
- Opacity: 3–5%
- Warm cream color
- Full-page subtle texture

**Stucco Texture:**
- Fine noise pattern
- CSS-only implementation
- Opacity: 8–12%

### Icon Style

- **Style:** Outlined geometric with warm strokes
- **Stroke weight:** 2px
- **Corner treatment:** Slightly rounded (2px radius)
- **Libraries:** Phosphor Icons (Regular), Lucide React

---

## Section Patterns

### 1. Hero Section
- Full viewport height (80–100vh)
- Large display typography centered
- Geometric background shapes
- Single primary CTA

### 2. Introduction/Brief
- Moderate density
- Shorter vertical padding
- Text + optional image

### 3. Features Grid
- 3-4 columns on desktop, stack mobile
- Card components with icons
- Hard shadow treatments

### 4. Visual Showcase
- Full-width imagery or gallery
- Alternating layouts possible

### 5. Testimonial
- Expansive, single column
- Large quotation typography
- Minimal surrounding elements

### 6. Final CTA
- Full-width colored band
- High contrast
- Focused action

### 7. Footer
- Dark background (midnight teal)
- Clean, organized
- Essential links only

---

## Voice & Tone

### Copy Style

**Tone:** Sophisticated 1960s Palm Springs hotel brochure — confident, warm, slightly playful, effortlessly stylish.

**Never:** Stuffy, overly casual, apologetic, or forced.

### Examples

| Context | Copy |
|---------|------|
| **Hero headline** | "Where the Desert Meets Design" |
| **CTA primary** | "Step Inside" or "Reserve Your Escape" |
| **CTA secondary** | "See the Collection" |
| **Microcopy** | "Crafted with intention" |

---

## Responsive Breakpoints

```css
/* Mobile first approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### Responsive Adjustments

- **Mobile:** Single column, reduced padding, stacked layouts
- **Tablet:** 2 columns, 768px breakpoint
- **Desktop:** Full layout, generous spacing

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for text
- Focus visible on all interactive elements
- Full keyboard navigation support
- Respect `prefers-reduced-motion`
- Touch targets: minimum 44×44px

---

## Animation Philosophy

- **Easing:** `ease-out` for entrances, `ease-in-out` for state changes
- **Durations:** 200–400ms for micro-interactions, 600–800ms for page animations
- **Effects:** Subtle parallax, staggered reveals, hover lifts
- **Performance:** Use `transform` and `opacity` only for animations

---

*Design system for Retro Landing — Palm Springs mid-century modern aesthetic*
