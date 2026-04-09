import Image from "next/image";
import {
  BookMarked,
  BookOpen,
  Brush,
  Building2,
  FlaskConical,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Landmark,
  Megaphone,
  Microscope,
  Package,
  Palette,
  Users,
} from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const heroImage = "/assets/images/whatwedo.png";

const introParagraph =
  "All programs and activities of Nur and Najat Foundation (NNF) shall be implemented only after obtaining the necessary approvals from the Government and relevant competent authorities, in compliance with applicable laws and regulations. Any activity that contradicts Section 21 of the governing Act shall be considered void and ineffective.";

const objectives = [
  {
    title: "Humanitarian and Charitable Services",
    description:
      "To design and implement humanitarian and charitable programs aimed at improving the living conditions of underprivileged and marginalized communities, ensuring dignity, inclusion, and social protection.",
    Icon: HandHeart,
  },
  {
    title: "Community Development Initiatives",
    description:
      "To undertake sustainable community development projects that address poverty, social inequality, and access to basic services, fostering long-term resilience and self-reliance.",
    Icon: Users,
  },
  {
    title: "Relief and Emergency Support",
    description:
      "To organize and distribute relief materials and emergency assistance among vulnerable populations during natural disasters, crises, and other humanitarian emergencies.",
    Icon: Package,
  },
  {
    title: "Education and Skill Development",
    description:
      "To provide education, training, scholarship/sponsorship and capacity-building programs for illiterate and semi-literate individuals, enabling them to enhance their knowledge, skills, and productivity through modern and practical learning systems.",
    Icon: GraduationCap,
  },
  {
    title: "Social Awareness and Advocacy",
    description:
      "To promote awareness among the general public on social, humanitarian, and developmental issues, encouraging active participation in building a responsible and compassionate society.",
    Icon: Megaphone,
  },
  {
    title: "Promotion of Reading and Knowledge",
    description:
      "To establish libraries and reading centers that encourage reading habits, intellectual growth, and access to knowledge for people of all ages.",
    Icon: BookOpen,
  },
  {
    title: "Preservation of Cultural Heritage",
    description:
      "To collect, document, and publish rare manuscripts, folklore, and traditional literature, preserving the cultural and historical heritage of the country for future generations.",
    Icon: Landmark,
  },
  {
    title: "Arts, Culture, and Exhibitions",
    description:
      "To organize exhibitions, galleries, and mobile display centers showcasing sculptures, paintings, and cultural artifacts, promoting artistic expression and cultural appreciation.",
    Icon: Palette,
  },
  {
    title: "Establishment of Museums",
    description:
      "To establish and maintain museums dedicated to the preservation and public display of artistic, historical, and cultural collections.",
    Icon: Building2,
  },
  {
    title: "Fine Arts Development",
    description:
      "To establish institutes of fine arts and organize creative programs such as drawing competitions, workshops, and training sessions to nurture artistic talent.",
    Icon: Brush,
  },
  {
    title: "Promotion of Literature",
    description:
      "To encourage and promote literary work among the public through publications, events, and awareness campaigns.",
    Icon: BookMarked,
  },
  {
    title: "Research and Historical Awareness",
    description:
      "To promote research and public awareness on archaeological and historical heritage, including the establishment of educational and research centers.",
    Icon: Microscope,
  },
  {
    title: "Science and Technology Awareness",
    description:
      "To collect, preserve, and exhibit machinery and scientific equipment, and to educate the public about their importance and practical applications in everyday life.",
    Icon: FlaskConical,
  },
  {
    title: "Healthcare and Social Welfare Services",
    description:
      "To provide free or affordable healthcare services, including medical camps, awareness campaigns, and treatment facilities. This includes initiatives related to drug awareness, prevention, rehabilitation, and the establishment of treatment centers and nursing institutes to combat drug addiction and promote public health.",
    Icon: HeartPulse,
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="what-we-do"
      className=" border-slate-100"
      aria-labelledby="what-we-do-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="space-y-5 lg:col-span-8">
        <SectionHeading
                eyebrow="What we do & how we do it"
                title="Objectives of Nur and Najat Foundation (NNF)"
                subtitle={introParagraph}
                align="left"
                className="max-w-none"
              />
          {/* <p className="text-sm font-bold uppercase tracking-wide text-slate-900">
            What we do & how we do it:
          </p>
          <h2
            id="what-we-do-heading"
            className="heading-font text-2xl font-bold uppercase leading-tight text-slate-900 sm:text-3xl lg:text-4xl"
          >
            Objectives of Nur and Najat Foundation (NNF)
          </h2>
          <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
            {introParagraph}
          </p> */}
        </div>

        <div className="lg:col-span-4">
          <div className="group relative overflow-hidden rounded-2xl bg-slate-100 shadow-md ring-1 ring-slate-200/80">
            <div className="relative aspect-4/5 sm:aspect-5/6 lg:aspect-4/5">
              <Image
                src={heroImage}
                alt="A caregiver with a young child, representing NNF community support"
                fill
                className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.06]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <p className="mt-12 max-w-4xl text-xl md:text-2xl font-semibold text-slate-900 lg:mt-16">
        NNF is committed to achieving the following objectives:
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4 lg:gap-6">
        {objectives.map((card, idx) => {
          const Icon = card.Icon;
          return (
            <article
              key={card.title}
              className="rounded-2xl bg-linear-to-br from-[#f0f4ff] to-[#c4ecfb] p-6 shadow-sm sm:p-7"
            >
              <div
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/80 text-primary shadow-sm ring-1 ring-primary/15"
                aria-hidden
              >
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-sm font-bold uppercase leading-snug text-slate-900 sm:text-base">
                {idx + 1}. {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                {card.description}
              </p>
            </article>
          );
        })}
      </div>
      </div>
    </section>
  );
}
