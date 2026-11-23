/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "config-les-malpractice-journalism.trycloudflare.com",
    "*.trycloudflare.com",
  ],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "test.nawshadzamir.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
