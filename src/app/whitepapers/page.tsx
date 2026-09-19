"use client";

import { motion } from "framer-motion";
import OrganicShape, { OrganicDivider } from "@/components/OrganicShapes";
import PageTransition from "@/components/PageTransition";
import MaskedTextReveal from "@/components/MaskedTextReveal";

const whitepapers = [
  {
    id: 1,
    title: "The Emotional Landscape of Autoimmune Disease",
    summary:
      "An exploration of the psychological and emotional impact of living with autoimmune conditions, including data from community surveys and expert insights on holistic wellbeing.",
    pages: 24,
    date: "January 2026",
  },
  {
    id: 2,
    title: "Community Support Models for Chronic Illness",
    summary:
      "A comprehensive review of peer-support frameworks and their measurable impact on quality of life for people living with chronic autoimmune conditions.",
    pages: 32,
    date: "November 2025",
  },
  {
    id: 3,
    title: "Bridging the Gap: Patient Experience & Clinical Care",
    summary:
      "Research on the disconnect between patient lived experience and clinical consultations, with actionable recommendations for healthcare providers.",
    pages: 18,
    date: "September 2025",
  },
  {
    id: 4,
    title: "Digital Wellness Communities: A Framework for Safety",
    summary:
      "Guidelines and best practices for building emotionally safe digital communities for vulnerable populations, based on AISC's experience.",
    pages: 20,
    date: "July 2025",
  },
];

function WhitepaperCard({
  paper,
  index,
}: {
  paper: (typeof whitepapers)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.23, 1, 0.32, 1],
      }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px rgba(152, 134, 112, 0.1)",
        transition: { duration: 0.4 },
      }}
      className="glass-card-organic p-8 md:p-10 cursor-hover group"
    >
      {/* PDF Icon */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-14 rounded-lg bg-blush/10 border border-blush/20 flex items-center justify-center group-hover:bg-blush/20 transition-colors duration-500">
          <svg
            width="20"
            height="24"
            viewBox="0 0 20 24"
            fill="none"
            className="text-blush"
          >
            <path
              d="M12 0H2C0.9 0 0 0.9 0 2V22C0 23.1 0.9 24 2 24H18C19.1 24 20 23.1 20 22V8L12 0Z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M12 0V8H20L12 0Z"
              fill="currentColor"
              opacity="0.25"
            />
            <text
              x="10"
              y="18"
              textAnchor="middle"
              fontSize="6"
              fill="currentColor"
              fontWeight="bold"
            >
              PDF
            </text>
          </svg>
        </div>
        <span className="text-foreground-light/40 text-xs tracking-wider">
          {paper.pages} pages
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 leading-snug group-hover:text-blush transition-colors duration-500">
        {paper.title}
      </h3>

      {/* Summary */}
      <p className="text-foreground-light/55 text-sm leading-relaxed mb-8">
        {paper.summary}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-foreground-light/40 text-xs tracking-wider">
          {paper.date}
        </span>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-hover flex items-center gap-2 text-blush text-sm tracking-wider hover:text-blush-dark transition-colors duration-300"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
          Download
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function WhitepapersPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <OrganicShape
          variant="interlock"
          color="#988670"
          size={300}
          className="top-[15%] left-[5%]"
          delay={0.3}
        />
        <OrganicShape
          variant="heart"
          color="#CFB9A8"
          size={250}
          className="bottom-[15%] right-[5%]"
          delay={0.6}
        />
        <OrganicShape
          variant="concave"
          color="#D79A7D"
          size={120}
          className="top-[45%] right-[15%] opacity-20"
          delay={1}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blush text-sm tracking-widest uppercase mb-6"
          >
            Research & Insights
          </motion.p>
          <MaskedTextReveal variant="puzzle" shapeColor="#988670" shapeColorAlt="#CFB9A8">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight mb-6">
              Whitepapers
            </h1>
            <p className="text-foreground-light/60 text-lg max-w-xl mx-auto leading-relaxed">
              Thoughtful research at the intersection of community, care, and
              chronic illness. Academic rigor with a human heart.
            </p>
          </MaskedTextReveal>
        </div>
      </section>

      <OrganicDivider variant="heartWave" color="#988670" colorAlt="#CFB9A8" />

      {/* Papers Grid */}
      <section className="py-16 md:py-24 px-6 relative overflow-hidden">
        <OrganicShape variant="heart" color="#D79A7D" size={200} className="top-[30%] right-[-5%] opacity-15" delay={0} />
        <OrganicShape variant="puzzle" color="#CFB9A8" size={150} className="bottom-[20%] left-[-3%] opacity-15" delay={0.5} />
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whitepapers.map((paper, i) => (
              <WhitepaperCard key={paper.id} paper={paper} index={i} />
            ))}
          </div>
        </div>
      </section>

      <OrganicDivider variant="wave" color="#D79A7D" colorAlt="#988670" flip />

      {/* Contribute CTA */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
              Have research to share?
            </h2>
            <p className="text-foreground-light/60 text-base mb-8 leading-relaxed">
              We welcome contributions from researchers, clinicians, and patients
              who want to add their voice to the conversation.
            </p>
            <a
              href="mailto:aisc.care@gmail.com"
              className="glow-button-warm cursor-pointer inline-block border border-blush/40 text-blush px-8 py-3.5 rounded-full text-sm font-semibold tracking-widest uppercase hover:bg-blush hover:text-white transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
