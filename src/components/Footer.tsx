"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { OrganicDivider } from "@/components/OrganicShapes";

export default function Footer() {
  return (
    <footer className="relative bg-olive-dark/20">
      {/* Organic wave divider instead of hard border line */}
      <OrganicDivider variant="heartWave" color="var(--color-blush)" colorAlt="var(--color-taupe)" flip className="relative z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Logo.png"
                alt="AISC Logo"
                width={36}
                height={36}
                className="rounded-sm"
              />
              <span className="font-serif text-lg tracking-wide text-foreground">
                Autoimmune Support Club
              </span>
            </div>
            <p className="text-foreground-light/70 text-sm leading-relaxed max-w-xs">
              A gentle community for those navigating the landscape of autoimmune
              disease. We listen. We support. We care.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="font-serif text-sm tracking-widest uppercase text-foreground mb-6">
              Navigate
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/team", label: "Our Team" },
                { href: "/blog", label: "Blog" },
                { href: "/whitepapers", label: "Whitepapers" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-serif text-sm tracking-widest uppercase text-foreground mb-6">
              Connect
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:AISC.care@gmail.com"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover"
              >
                AISC.care@gmail.com
              </a>
              <a
                href="https://www.instagram.com/autoimmune_support_club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover flex items-center gap-2"
              >
                Instagram (@autoimmune_support_club)
              </a>
              <a
                href="https://www.threads.com/@autoimmune_support_club"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover flex items-center gap-2"
              >
                Threads
              </a>
              <a
                href="https://www.linkedin.com/company/aisc_care/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover flex items-center gap-2"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@AutoimmuneSupportClub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover flex items-center gap-2"
              >
                YouTube
              </a>
              <a
                href="https://linktr.ee/aisc.care"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover flex items-center gap-2"
              >
                Linktree
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-taupe/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground-light/40 text-xs tracking-wider">
              &copy; {new Date().getFullYear()} Autoimmune Support Club. All rights reserved.
            </p>
            <p className="text-foreground-light/30 text-xs italic font-serif">
              &ldquo;All we ask for is to be heard&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
