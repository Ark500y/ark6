import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { WorkSection } from "@/components/sections/work";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { HorizontalScrollSection } from "@/components/sections/horizontal-scroll";
import { CTABand } from "@/components/sections/cta-band";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <CapabilitiesSection />
        <HorizontalScrollSection />
        <WorkSection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
