"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { OrganicDivider } from "@/components/OrganicShapes";

export default function Footer() {
  return (
    <footer className="relative bg-olive-dark/20">
      {/* Organic wave divider instead of hard border line */}
      <OrganicDivider variant="heartWave" color="#D79A7D" colorAlt="#CFB9A8" flip className="relative z-10" />

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
                href="mailto:aisc.care@gmail.com"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover"
              >
                aisc.care@gmail.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground-light/60 hover:text-blush text-sm transition-colors duration-300 cursor-hover flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-taupe/15">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground-light/40 text-xs tracking-wider">
              © {new Date().getFullYear()} Autoimmune Support Club. All rights reserved.
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
