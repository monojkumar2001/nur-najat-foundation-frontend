import MissionVision from "@/components/whoWeAre/MissionVision";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { fetchMissionVisionPage } from "@/lib/mission-vision";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Mission & Vision | Nur and Najat Foundation",
  description:
    "NNF’s mission and vision for empowering youth, women and underserved communities in Panchagarh.",
};

export default async function MissionVisionPage() {
  const page = await fetchMissionVisionPage();

  const eyebrow = page?.hero?.eyebrow || "Who we are";
  const title = page?.hero?.title || "Mission & vision";
  const description =
    page?.hero?.description ||
    "Opportunity, dignity and lasting change—responding to urgent needs today while strengthening communities for tomorrow.";
  const image = page?.hero?.image || hero.about;

  return (
    <WhoWeAreShell
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt="Community learning and youth leadership"
    >
      <MissionVision
        intro={page?.intro}
        side={page?.side}
        mission={page?.mission}
        vision={page?.vision}
      />
    </WhoWeAreShell>
  );
}
