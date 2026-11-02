/**
 * Stable Unsplash CDN URLs via images.unsplash.com.
 * Use simple ?auto=format&w=&q= (avoid fit=crop) for fewer optimizer 404s.
 * @see https://unsplash.com/documentation
 */

export const hero = {
  about:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=1920&q=80",
  programs:
    "/assets/images/programs/education-bg.png",
  getInvolved:
    "/assets/images/get-involved.png",
  resources:
    "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&w=1920&q=80",
  blog:
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&w=1920&q=80",
  press:
    "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&w=1920&q=80",
  emergencies:
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&w=1920&q=80",
  contact:
    "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&w=1920&q=80",
  gallery:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&w=1920&q=80",
  events:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&w=1920&q=80",
  donate:
    "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&w=1920&q=80",
};

/** Per-program PageHeader background by slug. */
const programHeroBySlug = {
  "education-scholarship": "/assets/images/programs/education-bg.png",
  health:
    "/assets/images/programs/health-bg.png",
  "solar-light-road":
    "/assets/images/programs/light-bg.png",
  wash: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=1920&q=80",
  environment:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=1920&q=80",
  "women-empowerment":
    "/assets/images/programs/women-bg.png",
};

/** Returns a distinct hero background for a program detail page. */
export function getProgramHeroImage(slug) {
  return programHeroBySlug[slug] ?? hero.programs;
}

export const thumb = {
  education: "/assets/images/programs/education.png",
  health: "/assets/images/programs/health.png",
  community: "/assets/images/programs/light.png",
  volunteer:
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=900&q=80",
  workshop: "/assets/images/programs/women.png",
  handHeart:
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=800&q=80",
};

/** Gallery tiles — reuse proven IDs only (no delisted photos). */
export const galleryGrid = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=800&q=80",
  "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&w=800&q=80",
];
