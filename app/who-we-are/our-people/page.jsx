import MembershipStructure from "@/components/whoWeAre/MembershipStructure";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Our People | Nur and Najat Foundation",
  description:
    "Meet the membership structure and people who guide Nur and Najat Foundation.",
};

export default function OurPeoplePage() {
  return (
    <WhoWeAreShell
      eyebrow="Who we are"
      title="Our people"
      description="The membership structure and leadership that support NNF’s mission of social development."
      image={hero.about}
      imageAlt="Foundation members and community leaders"
      showJoinUs
    >
      <MembershipStructure />
    </WhoWeAreShell>
  );
}
