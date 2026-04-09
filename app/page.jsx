import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { StatsBar } from "@/components/home/StatsBar";
import { InitiativesSection } from "@/components/home/InitiativesSection";
import { GetInvolvedSection } from "@/components/home/GetInvolvedSection";
import { LatestNews } from "@/components/home/LatestNews";
import { GallerySection } from "@/components/home/GallerySection";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { Reveal } from "@/components/motion/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal delay={0}>
        <AboutSection />
      </Reveal>
      <Reveal delay={0.04}>
        <ProgramsSection />
      </Reveal>
      <Reveal delay={0.04}>
        <StatsBar />
      </Reveal>
      <Reveal delay={0.04}>
        <InitiativesSection />
      </Reveal>
      <Reveal delay={0.04}>
        <GetInvolvedSection />
      </Reveal>
      <Reveal delay={0.04}>
        <LatestNews />
      </Reveal>
      <Reveal delay={0.04}>
        <GallerySection />
      </Reveal>
      <Reveal delay={0.04}>
        <JoinUsSection />
      </Reveal>
    </>
  );
}
