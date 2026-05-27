---
name: Digital Architect
colors:
  surface: '#10131b'
  surface-dim: '#10131b'
  surface-bright: '#363941'
  surface-container-lowest: '#0b0e15'
  surface-container-low: '#181b23'
  surface-container: '#1d2027'
  surface-container-high: '#272a32'
  surface-container-highest: '#32353d'
  on-surface: '#e0e2ed'
  on-surface-variant: '#bbc9cf'
  inverse-surface: '#e0e2ed'
  inverse-on-surface: '#2d3038'
  outline: '#859398'
  outline-variant: '#3c494e'
  surface-tint: '#3cd7ff'
  primary: '#a8e8ff'
  on-primary: '#003642'
  primary-container: '#00d4ff'
  on-primary-container: '#00586b'
  inverse-primary: '#00677e'
  secondary: '#c9bfff'
  on-secondary: '#2e009c'
  secondary-container: '#4720ca'
  on-secondary-container: '#baaeff'
  tertiary: '#00fdb0'
  on-tertiary: '#003824'
  tertiary-container: '#00dd9a'
  on-tertiary-container: '#005c3d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#b4ebff'
  primary-fixed-dim: '#3cd7ff'
  on-primary-fixed: '#001f27'
  on-primary-fixed-variant: '#004e5f'
  secondary-fixed: '#e5deff'
  secondary-fixed-dim: '#c9bfff'
  on-secondary-fixed: '#1a0063'
  on-secondary-fixed-variant: '#441cc8'
  tertiary-fixed: '#47ffb8'
  tertiary-fixed-dim: '#00e29d'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#10131b'
  on-background: '#e0e2ed'
  surface-variant: '#32353d'
  surface-void: '#0D1117'
  surface-panel: '#111827'
  border-steel: '#1E2A3A'
  text-ghost: '#F0F4FF'
  text-muted: '#8896A8'
  text-shadow: '#3D4F63'
typography:
  display-xl:
    fontFamily: Orbitron
    fontSize: 112px
    fontWeight: '700'
    lineHeight: 120px
    letterSpacing: 0.05em
  headline-hero:
    fontFamily: Orbitron
    fontSize: 72px
    fontWeight: '900'
    lineHeight: 80px
  headline-hero-mobile:
    fontFamily: Orbitron
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  section-title:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  card-header:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  lead:
    fontFamily: DM Sans
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 30px
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Barlow Condensed
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
---

## Brand & Style

This design system embodies the "Digital Architect"—a persona defined by technical precision, structural integrity, and a luxury tech-forward aesthetic. It is designed for high-end engineering portfolios, sophisticated SaaS platforms, and architectural studios that want to project a sense of "built" software.

The aesthetic is a hybrid of **Corporate Modern** and **High-Contrast Dark Mode**, utilizing heavy structural grid lines, 3D spatial depth, and controlled light emission. It avoids playful tropes in favor of a serious, "engineered" atmosphere where every element feels intentional and anchored in space. Key characteristics include:
- **Atmospheric Depth:** Layers of glass, blur, and 3D geometry.
- **Controlled Glow:** Accents do not just "exist"; they emit light onto surrounding surfaces.
- **Structural Rigor:** Heavy use of borders and grid-aligned layouts to simulate blueprints and technical diagrams.

## Colors

The palette is rooted in **Deep Space Black**, providing a high-contrast foundation for vibrant, neon-inspired architectural accents. 

- **Primary (Electric Cyan):** Used for critical paths, links, and high-energy 3D objects. It represents active energy.
- **Secondary (Neural Violet):** Used for depth, gradients, and supporting accents. It adds a layer of sophisticated mystery.
- **Tertiary (Terminal Green):** Reserved for success states, status indicators, and subtle visual variety in technical data.
- **Surface Strategy:** The system uses three tiers of dark surfaces (`#080B12` to `#111827`) to create hierarchical depth without relying on light colors.
- **Glows:** Interactive elements should utilize `rgba(0, 212, 255, 0.15)` for "bloom" effects, simulating light emission from the UI components.

