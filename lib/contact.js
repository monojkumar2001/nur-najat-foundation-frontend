/**
 * Site contact + map — swap `addressQuery` or `mapEmbedUrl` for your real office.
 * For Google “Share → Embed a map”, paste the iframe `src` into `mapEmbedUrl`.
 */
const addressQuery = "123 Mission Street, City, ST 00000";

export const contactSite = {
  addressLines: ["123 Mission Street", "City, ST 00000"],
  phoneDisplay: "+1 (555) 123-4567",
  phoneHref: "tel:+15551234567",
  emailDisplay: "hello@nur-najat.org",
  emailHref: "mailto:hello@nur-najat.org",
  /** Search-style embed; replace with your embed `src` from Google Maps if you prefer. */
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&output=embed&z=14`,
  mapOpenUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`,
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};
