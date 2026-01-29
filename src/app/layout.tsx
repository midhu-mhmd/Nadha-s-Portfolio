import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. Core Framer Motion & Scroll Components
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import Navbar from "./home/navbar";
import Footer from "./home/footer"; // Ensure this path is correct based on your file tree

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Midlaj | MERN Stack Developer",
  description: "Portfolio of Midlaj, focusing on speed, security, and scalability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-[#C0847B] selection:text-[#F9F6F3]">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F6F3] text-[#C0847B] overflow-x-hidden`}
      >
        {/* 1. SmoothScroll must be the outermost wrapper for Lenis to track everything */}
        <SmoothScroll>
          {/* 2. Navbar outside PageTransition so it doesn't fade out/in when switching pages */}
          <Navbar />
          
          {/* 3. PageTransition wraps the main content only */}
          <PageTransition>
            <main id="main-content">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}