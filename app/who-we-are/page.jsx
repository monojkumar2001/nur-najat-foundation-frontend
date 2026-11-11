import { AboutUS } from "@/components/whoWeAre/AboutUS";
import { WhoWeAreShell } from "@/components/whoWeAre/WhoWeAreShell";
import { fetchAboutPage } from "@/lib/about";
import { hero } from "@/lib/unsplash";

export const metadata = {
  keywords: ['Nur and Najat Foundation', 'community development', 'Bangladesh NGO'],
  title: "About Us | Nur and Najat Foundation",
  description:
    "Learn about Nur and Najat Foundation — a community-focused NGO in Panchagarh, Bangladesh.",
};

export default async function AboutPage() {
  const page = await fetchAboutPage();

  const eyebrow = page?.hero?.eyebrow || "About us";
  const title = page?.hero?.title || "Nur and Najat Foundation";
  const description =
    page?.hero?.description ||
    "A non-profit, non-governmental, and non-political organization based in Panchagarh, Bangladesh—working at the grassroots to support youth, women, and community-led development.";
  const image = page?.hero?.image || hero.about;

  return (
    <WhoWeAreShell
      eyebrow={eyebrow}
      title={title}
      description={description}
      image={image}
      imageAlt="People collaborating in a community learning space"
    >
      <AboutUS
        intro={page?.intro}
        side={page?.side}
        paragraphs={page?.paragraphs}
        cta={page?.cta}
      />
    </WhoWeAreShell>
  );
}
