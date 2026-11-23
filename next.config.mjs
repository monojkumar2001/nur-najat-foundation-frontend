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
        hostname: "passive-preview-demonstrate-materials.trycloudflare.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "*.trycloudflare.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