## Typography

This system uses a tiered font pairing strategy to balance technical futurism with readability:
- **Orbitron (Decorative/Hero):** Used for the most high-impact, low-frequency text. It sets the sci-fi/architectural tone.
- **Syne (Headlines):** Provides a contemporary, distinctive feel for section headers and card titles. Its unique geometry bridges the gap between the rigid Orbitron and soft DM Sans.
- **DM Sans (Body):** The workhorse for all long-form content, ensuring high legibility and a touch of human warmth.
- **JetBrains Mono (Technical):** Used for metadata, small labels, and credits to reinforce the "engineered" aesthetic.
- **Barlow Condensed (Labels):** Always set in uppercase with slight tracking for a utilitarian, "blueprint" feel.

## Layout & Spacing

The layout is built on a **12-column fixed grid** for desktop, switching to a single-column fluid model for mobile. It follows a strict 4px/8px rhythm.

- **Grid Dynamics:** Use asymmetrical splits (e.g., 60/40) for "About" or "Bio" sections to create visual tension and interest.
- **Blueprinting:** Use visible or subtle `1px solid #1E2A3A` dividers to separate sections, mimicking architectural drawings.
- **Breakpoints:**
  - **Desktop (1280px+):** 80px margins, 24px gutters.
  - **Tablet (768px - 1023px):** 40px margins, 16px gutters.
  - **Mobile (<767px):** 20px margins, single column. Timeline elements should shift from center-axis to left-aligned.

## Elevation & Depth

Depth in the design system is communicated through "Light Emission" and "Physical Perspective" rather than traditional soft shadows.

- **Tonal Layering:** Background is the darkest `#080B12`. Primary cards use `#111827`. Floating navigation uses `#080B12` at 85% opacity with a `20px` backdrop blur.
- **Glassmorphism:** Use `backdrop-filter: blur(10px)` on cards and panels to create a sense of semi-transparent architectural material.
- **Glow Elevation:** Instead of `box-shadow: black`, use colored glows (Electric Cyan or Neural Violet) at low opacities (15-30%) to make elements appear as if they are powered by an internal light source.
- **Tilt Physics:** Interactive cards should employ a subtle 3D tilt effect on hover (`perspective(1000px)`) to reinforce the three-dimensional nature of the interface.

## Shapes

The shape language is primarily **Soft-Geometric**. While the overall vibe is "hard" and technical, small corner radii prevent the UI from feeling dated or overly aggressive.

- **Small (6px):** Tags, status dots, and small input fields.
- **Medium (12px):** Standard project cards and UI panels.
- **Large (20px):** Section containers and primary feature blocks.
- **Borders:** Standard elements use a `1px` stroke. Interactive elements should transition to a `2px` Electric Cyan stroke on focus.

## Components

### Buttons
- **Primary:** Gradient fill (`#00D4FF` to `#7B61FF`), white text, no border. On hover, increase the intensity of the Cyan glow.
- **Secondary:** Ghost style with a `1px` Steel Outline. On hover, border changes to Electric Cyan with a subtle glow.

### Cards & Panels
- **Project Cards:** Background `#111827` at 60% opacity with backdrop blur. Borders are `1px` Steel Outline.
- **Interactive State:** On hover, cards should lift `8px` and the border should animate to a gradient or primary accent.

### Inputs & Form Fields
- Dark background (`#0D1117`), `1px` Steel Outline. 
- Focus state: Border glows Electric Cyan; label shifts to primary accent color.

### Chips & Tags
- Use `Barlow Condensed` for text. 
- Background is a low-opacity version of the accent color (e.g., Cyan at 10%) with a solid `1px` border of the same color.

### Navigation
- Sticky header with `20px` blur. Use a "Scroll Trigger" at 80px to transition from transparent to the blurred background state.

### Timeline
- A vertical "Steel Outline" axis. Timeline nodes are pulsing Cyan dots. Cards alternate sides on desktop but stack on mobile.