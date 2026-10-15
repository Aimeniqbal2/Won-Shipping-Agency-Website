# PHASE 2: DESIGN SYSTEM

## 1. Visual Principles
The design language is **Cinematic, Premium, Confident, and Professional**. It leans heavily into maritime logistics without feeling like a generic template. It balances deep, immersive 3D experiences with clean, highly readable corporate interfaces.

## 2. Color Palette
- **Primary Background (Hero/Dark Modes):** Deep Navy (`#0A192F`)
- **Secondary Background (Sections):** Crisp White (`#FFFFFF`) & Off-White/Light Gray (`#F8F9FA`)
- **Accent (Restrained):** Warm Gold (`#D4AF37`) — used sparingly for primary CTAs, key statistics, and fine border details.
- **Secondary Accent:** Ocean Blue (`#0077B6`) — used for subtle gradients and interactive hover states.
- **Primary Text (Light Mode):** Deep Slate (`#1E293B`)
- **Primary Text (Dark Mode):** White (`#FFFFFF`)
- **Muted Text:** Slate Gray (`#64748B`)

## 3. Typography
- **Headings:** `Outfit` (Modern, geometric, structural) or `Playfair Display` if a more traditional premium corporate feel is desired. We will proceed with **Outfit** for a crisp, contemporary logistics feel.
  - Weights: SemiBold (600), Bold (700).
- **Body Text:** `Inter`
  - Weights: Regular (400), Medium (500).
  - Characteristics: Highly legible, clean, neutral.
- **Hierarchy:**
  - `h1`: 4rem (Desktop) / 2.5rem (Mobile)
  - `h2`: 3rem (Desktop) / 2rem (Mobile)
  - `h3`: 2rem (Desktop) / 1.5rem (Mobile)
  - `p`: 1.125rem (Desktop) / 1rem (Mobile), Line height 1.6.

## 4. Layout & Spacing
- **Container Width:** Maximum 1280px for standard content; fluid 100% width for hero and specific cinematic sections.
- **Spacing Scale:** Standard 4pt/8pt based system (Tailwind defaults: `p-4`, `p-8`, `py-16`, `py-24`).
- **Section Padding:** Minimum `py-20` (80px) on desktop to ensure deliberate pacing and breathing room between sections. `py-12` (48px) on mobile.

## 5. UI Components
- **Border Radius:** Restrained. `rounded-sm` (2px) or `rounded-md` (4px). Avoid heavy pill-shaped buttons except for specific badge elements.
- **Shadows:** 
  - Subtle, long shadows for floating elements: `box-shadow: 0 10px 30px -10px rgba(10, 25, 47, 0.1)`.
  - Avoid excessive glowing or neon outlines.
- **Buttons:**
  - *Primary:* Solid Warm Gold background, Deep Navy text. Hover: Slight brightness increase, subtle transform (`translate-y-[-2px]`).
  - *Secondary:* Transparent background, White or Navy border (depending on section), White or Navy text. Hover: Solid background fill.
- **Cards:** Clean white backgrounds, subtle border `1px solid #E2E8F0`. Hover state introduces a slight Y-axis lift and deeper shadow. No 3D tilting unless explicitly requested.

## 6. Navigation
- **Header:** Transparent on initial load (overlaying the 3D hero). Becomes a solid Deep Navy sticky header with a subtle bottom border/shadow upon scroll.
- **Logo:** Typographic placeholder (e.g., `<span class="font-bold text-xl tracking-wide">WON SHIPPING</span>`) until official logo asset is provided.

## 7. Transitions
- **Light/Dark Transitions:** Soft fades between sections. The transition from the 3D Hero (Dark Navy) to the first content section (White) will use a smooth gradient mask or a clean architectural straight line to establish a corporate ground.
