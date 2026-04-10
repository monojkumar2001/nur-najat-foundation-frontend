/** 12 gallery images — same proven Unsplash URLs as elsewhere in the site. */
export const photographyGalleryImages = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&w=1200&q=80",
    alt: "Community gathering outdoors",
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&w=1200&q=80",
    alt: "Learning activities with children",
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&w=1200&q=80",
    alt: "Volunteers supporting families",
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&w=1200&q=80",
    alt: "Education and collaboration",
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=1200&q=80",
    alt: "Team workshop session",
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&w=1200&q=80",
    alt: "Hands-on community work",
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&w=1200&q=80",
    alt: "Humanitarian support in the field",
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&w=1200&q=80",
    alt: "Healthcare outreach",
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&w=1200&q=80",
    alt: "Hope and solidarity",
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&w=1200&q=80",
    alt: "Reading and resources",
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&w=1200&q=80",
    alt: "City communities",
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&w=1200&q=80",
    alt: "Events and awareness",
  },
];

/** 12 videos (YouTube embed). Replace IDs with your own when ready. */
export const photographyVideos = [
  { id: "v1", title: "Community program overview", youtubeId: "jNQXAC9IVRw" },
  { id: "v2", title: "Field visit — spring outreach", youtubeId: "M7lc1UVf-VE" },
  { id: "v3", title: "Volunteer stories", youtubeId: "5CHqO98O2UA" },
  { id: "v4", title: "Education initiative", youtubeId: "L61p2uyiMSo" },
  { id: "v5", title: "Health awareness session", youtubeId: "jNQXAC9IVRw" },
  { id: "v6", title: "Relief coordination", youtubeId: "M7lc1UVf-VE" },
  { id: "v7", title: "Youth engagement", youtubeId: "5CHqO98O2UA" },
  { id: "v8", title: "Partner spotlight", youtubeId: "L61p2uyiMSo" },
  { id: "v9", title: "Training highlights", youtubeId: "jNQXAC9IVRw" },
  { id: "v10", title: "Local leadership", youtubeId: "M7lc1UVf-VE" },
  { id: "v11", title: "Seasonal response", youtubeId: "5CHqO98O2UA" },
  { id: "v12", title: "Looking ahead", youtubeId: "L61p2uyiMSo" },
];

export function youtubeEmbedUrl(youtubeId) {
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`;
}

export function youtubeThumbUrl(youtubeId) {
  return `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
}
