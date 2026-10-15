 

# PHASE 2: 3D STORYBOARD

## Sequence Overview

The hero section uses a pinned container (`100vh`) powered by GSAP ScrollTrigger. As the user scrolls down, they scrub through a predefined cinematic camera sequence around a 3D cargo ship in a dark maritime environment.

## SCENE A: CINEMATIC ENTRANCE

- **Scroll Range:** `0% - 20%` of the pinned container.
- **Environment:** Deep navy void simulating open ocean at dusk/night. Subtle fog (`THREE.FogExp2`) is active, matching the background color to mask the horizon and draw focus to the ship. Lighting is dramatic: a strong directional rim light (moonlight/cool blue) and a warm deck light (gold/orange) illuminating the bridge.
- **Ship:** Positioned facing slightly away from the camera. The bow is prominent.
- **Camera Position:** Low angle, slightly in front of the ship's bow. `(x: -15, y: 2, z: 25)`
- **Camera Target:** The center of the ship's hull.
- **UI:** The HTML overlay shows the main headings: "CONNECTING PORTS, MOVING DREAMS" and "Moving the World Forward", with the CTA. These elements remain static and legible in the center or left-aligned over the dark water.

## SCENE B: CAMERA JOURNEY

- **Scroll Range:** `20% - 70%` of the pinned container.
- **Camera Movement:** As the user scrolls, the camera sweeps dramatically up and around the side of the ship, revealing the length of the vessel and the stacked containers.
- **Camera End Position (at 70%):** High angle, side view, looking down at the deck. `(x: 30, y: 15, z: 0)`
- **Camera Target:** Shifts smoothly along the deck to follow the camera movement.
- **Effects:** The movement creates natural parallax between the containers.
- **UI:** The initial hero text fades out (HTML opacity transition linked to scroll position) around the 30% mark to let the user focus on the visual journey.

## SCENE C: LOGISTICS NARRATIVE

- **Scroll Range:** `70% - 90%` of the pinned container.
- **Camera Movement:** The camera pulls back further, showing the entire ship. `(x: 40, y: 20, z: -20)`
- **Visuals:** We introduce a subtle graphical element—perhaps glowing abstract lines representing logistics routes sweeping across the dark "ocean" surface, or subtle data points appearing over the containers. This reinforces the "supply chain" and "optimization" aspects of the company vision.
- **UI:** A secondary short text overlay might fade in: "Optimizing the Global Supply Chain", preparing the user for the service sections.

## SCENE D: TRANSITION INTO THE WEBSITE

- **Scroll Range:** `90% - 100%` of the pinned container.
- **Camera Movement:** The camera tilts down rapidly towards the dark ocean surface, effectively fading the screen to black/deep navy.
- **Transition:** The pinned container is released. The DOM scrolls naturally. The next HTML section (Company Introduction) is layered immediately below, featuring a solid white background. The visual effect is rising out of the dark ocean into the bright, clean corporate space.

## Technical Fallback & Mobile Strategy

- **Mobile Simplification:** The full sweeping camera movement can cause motion sickness or frame drops on mobile. On mobile, the camera will remain relatively static in the Scene A position, with a slow, continuous auto-rotation (time-based, not scroll-scrubbed).
- **Performance Fallback:** We will use `detect-gpu` or a similar lightweight heuristic. If the user is on an unsupported device, or has `prefers-reduced-motion` enabled, the 3D canvas will be replaced entirely by a high-quality static pre-rendered image of Scene A, with subtle CSS scale animations instead of WebGL rendering.
