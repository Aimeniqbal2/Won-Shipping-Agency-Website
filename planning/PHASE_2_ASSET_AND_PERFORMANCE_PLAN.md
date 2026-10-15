# PHASE 2: ASSET AND PERFORMANCE PLAN

## 1. Required 3D Assets & Evaluation
The core of the cinematic experience relies on the cargo ship and ocean environment.
- **Cargo Ship Model:**
  - *Source:* We will source a premium, licensed GLB/GLTF model from platforms like Sketchfab or TurboSquid. Do NOT attempt to build a photorealistic ship using Three.js primitives.
  - *Evaluation:* Must be under 150k polygons. We will aggressively decimate hidden geometry (e.g., inside the hull).
  - *Format:* GLB, compressed using Draco (`gltf-pipeline -i ship.glb -o ship_draco.glb -d`).
- **Containers:**
  - *Source:* Included in the ship model, or instantiated via `THREE.InstancedMesh` if we need dynamic arrangements. `InstancedMesh` is highly recommended to drastically reduce draw calls for hundreds of containers.
- **Ocean / Environment:**
  - *Source:* Procedural shader. We will use a modified version of Three.js's `Water` shader or a custom noisy plane to simulate ocean waves. This is highly performant and avoids loading massive textures.

## 2. Textures & Optimization
- **Texture Budgets:** Strictly limit diffuse and normal maps to 2K (2048x2048) resolution maximum. 1K for secondary elements (containers).
- **Format:** Convert textures to WEBP or KTX2 for optimal VRAM usage and faster network loading.
- **Baking:** Whenever possible, bake ambient occlusion and static lighting directly into the textures to avoid expensive real-time light calculations.

## 3. Technology Stack & Loading Strategy
- **Libraries:** `@react-three/fiber` (R3F) for declarative 3D, `@react-three/drei` for helpers (Suspense, Environment, Preload), `three`, and `gsap` (with `ScrollTrigger`).
- **Loading Sequence:**
  1. HTML and CSS load first. The user sees a dark navy background and the brand text immediately.
  2. The 3D Canvas is wrapped in a React `Suspense` boundary. 
  3. While the GLB loads, a subtle CSS-based loading spinner or a silhouette of the ship is displayed.
  4. Once loaded, the Canvas fades in.
  5. `drei/Preload` can be used to ensure assets are ready before the transition.

## 4. Responsive & Performance Fallbacks
- **Reduced Motion:** We will hook into `window.matchMedia('(prefers-reduced-motion: reduce)')`. If true, we disable the ScrollTrigger camera animations and present a static, perfectly framed 3D scene.
- **Device Capabilities:**
  - On standard desktops, enable full post-processing (if needed, e.g., subtle bloom/vignette) and higher pixel ratios.
  - On mobile devices, force `dpr={1}`, disable post-processing, reduce ocean shader complexity, and remove volumetric fog.
  - *Ultimate Fallback:* If WebGL fails to initialize or frame rates drop severely, gracefully degrade to a pre-rendered high-resolution WEBP image of the ship.

## 5. Performance Risks
- **Scroll Syncing:** Keeping DOM scrolling perfectly synced with WebGL updates can cause stuttering. We will use `requestAnimationFrame` and GSAP's `tick` alignment carefully to ensure smooth interpolation.
- **Context Loss:** Mobile browsers aggressively kill WebGL contexts when memory is tight. The React component must cleanly handle context restoration or fallback to the static image.
