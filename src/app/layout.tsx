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
  title: "Autoimmune Support Club | All We Ask For Is To Be Heard",
  description:
    "Community-driven emotional support for people living with autoimmune diseases and chronic illness. A quiet place where you are seen, heard, and held.",
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
