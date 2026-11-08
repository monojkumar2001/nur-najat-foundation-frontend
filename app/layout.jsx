import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://nurandnajatfoundation.org"),
  title: "Nur and Najat Foundation | Empowering Communities",
  description:
    "Nur and Najat Foundation is a non-profit organization supporting education, healthcare, livelihoods, and community development in Bangladesh.",
  keywords: [
    "Nur and Najat Foundation",
    "NNF Bangladesh",
    "non-profit organization",
    "NGO Bangladesh",
    "education support",
    "community development",
  ],
  applicationName: "Nur and Najat Foundation",
  authors: [{ name: "Nur and Najat Foundation" }],
  creator: "Nur and Najat Foundation",
  publisher: "Nur and Najat Foundation",
  icons: {
    icon: [
      { url: "/assets/images/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: ["/assets/images/favicon.png"],
    apple: [{ url: "/assets/images/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="max-w-[100vw]" suppressHydrationWarning>
      <body
        className={`${inter.variable} max-w-[100vw] antialiased text-foreground font-sans`}
        suppressHydrationWarning
      >
        <Providers>
          <Header />
          <div className="min-w-0 max-w-[100vw] overflow-x-clip">
            <main className="min-h-screen min-w-0 bg-slate-50 text-slate-900 antialiased">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
