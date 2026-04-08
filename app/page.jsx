import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { StatsBar } from "@/components/home/StatsBar";
import { InitiativesSection } from "@/components/home/InitiativesSection";
import { LatestNews } from "@/components/home/LatestNews";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { TestimonialSection } from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <ProgramsSection />
        <StatsBar />
        <InitiativesSection />
        <LatestNews />
        <PartnerLogos />
        <TestimonialSection />
      </main>
    </>
  );
}
