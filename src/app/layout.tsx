import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "./home/navbar";
import Footer from "./home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"), // TODO: change to your real domain
  title: {
    default: "Nada A | Flutter Developer",
    template: "%s | Nada A",
  },
  description:
    "Portfolio of Nada A — Flutter Developer building responsive Android apps with clean architecture and modern UI/UX.",
  applicationName: "Nada Portfolio",
  keywords: [
    "Nada A",
    "Flutter Developer",
    "Dart",
    "Android",
    "Provider",
    "Firebase",
    "Supabase",
    "Clean Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Nada A" }],
  creator: "Nada A",
  openGraph: {
    type: "website",
    title: "Nada A | Flutter Developer",
    description:
      "Flutter Developer building responsive Android apps with clean architecture and polished UI/UX.",
    siteName: "Nada Portfolio",
    // url: "https://your-domain.com",
    // images: [{ url: "/og.png", width: 1200, height: 630, alt: "Nada Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nada A | Flutter Developer",
    description:
      "Flutter Developer building responsive Android apps with clean architecture and polished UI/UX.",
    // images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden bg-[#07010E] text-white selection:bg-white selection:text-black">
        {/* SmoothScroll should wrap everything for Lenis */}
        <SmoothScroll>
          {/* Keep Navbar outside page transitions if you use any */}
          <Navbar />

          <main id="main-content" className="relative">
            {children}
          </main>

          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
