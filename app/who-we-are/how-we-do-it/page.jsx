import HowWeDoIt from "@/components/whoWeAre/HowWeDoIt";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "How We Do It | Nur and Najat Foundation",
  description:
    "How NNF listens to communities, designs accessible programmes, and works with respect, partnership and accountability.",
};

export default function HowWeDoItPage() {
  return (
    <WhoWeAreShell
      eyebrow="Who we are"
      title="How we do it"
      description="Listening first. Acting with respect—practical interventions rooted in accessibility, participation and capacity."
      image={hero.getInvolved}
      imageAlt="Community engagement and partnership"
    >
      <HowWeDoIt />
    </WhoWeAreShell>
  );
}
