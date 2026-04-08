import { AosInit } from "@/components/AosInit";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { StatsBar } from "@/components/home/StatsBar";
import { InitiativesSection } from "@/components/home/InitiativesSection";
import { GetInvolvedSection } from "@/components/home/GetInvolvedSection";
import { LatestNews } from "@/components/home/LatestNews";
import { TestimonialSection } from "@/components/home/TestimonialSection";

function AosSection({ children, delay = 0 }) {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay={delay}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <AosInit />
      <AosSection delay={0}>
        <Hero />
      </AosSection>
      <AosSection delay={80}>
        <AboutSection />
      </AosSection>
      <AosSection delay={160}>
        <ProgramsSection />
      </AosSection>
      <AosSection delay={240}>
        <StatsBar />
      </AosSection>
      <AosSection delay={80}>
        <InitiativesSection />
      </AosSection>
      <AosSection delay={160}>
        <GetInvolvedSection />
      </AosSection>
      <AosSection delay={240}>
        <LatestNews />
      </AosSection>
      <AosSection delay={80}>
        <TestimonialSection />
      </AosSection>
    </>
  );
}
