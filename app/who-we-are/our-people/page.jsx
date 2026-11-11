import MembershipStructure from "@/components/whoWeAre/MembershipStructure";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { fetchOurPeoplePage } from "@/lib/our-people";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "Our People | Nur and Najat Foundation",
  description:
    "Meet the membership structure and people who guide Nur and Najat Foundation.",
};

export default async function OurPeoplePage() {
  const page = await fetchOurPeoplePage();

  const eyebrow = page?.hero?.eyebrow || "Who we are";
  const title = page?.hero?.title || "Our people";
  const description =
    page?.hero?.description ||
    "The membership structure and leadership that support NNF’s mission of social development.";
  const image = page?.hero?.image || hero.about;

  return (
    <WhoWeAreShell
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt="Foundation members and community leaders"
      showJoinUs
      flushContent
    >
      <MembershipStructure
        intro={page?.intro}
        general={page?.general}
        executive={page?.executive}
        life={page?.life}
        program={page?.program}
        duties={page?.duties}
      />
    </WhoWeAreShell>
  );
}
