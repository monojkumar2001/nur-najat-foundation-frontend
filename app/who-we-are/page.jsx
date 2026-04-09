import { PageHeader } from "@/components/Layout/PageHeader";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { Reveal } from "@/components/motion/Reveal";
import { AboutUS } from "@/components/whoWeAre/AboutUS";
import MembershipStructure from "@/components/whoWeAre/MembershipStructure";
import MissionVision from "@/components/whoWeAre/MissionVision";
import WhatWeDo from "@/components/whoWeAre/WhatWeDo";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "About Us | Nur and Najat Foundation",
  description: "Mission, vision, team, and stories from our community.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Nur and Najat Foundation"
        description="A non-profit, non-governmental, and non-political organization based in Panchagarh, Bangladesh—working at the grassroots to support youth, women, and community-led development."
        image={hero.about}
        imageAlt="People collaborating in a community learning space"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
          <AboutUS />
        
        </div>
        <Reveal>
          <MissionVision />
        </Reveal>
        <Reveal delay={0.04}>
          <WhatWeDo />
        </Reveal>
        <Reveal delay={0.06}>
          <MembershipStructure />
        </Reveal>
        <Reveal delay={0.08}>
          <JoinUsSection />
        </Reveal>
      </div>
    </>
  );
}
