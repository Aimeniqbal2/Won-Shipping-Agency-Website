import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroScrollSection } from './components/HeroScrollSection';
import { HangingContainerSection } from './components/HangingContainerSection';
import { CompanyOverviewSection } from './components/CompanyOverviewSection';
import { VisionSection } from './components/VisionSection';
import { CinematicServices3D } from './components/CinematicServices3D';
import { ServicesSection } from './components/ServicesSection';
import { TirCorridorSection } from './components/TirCorridorSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export function App() {
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [isCinematicActive, setIsCinematicActive] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');

  // Handle progress from the 3D Hero video scrub
  const handleScrollProgress = useCallback((_progress: number, isComplete: boolean) => {
    // When scroll finishes (or nearing frame 151 / docked state), drop navbar down
    if (isComplete) {
      setNavbarVisible(true);
    } else {
      // If user scrolls back up into the voyage, hide navbar so it's a pure cinematic experience
      setNavbarVisible(false);
    }
  }, []);

  const handleOpenQuoteWithService = (serviceName: string) => {
    setSelectedServiceForQuote(serviceName);
    setQuoteOpen(true);
  };

  const handleGeneralOpenQuote = () => {
    setSelectedServiceForQuote('');
    setQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050D1A] text-slate-100 relative selection:bg-cyan-500/30 selection:text-white">
      {/* 1. Floating Apple/Mac Dock Liquid Glass Navbar */}
      <Navbar 
        visible={navbarVisible && !isCinematicActive}
        onOpenQuote={handleGeneralOpenQuote}
      />

      {/* 2. 3D Video Frame Scroll Scrub Hero Section (152 frames) */}
      <HeroScrollSection 
        onScrollProgress={handleScrollProgress}
        onOpenQuote={handleGeneralOpenQuote}
      />

      {/* Main Corporate Content Sections (Fluidly following the 3D Dock) */}
      <main className="relative z-10">
        {/* 2.5 3D Hanging Orange Container Reveal Section (Lowering from Crane Hook with Slogan) */}
        <HangingContainerSection />

        {/* 3. Company Overview (From PDF Page 3) */}
        <CompanyOverviewSection />

        {/* 4. Vision & Strategic Outlook (From PDF Page 4) */}
        <VisionSection />

        {/* 5. 3D Cinematic Services Experience (Scroll-Scrubbing 82 Sunset Vessel Frames with 7 Left-Side Service Cards) */}
        <CinematicServices3D onActiveChange={setIsCinematicActive} />

        {/* 6. Complete Services Suite (All 7 PDF Capabilities) */}
        <ServicesSection onSelectService={handleOpenQuoteWithService} />

        {/* 6. Central Asia TIR Carnet Corridor (From PDF Page 10) */}
        <TirCorridorSection onOpenQuote={handleGeneralOpenQuote} />

        {/* 7. Contact Section (From PDF Page 12) */}
        <ContactSection />
      </main>

      {/* 8. Liquid Glass Footer */}
      <Footer 
        onOpenQuote={handleGeneralOpenQuote}
      />

      {/* 9. Interactive Modals */}
      <QuoteModal 
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        preselectedService={selectedServiceForQuote}
      />
    </div>
  );
}

export default App;

