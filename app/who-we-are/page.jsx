import Image from "next/image";
import { PageHeader } from "@/components/Layout/PageHeader";
import { hero, thumb } from "@/lib/unsplash";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AboutUS } from "@/components/who-we-are/AboutUS";
import {
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Sprout,
  Users,
  HandHeart,
} from "lucide-react";
import MissionVision from "./MissionVision";

export const metadata = {
  title: "About Us | Nur and Najat Foundation",
  description: "Mission, vision, team, and stories from our community.",
};

const focusAreas = [
  {
    title: "Education",
    description:
      "Educational support, skills, and learning opportunities that build confidence and leadership.",
    Icon: GraduationCap,
  },
  {
    title: "Sustainable livelihoods",
    description:
      "Farm and tourism development, entrepreneurship, and practical training that enable financial independence.",
    Icon: Sprout,
  },
  {
    title: "Healthcare access",
    description:
      "Free medical camps and awareness programs that improve well-being and quality of life.",
    Icon: HeartPulse,
  },
  {
    title: "Women’s empowerment",
    description:
      "Pathways for participation, leadership, and economic inclusion—rooted in dignity and equity.",
    Icon: Users,
  },
  {
    title: "Local development",
    description:
      "Community-driven initiatives like rural road lighting and sports programs that strengthen neighborhoods.",
    Icon: Lightbulb,
  },
  {
    title: "Community welfare",
    description:
      "Grassroots social welfare support designed with local partners for long-term impact—not short-term relief.",
    Icon: HandHeart,
  },
];

const objectives = [
  {
    title: "Humanitarian and Charitable Services",
    description:
      "To design and implement humanitarian and charitable programs aimed at improving the living conditions of underprivileged and marginalized communities, ensuring dignity, inclusion, and social protection.",
  },
  {
    title: "Community Development Initiatives",
    description:
      "To undertake sustainable community development projects that address poverty, social inequality, and access to basic services, fostering long-term resilience and self-reliance.",
  },
  {
    title: "Relief and Emergency Support",
    description:
      "To organize and distribute relief materials and emergency assistance among vulnerable populations during natural disasters, crises, and other humanitarian emergencies.",
  },
  {
    title: "Education and Skill Development",
    description:
      "To provide education, training, scholarship/sponsorship and capacity-building programs for illiterate and semi-literate individuals, enabling them to enhance their knowledge, skills, and productivity through modern and practical learning systems.",
  },
  {
    title: "Social Awareness and Advocacy",
    description:
      "To promote awareness among the general public on social, humanitarian, and developmental issues, encouraging active participation in building a responsible and compassionate society.",
  },
  {
    title: "Promotion of Reading and Knowledge",
    description:
      "To establish libraries and reading centers that encourage reading habits, intellectual growth, and access to knowledge for people of all ages.",
  },
  {
    title: "Preservation of Cultural Heritage",
    description:
      "To collect, document, and publish rare manuscripts, folklore, and traditional literature, preserving the cultural and historical heritage of the country for future generations.",
  },
  {
    title: "Arts, Culture, and Exhibitions",
    description:
      "To organize exhibitions, galleries, and mobile display centers showcasing sculptures, paintings, and cultural artifacts, promoting artistic expression and cultural appreciation.",
  },
  {
    title: "Establishment of Museums",
    description:
      "To establish and maintain museums dedicated to the preservation and public display of artistic, historical, and cultural collections.",
  },
  {
    title: "Fine Arts Development",
    description:
      "To establish institutes of fine arts and organize creative programs such as drawing competitions, workshops, and training sessions to nurture artistic talent.",
  },
  {
    title: "Promotion of Literature",
    description:
      "To encourage and promote literary work among the public through publications, events, and awareness campaigns.",
  },
  {
    title: "Research and Historical Awareness",
    description:
      "To promote research and public awareness on archaeological and historical heritage, including the establishment of educational and research centers.",
  },
  {
    title: "Science and Technology Awareness",
    description:
      "To collect, preserve, and exhibit machinery and scientific equipment, and to educate the public about their importance and practical applications in everyday life.",
  },
  {
    title: "Healthcare and Social Welfare Services",
    description:
      "To provide free or affordable healthcare services, including medical camps, awareness campaigns, and treatment facilities. This includes initiatives related to drug awareness, prevention, rehabilitation, and the establishment of treatment centers and nursing institutes to combat drug addiction and promote public health.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Nur and Najat Foundation"
        description="A non-profit, non-governmental, and non-political organization based in Panchagarh, Bangladesh—working at the grassroots to support youth, women, and community-led development."
        image={hero.about}
        imageAlt="People collaborating in a community learning space"
      />

      <div className="relative -mt-6 overflow-hidden rounded-t-3xl bg-white shadow-sm ring-1 ring-slate-200/80">
        <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 sm:px-6 lg:px-8">
          <AboutUS />

       

          <MissionVision />
          {/* Closing */}
          <section className="rounded-3xl bg-navy px-6 py-12 text-white sm:px-10 sm:py-14">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="heading-font text-2xl font-bold uppercase tracking-wide sm:text-3xl">
                Our promise
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                NNF envisions a society where poverty has no place and where
                empowered youth lead the way toward a just, inclusive, and
                dignified world for all.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <ButtonLink
                  href="/get-involved"
                  variant="accent"
                  className="px-8"
                >
                  Join as volunteer
                </ButtonLink>
                <ButtonLink href="/donate" variant="outline" className="px-8">
                  Support the mission
                </ButtonLink>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
