# PHASE 2: IMPLEMENTATION ROADMAP

## 1. Component Architecture (React/Vite)
We will adopt a modular, feature-based folder structure to keep the 3D logic cleanly separated from the standard DOM UI.

```
src/
├── assets/          # Static images, GLB models (draco compressed), fonts
├── components/
│   ├── 3D/          # React Three Fiber components
│   │   ├── Ship.tsx
│   │   ├── Ocean.tsx
│   │   ├── Scene.tsx
│   │   └── CameraRig.tsx (handles GSAP scroll logic)
│   ├── UI/          # Standard React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   └── ServiceCard.tsx
├── pages/           # Page layouts
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   └── Contact.tsx
├── styles/          # Tailwind entry and global CSS
├── utils/           # GSAP helpers, context logic
└── App.tsx          # Router configuration
```

## 2. Phased Implementation Order
*Do not begin these steps until Phase 2 is fully approved.*

**Step 1: Scaffolding & Setup**
- Initialize Vite React + TS template.
- Configure Tailwind CSS, including custom colors from the Design System.
- Set up React Router and standard page shells.

**Step 2: 3D Asset Sourcing & Testing**
- Source, license, and optimize the cargo ship GLB model.
- Run Draco compression.
- Create an isolated sandbox environment (just a blank R3F canvas) to test the model's lighting, materials, and performance baseline.

**Step 3: Building the 3D Hero (The Core Engine)**
- Implement `Scene.tsx` with the ship, procedural ocean, and lighting.
- Integrate GSAP ScrollTrigger to manipulate the camera position within the pinned `100vh` container.
- Tune the cinematic movement based on the SCENE A-D storyboard.
- Implement mobile performance fallbacks and reduced-motion checks.

**Step 4: Developing the DOM UI (Homepage)**
- Build the overlaying HTML content (Hero text, CTA).
- Ensure z-index stacking allows clicks on DOM elements over the canvas.
- Build the subsequent homepage sections (Services Overview, Connectivity, Contact).

**Step 5: Inner Pages & Polish**
- Flesh out About Us, Services, and Contact pages using the shared UI components.
- Implement forms, maps, and responsive layouts.
- Final cross-browser and cross-device testing.
