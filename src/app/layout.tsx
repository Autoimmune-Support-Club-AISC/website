import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { AmbientBlobs } from "@/components/OrganicShapes";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Autoimmune Support Club | All We Ask For Is To Be Heard",
    template: "%s | Autoimmune Support Club",
  },
  description:
    "A global, community-driven emotional support group for people living with autoimmune diseases and chronic illnesses. Join a quiet place where you are seen, heard, and held.",
  keywords: [
    "autoimmune disease support",
    "chronic illness community",
    "autoimmune support group",
    "chronic pain support",
    "invisible illness",
    "autoimmune awareness",
    "ts",
    "tourette syndrome",
    "turner syndrome",
  ],
  authors: [{ name: "Autoimmune Support Club" }],
  creator: "Autoimmune Support Club",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aisc.care",
    title: "Autoimmune Support Club",
    description: "Community-driven emotional support for people living with autoimmune diseases.",
    siteName: "Autoimmune Support Club",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autoimmune Support Club",
    description: "A gentle community for those navigating the landscape of autoimmune disease.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="lenis">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased font-sans`}
      >
        <SmoothScroll>
          <AmbientBlobs />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
