import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { getProgramBySlug, getProgramSlugs } from "@/lib/programs";

export async function generateStaticParams() {
  return getProgramSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) {
    return {
      title: "Program | Nur and Najat Foundation",
      description: "Explore community programmes supported by Nur and Najat Foundation.",
      keywords: ["NNF programmes", "Bangladesh NGO programmes", "community development"],
    };
  }
  return {
    title: `${program.shortTitle} | Nur and Najat Foundation`,
    description: program.summary,
    keywords: [program.shortTitle, "Nur and Najat Foundation", "NNF programme", "Bangladesh community programme"],
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();
  return <ProgramDetail program={program} />;
}
