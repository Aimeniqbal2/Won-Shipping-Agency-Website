# PHASE 2: HOMEPAGE WIREFRAME

## 1. Navigation & Header
- **Purpose:** Primary site navigation and branding.
- **Layout:** Flex row, space-between. Left: Logo placeholder ("WON SHIPPING"). Center (desktop): Links (Home, About Us, Services, Contact). Right: "Get a Quote" or "Contact Us" CTA button.
- **Background:** Transparent fading to solid deep navy (`#0A192F`) on scroll.
- **Mobile:** Hamburger menu triggering a full-screen or slide-out deep navy overlay menu.

## 2. Cinematic 3D Hero
- **Purpose:** Premium brand introduction and high-impact visual hook.
- **Proportions:** `100vh` (Full viewport height). Pinned during the initial scroll to allow the 3D camera sequence to play out.
- **Background:** The 3D Canvas (Deep Navy environment, fog, cargo ship).
- **Content:** 
  - Subheading: `CONNECTING PORTS, MOVING DREAMS` (Original)
  - Heading: `Moving the World Forward` (Proposed creative concept)
  - CTA: "Explore Our Services" (Primary Gold button).
- **Transitions:** Pinned scroll sequence ending in a transition to the white corporate background.

## 3. Company Introduction ("About Us" Snippet)
- **Purpose:** Briefly establish trust and context before diving into services.
- **Proportions:** Standard section (`py-24`).
- **Background:** Crisp White (`#FFFFFF`).
- **Content:**
  - Left Column (or Top on mobile): "Our Vision" / "Evolving with the Industry". Text explaining the evolution from Won Line and the commitment to efficiency and sustainability.
  - Right Column (or Bottom): High-quality subtle image of a busy port, or a minimal statistic/fact block.
- **Animation:** Fade up and slight Y-axis reveal (`gsap.from(..., { y: 30, opacity: 0 })`).

## 4. Services Overview
- **Purpose:** Highlight the core offerings in an easily scannable format.
- **Proportions:** `py-24`.
- **Background:** Off-White/Light Gray (`#F8F9FA`).
- **Content:**
  - Section Heading: "Comprehensive Logistics Solutions".
  - Grid: 3-column on desktop, 1-column on mobile.
  - Cards: 
    1. Global Logistics & Forwarding
    2. Agency Representation & Clearance
    3. Cargo Handling & Warehousing
  - Card Design: Clean white card, subtle border. Icon or subtle background image mask. Title and short description. "Learn More" link.
- **Animation:** Staggered fade up for the cards as they enter the viewport.

## 5. Global Connectivity (TIR Carnets & Central Asia Focus)
- **Purpose:** Highlight their specific advantage in Central Asian connectivity and door-to-door services.
- **Proportions:** `py-24`.
- **Background:** Deep Navy (`#0A192F`) to break up the page flow.
- **Content:**
  - Split layout or centered map motif.
  - Text: "Beyond Borders. Connecting Central Asia." Focus on TIR Carnets and robust networks.
  - Imagery: A subtle, stylized network map or abstract lines connecting dots over a dark background.
- **Animation:** Lines drawing in as the user scrolls into the section.

## 6. Contact CTA
- **Purpose:** Drive conversions after the user has seen the capabilities.
- **Proportions:** `py-20`.
- **Background:** Warm Gold (`#D4AF37`) or Deep Navy with Gold accents.
- **Content:** "Ready to optimize your supply chain?" Large text, secondary text, and a primary CTA button leading to the Contact page.

## 7. Footer
- **Purpose:** Utility links, contact details, and copyright.
- **Background:** Very Dark Navy (`#060F1D`).
- **Content:**
  - Logo/Brand name.
  - Quick Links (Home, About, Services, Contact).
  - Contact Details block (Phone, Email, Address in Karachi).
  - Copyright: © [Year] Won Shipping Agencies. All rights reserved.
