import MissionVision from "@/components/whoWeAre/MissionVision";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Mission & Vision | Nur and Najat Foundation",
  description:
    "NNF’s mission and vision for empowering youth, women and underserved communities in Panchagarh.",
};

export default function MissionVisionPage() {
  return (
    <WhoWeAreShell
      eyebrow="Who we are"
      title="Mission & vision"
      description="Opportunity, dignity and lasting change—responding to urgent needs today while strengthening communities for tomorrow."
      image={hero.about}
      imageAlt="Community learning and youth leadership"
    >
      <MissionVision />
    </WhoWeAreShell>
  );
}
