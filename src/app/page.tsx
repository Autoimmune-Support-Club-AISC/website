"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import OrganicShape, { FloatingHeart, OrganicDivider, HeartContainer } from "@/components/OrganicShapes";
import AnimatedCounter from "@/components/AnimatedCounter";
import PageTransition from "@/components/PageTransition";
import MaskedTextReveal, { RevealHeading } from "@/components/MaskedTextReveal";
import FAQ from "@/components/FAQ";

function StaggerText({
  text,
  className = "",
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function ValueCard({
  title,
  description,
  icon,
  delay,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{
        y: -8,
        transition: { duration: 0.4 },
      }}
      className="relative p-8 md:p-10 cursor-hover group flex flex-col items-center text-center h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blush/10 to-taupe/10 border border-blush/20 backdrop-blur-md -z-10 animate-blob group-hover:bg-blush/15 group-hover:shadow-[0_20px_60px_rgba(215,154,125,0.15)] transition-all duration-500" />
      <div className="mb-6 text-blush/70 group-hover:text-blush transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-serif text-xl mb-3 text-foreground">{title}</h3>
      <p className="text-foreground-light/60 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <PageTransition>
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="light-bloom w-[600px] h-[600px] bg-blush/20 top-[-10%] right-[-10%]"
          style={{
            transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />
        <div
          className="light-bloom w-[500px] h-[500px] bg-taupe/20 bottom-[-5%] left-[-5%]"
          style={{
            transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
            transition: "transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)",
          }}
        />

        <OrganicShape variant="heart" color="var(--color-blush)" size={350} className="top-[10%] right-[5%] animate-drift" delay={0.5} />
        <OrganicShape variant="concave" color="var(--color-taupe)" size={250} className="bottom-[15%] left-[8%] animate-float-slow" delay={1} />
        <OrganicShape variant="puzzle" color="var(--color-olive)" size={180} className="top-[60%] right-[20%] animate-float" delay={1.5} />
        <OrganicShape variant="interlock" color="var(--color-blush)" size={140} className="top-[20%] left-[15%] animate-breathe" delay={2} />
        <OrganicShape color="var(--color-blush)" size={100} className="bottom-[30%] right-[35%] animate-float-slow" delay={2.5} />

        <FloatingHeart size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-4"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.1]">
              <StaggerText text="Autoimmune" delay={0.8} />
              <br />
              <StaggerText text="Support Club" delay={1.4} />
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
            className="font-serif text-lg sm:text-xl md:text-2xl text-foreground-light/70 italic mb-12 tracking-wide"
          >
            &ldquo;All we ask for is to be heard&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              href="/contact"
              className="glow-button-warm cursor-pointer inline-block bg-blush/90 hover:bg-blush text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase font-sans transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              Join the Community
            </Link>
            <a
              href="https://forms.gle/pBvJt9nMBDwPngbD9"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button-warm cursor-pointer inline-block bg-taupe/90 hover:bg-taupe text-foreground px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase font-sans transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              Volunteer App
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
            className="absolute bottom-[-120px] left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-foreground-light/30 text-xs tracking-widest uppercase">
                Scroll
              </span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-foreground-light/30 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <OrganicDivider variant="heartWave" color="var(--color-blush)" colorAlt="var(--color-taupe)" />

      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <MaskedTextReveal variant="heart" shapeColor="var(--color-taupe)" shapeColorAlt="var(--color-blush)">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-10">
              You deserve love
              <br />
              and support.
            </h2>

            <div className="space-y-4">
              <p className="text-foreground-light/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                Living with chronic illness can feel isolating.
              </p>
              <p className="text-foreground-light/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                We&apos;re here to remind you that you&apos;re not alone.
              </p>
            </div>
          </MaskedTextReveal>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-16 mx-auto w-24 h-[1px] bg-gradient-to-r from-transparent via-blush/40 to-transparent"
          />
        </div>
        <OrganicShape variant="heart" color="var(--color-taupe)" size={300} className="top-[10%] right-[-5%] opacity-50" delay={0} />
        <OrganicShape variant="concave" color="var(--color-blush)" size={200} className="bottom-[10%] left-[-3%] opacity-40" delay={0.5} />
      </section>

      <OrganicDivider variant="wave" color="var(--color-taupe)" colorAlt="var(--color-blush)" flip />

      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Quote Section (Merged) */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <MaskedTextReveal variant="puzzle" shapeColor="var(--color-blush)" shapeColorAlt="var(--color-taupe)">
              <div className="space-y-4">
                <p className="font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed italic">
                  &ldquo;Some days are heavy. Some nights are long.
                </p>
                <p className="font-serif text-2xl md:text-3xl text-blush/90 leading-relaxed italic">
                  But here, you are seen.&rdquo;
                </p>
              </div>
            </MaskedTextReveal>
          </div>

          <RevealHeading className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              What We Believe
            </h2>
            <p className="text-foreground-light/50 text-sm tracking-widest uppercase">
              Our Foundation
            </p>
          </RevealHeading>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              title="Empathy"
              description="We lead with understanding. Every story matters, every feeling is valid."
              delay={0}
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              }
            />
            <ValueCard
              title="Inclusivity"
              description="Every person, every condition, every background — welcome here."
              delay={0.1}
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              }
            />
            <ValueCard
              title="Authenticity"
              description="No pretense. No pressure. Just real conversations and genuine care."
              delay={0.2}
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              }
            />
            <ValueCard
              title="Confidentiality"
              description="Your words stay safe. This is a space of trust and discretion."
              delay={0.3}
              icon={
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              }
            />
          </div>
        </div>
        <OrganicShape variant="interlock" color="var(--color-olive)" size={400} className="top-[50%] left-[-10%] opacity-30" delay={0} />
        <OrganicShape variant="heart" color="var(--color-blush)" size={150} className="bottom-[10%] right-[5%] opacity-20" delay={1} />
      </section>

      <OrganicDivider variant="heartWave" color="var(--color-blush)" colorAlt="var(--color-olive)" flip />

      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blush/[0.06] to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <RevealHeading className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Growing Community
            </h2>
            <p className="text-foreground-light/50 text-sm tracking-widest uppercase">
              Together, we are stronger
            </p>
          </RevealHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <AnimatedCounter end={2500} suffix="+" label="Members Supported" duration={3} />
            <AnimatedCounter end={18} label="Countries Reached" duration={2.5} />
            <AnimatedCounter end={300} suffix="+" label="Stories Shared" duration={2.8} />
          </div>
        </div>
        <OrganicShape variant="heart" color="var(--color-blush)" size={200} className="top-[20%] right-[-5%] opacity-25" delay={0.5} />
        <OrganicShape variant="concave" color="var(--color-taupe)" size={160} className="bottom-[15%] left-[-3%] opacity-20" delay={1} />
      </section>



      <OrganicDivider variant="blob" color="var(--color-taupe)" colorAlt="var(--color-blush)" />

      <FAQ />

      <section className="relative py-32 md:py-48 px-6 overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <MaskedTextReveal variant="heart" shapeColor="var(--color-olive)" shapeColorAlt="var(--color-blush)">
            <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-8">
              You don&apos;t have to carry
              <br />
              this alone.
            </h2>

            <p className="text-foreground-light/60 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Step into a community that listens without judgment and
              holds space for your truth.
            </p>
          </MaskedTextReveal>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/contact"
              className="glow-button-warm cursor-pointer inline-block bg-blush/90 hover:bg-blush text-white px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase font-sans transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
            >
              Reach Out
            </Link>
          </motion.div>
        </div>
        <FloatingHeart size={400} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50" />
        <OrganicShape variant="puzzle" color="var(--color-blush)" size={180} className="top-[15%] left-[8%] opacity-20" delay={0} />
        <OrganicShape variant="interlock" color="var(--color-taupe)" size={150} className="bottom-[20%] right-[10%] opacity-15" delay={0.8} />
      </section>
    </PageTransition>
  );
}
