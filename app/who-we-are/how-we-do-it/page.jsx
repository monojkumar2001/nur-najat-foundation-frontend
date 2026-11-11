import HowWeDoIt from "@/components/whoWeAre/HowWeDoIt";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { fetchHowWeDoItPage } from "@/lib/how-we-do-it";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "How We Do It | Nur and Najat Foundation",
  description:
    "How NNF listens to communities, designs accessible programmes, and works with respect, partnership and accountability.",
};

export default async function HowWeDoItPage() {
  const page = await fetchHowWeDoItPage();

  const eyebrow = page?.hero?.eyebrow || "Who we are";
  const title = page?.hero?.title || "How we do it";
  const description =
    page?.hero?.description ||
    "Listening first. Acting with respect—practical interventions rooted in accessibility, participation and capacity.";
  const image = page?.hero?.image || hero.getInvolved;

  return (
    <WhoWeAreShell
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt="Community engagement and partnership"
    >
      <HowWeDoIt
        intro={page?.intro}
        side={page?.side}
        paragraphs={page?.paragraphs}
      />
    </WhoWeAreShell>
  );
}
