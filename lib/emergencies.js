export const emergencyItems = [
  {
    slug: "flood-response-2026",
    title: "Flood response: shelter and essentials for affected families",
    date: "February 15, 2026",
    excerpt:
      "How NNF is coordinating relief alongside local partners during seasonal flooding.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=900&q=80",
    category: "Emergency update",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=1400&q=80",
    blocks: [
      {
        type: "p",
        text: "Nur and Najat Foundation is mobilising volunteers and supplies to support families hit by flooding. Activities are carried out in line with local authority guidance.",
      },
      {
        type: "p",
        text: "Priority needs include safe shelter, clean water awareness, hygiene kits, and support for children to resume learning where possible.",
      },
      { type: "h2", text: "How we respond" },
      {
        type: "ul",
        items: [
          "Rapid needs assessment with community leaders",
          "Distribution of essentials in coordinated hubs",
          "Referrals to health and protection services where needed",
        ],
      },
    ],
    findOutMore: [
      {
        title: "Get involved",
        href: "/get-involved",
        description: "Volunteer, partner, or learn how you can support our work.",
      },
      {
        title: "Press centre",
        href: "/press-centre",
        description: "Official statements and media updates from the foundation.",
      },
    ],
  },
  {
    slug: "heatwave-safety-campaign",
    title: "Heatwave safety: community outreach and hydration points",
    date: "January 8, 2026",
    excerpt:
      "Preventive messaging and distribution points during extreme heat in high-risk areas.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=900&q=80",
    category: "Emergency update",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=1400&q=80",
    blocks: [
      {
        type: "p",
        text: "NNF teams are working with local partners to share heat safety guidance and support vulnerable residents during extended high temperatures.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1400&q=80",
        alt: "Community volunteers distributing supplies",
      },
      { type: "h2", text: "Focus areas" },
      {
        type: "p",
        text: "Outreach prioritises children, older adults, and outdoor workers. Session lengths are kept short to reduce exposure.",
      },
    ],
    findOutMore: [
      {
        title: "Flood response update",
        href: "/emergencies/flood-response-2026",
        description: "Read our coordinated relief approach during seasonal flooding.",
      },
      {
        title: "Blog & news",
        href: "/blog",
        description: "Stories and updates from the field.",
      },
    ],
  },
  {
    slug: "winter-warmth-drive",
    title: "Winter warmth drive: blankets and nutrition for rural households",
    date: "November 22, 2025",
    excerpt:
      "A seasonal drive targeting cold-weather risk in partner communities.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=900&q=80",
    category: "Emergency update",
    author: "Nur and Najat Foundation",
    cover:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=1400&q=80",
    blocks: [
      {
        type: "p",
        text: "The winter warmth drive combines distribution of blankets and targeted nutrition support with awareness on staying warm and well.",
      },
      {
        type: "p",
        text: "Households are identified through community networks to ensure fair reach across areas we serve.",
      },
    ],
    findOutMore: [
      {
        title: "Contact us",
        href: "/contact",
        description: "Reach the foundation for partnership or media enquiries.",
      },
      {
        title: "Heatwave safety campaign",
        href: "/emergencies/heatwave-safety-campaign",
        description: "See how we support communities during extreme heat.",
      },
    ],
  },
];

export const emergenciesBySlug = Object.fromEntries(
  emergencyItems.map((item) => [item.slug, item])
);
