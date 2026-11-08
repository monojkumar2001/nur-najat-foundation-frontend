import { AboutUS } from "@/components/whoWeAre/AboutUS";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "About Us | Nur and Najat Foundation",
  description:
    "Learn about Nur and Najat Foundation — a community-focused NGO in Panchagarh, Bangladesh.",
};

export default function AboutPage() {
  return (
    <WhoWeAreShell
      eyebrow="About us"
      title="Nur and Najat Foundation"
      description="A non-profit, non-governmental, and non-political organization based in Panchagarh, Bangladesh—working at the grassroots to support youth, women, and community-led development."
      image={hero.about}
      imageAlt="People collaborating in a community learning space"
    >
      <AboutUS />
    </WhoWeAreShell>
  );
}
