"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import OrganicShape, { OrganicDivider } from "@/components/OrganicShapes";
import PageTransition from "@/components/PageTransition";
import MaskedTextReveal from "@/components/MaskedTextReveal";

const categories = [
  "All",
  "Personal Stories",
  "Awareness",
  "Resources",
  "Whitepapers",
];

const blogPosts = [
  {
    id: 1,
    title: "Learning to Listen to My Body",
    excerpt:
      "After years of pushing through, I finally learned that rest isn't giving up — it's giving in to what my body has been asking for all along.",
    category: "Personal Stories",
    date: "Feb 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Autoimmune Flares",
    excerpt:
      "What triggers a flare? Why does it feel different every time? A gentle guide to understanding the unpredictable nature of autoimmune conditions.",
    category: "Awareness",
    date: "Jan 2026",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Invisible Weight of Looking 'Fine'",
    excerpt:
      "When the world sees you as healthy, explaining your pain becomes its own kind of exhaustion. You are not alone in this quiet struggle.",
    category: "Personal Stories",
    date: "Jan 2026",
    readTime: "4 min read",
  },
  {
    id: 4,
    title: "Building a Support Network",
    excerpt:
      "Community doesn't require grand gestures. Sometimes it's a text that says 'I understand.' Here's how to find your people.",
    category: "Resources",
    date: "Dec 2025",
    readTime: "6 min read",
  },
  {
    id: 5,
    title: "Nutrition and Autoimmunity: A Gentle Approach",
    excerpt:
      "No strict diets. No fear. Just thoughtful conversations about how what we eat can support — not punish — our bodies.",
    category: "Resources",
    date: "Dec 2025",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "When Grief and Illness Overlap",
    excerpt:
      "Living with chronic illness means grieving the life you imagined. Acknowledging that grief is the first step toward peace.",
    category: "Personal Stories",
    date: "Nov 2025",
    readTime: "5 min read",
  },
];

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 50px rgba(152, 134, 112, 0.1)",
        transition: { duration: 0.4 },
      }}
      className="glass-card-organic p-8 cursor-hover group"
    >
      {/* Category pill */}
      <div className="mb-6">
        <span className="inline-block text-xs tracking-widest uppercase text-blush/80 bg-blush/10 px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 group-hover:text-blush transition-colors duration-500 leading-snug">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-foreground-light/55 text-sm leading-relaxed mb-6">
        {post.excerpt}
      </p>

      {/* Meta */}
      <div className="flex items-center justify-between text-foreground-light/40 text-xs tracking-wider">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="mt-6 h-[1px] bg-gradient-to-r from-blush/30 to-transparent origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      />
    </motion.article>
  );
}

export default function BlogPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24">
        <OrganicShape
          variant="heart"
          color="#D79A7D"
          size={300}
          className="top-[20%] right-[0%]"
          delay={0.3}
        />
        <OrganicShape
          variant="concave"
          color="#CFB9A8"
          size={200}
          className="bottom-[10%] left-[5%]"
          delay={0.6}
        />
        <OrganicShape
          variant="puzzle"
          color="#D79A7D"
          size={100}
          className="top-[40%] left-[15%] opacity-20"
          delay={1}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-blush text-sm tracking-widest uppercase mb-6"
          >
            Stories & Resources
          </motion.p>
          <MaskedTextReveal variant="heart" shapeColor="#D79A7D" shapeColorAlt="#CFB9A8">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight mb-6">
              The Blog
            </h1>
            <p className="text-foreground-light/60 text-lg max-w-xl mx-auto">
              Real voices. Honest words. A space where stories breathe.
            </p>
          </MaskedTextReveal>
        </div>
      </section>

      <OrganicDivider variant="heartWave" color="#D79A7D" colorAlt="#CFB9A8" />

      {/* Categories */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`cursor-hover px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 ${
                  i === 0
                    ? "bg-blush/20 text-blush"
                    : "bg-transparent text-foreground-light/50 hover:text-blush hover:bg-blush/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-24 px-6 overflow-hidden relative">
        <OrganicShape variant="interlock" color="#D79A7D" size={250} className="top-[20%] right-[-5%] opacity-15" delay={0} />
        <OrganicShape variant="heart" color="#CFB9A8" size={180} className="bottom-[10%] left-[-3%] opacity-15" delay={0.5} />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Load More */}
      <section className="py-12 px-6 text-center">
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glow-button cursor-hover border border-blush/30 text-blush px-8 py-3 rounded-full text-sm tracking-widest uppercase hover:bg-blush/10 transition-all duration-500"
        >
          More Stories
        </motion.button>
      </section>

      {/* Closing */}
      <section className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="font-serif text-xl md:text-2xl text-foreground/60 italic"
          >
            Every story shared is a hand extended in the dark.
          </motion.p>
        </div>
      </section>
    </PageTransition>
  );
}
