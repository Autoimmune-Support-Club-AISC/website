"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/whitepapers", label: "Whitepapers" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-[background-color,backdrop-filter,box-shadow] duration-300 ${
          scrolled
            ? "bg-sand/85 backdrop-blur-md shadow-[0_2px_20px_rgba(152,134,112,0.08)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="cursor-pointer group flex items-center gap-3 p-1 rounded-lg">
            <div className="relative">
              <Image
                src="/Transparent Logo.png"
                alt="AISC Logo"
                width={38}
                height={38}
                className="transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
            <span className="font-serif text-lg tracking-wide text-foreground hidden sm:block font-semibold">
              AISC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full transition-all duration-200 cursor-pointer inline-flex items-center justify-center ${
                    isActive
                      ? "bg-sand-light/80 text-blush shadow-xs"
                      : "text-foreground-light hover:text-blush hover:bg-sand-light/50"
                  } active:scale-95`}
                >
                  <span
                    className={`text-xs lg:text-sm tracking-widest uppercase transition-colors duration-200 ${
                      isActive ? "font-bold text-blush" : "font-medium"
                    }`}
                    style={{ fontFamily: "var(--font-sans)" }}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-blush rounded-full pointer-events-none"
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Desktop Join Us Button */}
            <Link
              href="/contact"
              className="glow-button-warm cursor-pointer ml-3 bg-blush hover:bg-blush-dark text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-2 rounded-lg hover:bg-sand-light/50 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.span
              className="block w-6 h-[2px] bg-foreground rounded-full"
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-foreground rounded-full"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-foreground rounded-full"
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(16px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] bg-sand/95 flex flex-col items-center justify-center p-6"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-xs">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-6 rounded-xl text-xl tracking-widest uppercase font-serif cursor-pointer transition-colors ${
                      pathname === link.href
                        ? "bg-sand-light text-blush font-bold shadow-xs"
                        : "text-foreground-light hover:text-blush hover:bg-sand-light/50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Join Us Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                className="w-full pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3.5 px-6 rounded-full bg-blush text-white text-center text-sm font-semibold tracking-widest uppercase shadow-md active:scale-95 cursor-pointer"
                >
                  Join Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
