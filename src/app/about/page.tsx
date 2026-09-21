"use client";

import { motion } from "framer-motion";
import OrganicShape, { OrganicDivider } from "@/components/OrganicShapes";
import PageTransition from "@/components/PageTransition";
import MaskedTextReveal, { RevealHeading } from "@/components/MaskedTextReveal";

const timeline = [
  {
    year: "2024",
    title: "The Seed Was Planted",
    description:
      "AISC was born from a simple truth — people living with autoimmune diseases needed a safe space to be heard, not fixed.",
  },
  {
    year: "2024",
    title: "Dubai & Mumbai",
    description:
      "Our first communities formed across two vibrant cities, bridging cultures through shared vulnerability and care.",
  },
  {
    year: "2025",
    title: "Growing Together",
    description:
      "Hundreds joined our circles. Blog posts, whitepapers, and personal stories began flowing — each one a testament to courage.",
  },
  {
    year: "2026",
    title: "A Global Heartbeat",
    description:
      "Today, AISC pulses across 18 countries. What began as a whisper has become a chorus of compassion.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <OrganicShape
          variant="heart"
          color="var(--color-blush)"
          size={400}
          className="top-[15%] right-[-5%]"
          delay={0.3}
        />
        <OrganicShape
          variant="concave"
          color="var(--color-taupe)"
          size={250}
          className="bottom-[20%] left-[5%]"
          delay={0.6}
        />
        <OrganicShape
          variant="puzzle"
          color="var(--color-blush)"
          size={120}
          className="top-[50%] left-[20%] opacity-20"
          delay={1}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blush text-sm tracking-widest uppercase mb-6"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight mb-8"
          >
            Built on empathy.
            <br />
            Rooted in care.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-foreground-light/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            We are not doctors. We are not therapists. We are people who understand
            what it means to live with a body that fights itself — and we chose to
            show up for each other.
          </motion.p>
        </div>
      </section>

      <OrganicDivider variant="heartWave" color="var(--color-blush)" colorAlt="var(--color-taupe)" />

      {/* Founder Story */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass-card-organic p-10 md:p-16 relative"
          >
            <div className="absolute top-6 left-8 text-6xl font-serif text-blush/20">
              &ldquo;
            </div>
            <div className="relative z-10">
              <p className="font-serif text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 italic">
                I started AISC because I remember the loneliness. The nights spent
                Googling symptoms. The appointments where I felt unheard. I thought —
                if I can&apos;t change the system overnight, I can at least create a
                room where nobody feels invisible.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blush/20 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-blush)"
                    strokeWidth="1.5"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <div>
                  <p className="font-serif text-foreground text-sm">
                    The Founding Team
                  </p>
                  <p className="text-foreground-light/50 text-xs">
                    Autoimmune Support Club
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <OrganicDivider variant="wave" color="var(--color-taupe)" colorAlt="var(--color-olive)" flip />

      {/* Mission */}
      <section className="relative py-24 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <MaskedTextReveal variant="heart" shapeColor="var(--color-taupe)" shapeColorAlt="var(--color-blush)">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
              Our Mission
            </h2>
            <p className="text-foreground-light/60 text-lg leading-relaxed mb-6">
              To create a gentle, inclusive community where people living with
              autoimmune diseases and chronic illness find emotional support,
              shared understanding, and the quiet reassurance that they are
              never walking this path alone.
            </p>
            <p className="font-serif text-xl text-blush/80 italic">
              We don&apos;t promise cures. We promise presence.
            </p>
          </MaskedTextReveal>
        </div>
      </section>

      <OrganicDivider variant="blob" color="var(--color-olive)" colorAlt="var(--color-blush)" />

      {/* Timeline */}
      <section className="relative py-24 md:py-36 px-6 overflow-hidden">
        <OrganicShape
          variant="interlock"
          color="var(--color-olive)"
          size={300}
          className="top-[20%] right-[-8%] opacity-30"
          delay={0}
        />
        <OrganicShape
          variant="heart"
          color="var(--color-blush)"
          size={150}
          className="bottom-[10%] left-[5%] opacity-20"
          delay={0.5}
        />
        <div className="max-w-3xl mx-auto">
          <RevealHeading className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-foreground-light/50 text-sm tracking-widest uppercase">
              Every step, a heartbeat
            </p>
          </RevealHeading>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-blush/20 via-blush/30 to-blush/10 md:-translate-x-[0.5px]" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Dot */}
                <div className="absolute left-[16px] md:left-1/2 top-2 w-3 h-3 rounded-full bg-blush/60 border-2 border-sand md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                  }`}
                >
                  <span className="text-blush text-sm tracking-widest font-sans">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-xl text-foreground mt-2 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground-light/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-4"
          >
            <p className="font-serif text-2xl md:text-3xl text-foreground/80 italic leading-relaxed">
              &ldquo;We didn&apos;t build AISC to be big.
            </p>
            <p className="font-serif text-2xl md:text-3xl text-blush/90 italic leading-relaxed">
              We built it to be warm.&rdquo;
            </p>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
