import { notFound } from "next/navigation";
import { ProgramDetail } from "@/components/programs/ProgramDetail";
import { fetchProgramBySlug } from "@/lib/programs";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await fetchProgramBySlug(slug);
  const program = data?.program;

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
    keywords: [
      program.shortTitle,
      "Nur and Najat Foundation",
      "NNF programme",
      "Bangladesh community programme",
    ],
  };
}

export default async function ProgramPage({ params }) {
  const { slug } = await params;
  const data = await fetchProgramBySlug(slug);

  if (!data?.program) notFound();

  return (
    <ProgramDetail
      program={data.program}
      prev={data.prev}
      next={data.next}
    />
  );
}
