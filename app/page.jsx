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
import { fetchPrograms } from "@/lib/programs";

export const metadata = {
  title: "Home | Nur and Najat Foundation",
  description:
    "Nur and Najat Foundation empowers communities in Bangladesh through education, healthcare, emergency response, and sustainable development programmes.",
  keywords: [
    "Nur and Najat Foundation",
    "NNF Bangladesh",
    "charity Bangladesh",
    "education",
    "healthcare",
    "community development",
  ],
};

export default async function Home() {
  const programs = await fetchPrograms();

  return (
    <>
      <Hero />
      <Reveal delay={0}>
        <AboutSection />
      </Reveal>
      <Reveal delay={0.04}>
        <ProgramsSection programs={programs} />
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
