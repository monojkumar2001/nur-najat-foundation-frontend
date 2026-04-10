export const pressItems = [
  {
    slug: "launch-announcement",
    title: "Nur and Najat Foundation launches community outreach initiative",
    date: "March 19, 2026",
    excerpt:
      "An overview of our new outreach program and how partners can collaborate with us.",
    summary:
      "This is a summary of the announcement by Nur and Najat Foundation—quoted text may be attributed to NNF—shared as an official update for partners and the public.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=900&q=80",
    category: "Press release",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1400&q=80",
    mediaContacts: [
      {
        name: "Nur and Najat Foundation",
        role: "Media contact",
        phone: "+880 1XXXXXXXXX",
        email: "info@example.org",
      },
    ],
    resources: [
      {
        title: "Multimedia materials",
        href: "#",
        image:
          "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=900&q=80",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "Nur and Najat Foundation (NNF) is pleased to announce the launch of a new community outreach initiative focused on education, wellbeing, and local capacity building.",
      },
      {
        type: "p",
        text: "This initiative will be implemented in coordination with local stakeholders and in compliance with applicable regulations and guidance from relevant authorities.",
      },
      { type: "h2", text: "Program highlights" },
      {
        type: "ul",
        items: [
          "Community-led learning circles",
          "Health and awareness sessions",
          "Volunteer training and coordination",
        ],
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=1400&q=80",
        alt: "Community volunteers working together",
      },
      { type: "h2", text: "Media contact" },
      {
        type: "p",
        text: "For interviews, partnerships, or media requests, please contact the foundation via our Contact page.",
      },
    ],
  },
  {
    slug: "quarterly-update",
    title: "Quarterly update: training sessions and upcoming events",
    date: "January 10, 2026",
    excerpt:
      "Key activities from the past quarter and a preview of scheduled programs.",
    summary:
      "A short overview of our recent training sessions, current activities, and what to expect next quarter from Nur and Najat Foundation.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&w=900&q=80",
    category: "Press update",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&w=1400&q=80",
    mediaContacts: [
      {
        name: "Nur and Najat Foundation",
        role: "Media contact",
        phone: "+880 1XXXXXXXXX",
        email: "info@example.org",
      },
    ],
    resources: [],
    blocks: [
      {
        type: "p",
        text: "NNF completed a series of training sessions for community facilitators, with a focus on practical tools and safe program delivery.",
      },
      { type: "h2", text: "What’s next" },
      {
        type: "p",
        text: "We will continue expanding support to local partners and scheduling activities aligned with our mission and capacity.",
      },
    ],
  },
  {
    slug: "partnership-call",
    title: "Call for partnerships: collaborate with Nur and Najat Foundation",
    date: "November 2, 2025",
    excerpt:
      "We welcome partnerships with institutions, community groups, and supporters aligned with our objectives.",
    summary:
      "Nur and Najat Foundation invites institutions and community groups to collaborate on education, awareness, and humanitarian programs aligned with our mission.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=900&q=80",
    category: "Press note",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=1400&q=80",
    mediaContacts: [
      {
        name: "Nur and Najat Foundation",
        role: "Media contact",
        phone: "+880 1XXXXXXXXX",
        email: "info@example.org",
      },
    ],
    resources: [
      {
        title: "Partnership overview",
        href: "#",
        image:
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&w=900&q=80",
      },
    ],
    blocks: [
      {
        type: "p",
        text: "NNF is inviting partners to collaborate on community development programs including education, awareness, and humanitarian support.",
      },
      {
        type: "p",
        text: "If you are interested in partnering, please reach out through our Contact page. We will respond with next steps and a brief collaboration checklist.",
      },
    ],
  },
];

export const pressBySlug = Object.fromEntries(pressItems.map((p) => [p.slug, p]));

