import WhatWeDo from "@/components/whoWeAre/WhatWeDo";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "What We Do | Nur and Najat Foundation",
  description:
    "Explore NNF programmes across education, health, WASH, environment, infrastructure and women’s empowerment.",
};

export default function WhatWeDoPage() {
  return (
    <WhoWeAreShell
      eyebrow="Who we are"
      title="What we do"
      description="Programmes designed to respond to immediate needs while building stronger, more resilient communities over time."
      image={hero.programs}
      imageAlt="Community programmes and support"
    >
      <WhatWeDo />
    </WhoWeAreShell>
  );
}
