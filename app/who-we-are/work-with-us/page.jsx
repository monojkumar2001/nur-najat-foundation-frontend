import WorkWithUs from "@/components/whoWeAre/WorkWithUs";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { hero } from "@/lib/unsplash";

export const metadata = {
  title: "Work With Us | Nur and Najat Foundation",
  description:
    "Join NNF as a professional, volunteer or community supporter—roles built on service, accountability and inclusion.",
};

export default function WorkWithUsPage() {
  return (
    <WhoWeAreShell
      eyebrow="Who we are"
      title="Work with us"
      description="Meaningful social change needs people with different skills, experiences and perspectives. Build with us."
      image={hero.getInvolved}
      imageAlt="People collaborating for community change"
    >
      <WorkWithUs />
    </WhoWeAreShell>
  );
}
