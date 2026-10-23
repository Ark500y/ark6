import dynamic from "next/dynamic";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";

import { AboutSection } from "@/components/sections/about";
import { CapabilitiesSection } from "@/components/sections/capabilities";
import { WorkSection } from "@/components/sections/work";
import { CTABand } from "@/components/sections/cta-band";
import { Footer } from "@/components/sections/footer";

const ExplosionTransition = dynamic(() =>
  import("@/components/animations/explosion-transition").then(
    (m) => m.ExplosionTransition
  )
);
const HorizontalScrollSection = dynamic(() =>
  import("@/components/sections/horizontal-scroll").then(
    (m) => m.HorizontalScrollSection
  )
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ExplosionTransition id="about-transition" sectionName="About ARK">
          <AboutSection />
        </ExplosionTransition>
        <CapabilitiesSection />
        <HorizontalScrollSection />
        <WorkSection />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
