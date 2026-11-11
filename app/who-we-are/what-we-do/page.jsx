import WhatWeDo from "@/components/whoWeAre/WhatWeDo";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { fetchWhatWeDoPage } from "@/lib/what-we-do";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "What We Do | Nur and Najat Foundation",
  description:
    "Explore NNF programmes across education, health, WASH, environment, infrastructure and women’s empowerment.",
};

export default async function WhatWeDoPage() {
  const page = await fetchWhatWeDoPage();

  const eyebrow = page?.hero?.eyebrow || "Who we are";
  const title = page?.hero?.title || "What we do";
  const description =
    page?.hero?.description ||
    "Programmes designed to respond to immediate needs while building stronger, more resilient communities over time.";
  const image = page?.hero?.image || hero.programs;

  return (
    <WhoWeAreShell
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt="Community programmes and support"
    >
      <WhatWeDo
        intro={page?.intro}
        cta={page?.cta}
        side={page?.side}
        programmes={page?.programmes}
        footerText={page?.footerText}
      />
    </WhoWeAreShell>
  );
}
