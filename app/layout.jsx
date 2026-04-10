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
  title: "Nur and Najat Foundation | Empowering Communities",
  description:
    "Non-profit organization dedicated to education, healthcare, and community development.",
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
