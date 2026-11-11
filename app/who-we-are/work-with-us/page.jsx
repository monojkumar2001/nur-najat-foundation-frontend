import WorkWithUs from "@/components/whoWeAre/WorkWithUs";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { fetchWorkWithUsPage } from "@/lib/work-with-us";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Work With Us | Nur and Najat Foundation",
  description:
    "Join NNF as a professional, volunteer or community supporter—roles built on service, accountability and inclusion.",
};

export default async function WorkWithUsPage() {
  const page = await fetchWorkWithUsPage();

  const eyebrow = page?.hero?.eyebrow || "Who we are";
  const title = page?.hero?.title || "Work with us";
  const description =
    page?.hero?.description ||
    "Meaningful social change needs people with different skills, experiences and perspectives. Build with us.";
  const image = page?.hero?.image || hero.getInvolved;

  return (
    <WhoWeAreShell
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt="People collaborating for community change"
    >
      <WorkWithUs
        intro={page?.intro}
        paragraphs={page?.paragraphs}
        cta={page?.cta}
      />
    </WhoWeAreShell>
  );
}
