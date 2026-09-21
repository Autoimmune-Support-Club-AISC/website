"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface MaskedTextRevealProps {
  children: React.ReactNode;
  /** Organic shape color */
  shapeColor?: string;
  /** Secondary/accent shape color */
  shapeColorAlt?: string;
  /** Width of the mask container */
  width?: string;
  /** How tall is the masked region in vh */
  height?: string;
  /** Extra className on the outer wrapper */
  className?: string;
  /** Variant controls visual treatment */
  variant?: "blob" | "card" | "pill" | "heart" | "puzzle";
}

/* Heart-puzzle SVG path used for heart & puzzle mask shells */
const heartMaskPath =
  "M50 88C50 88 10 65 10 38C10 24 20 14 34 14C42 14 48 18 50 22C52 18 58 14 66 14C80 14 90 24 90 38C90 65 50 88 50 88Z";

/**
 * Scroll-driven masked text reveal.
 *
 * Text starts hidden behind a logo-inspired organic shape (a soft shell).
 * As the user scrolls, the text translates upward, the clip-path mask opens,
 * and opacity + blur resolve — giving the feeling of words gently releasing
 * from a living container born from the heart icon.
 *
 * Uses CSS `perspective` for subtle Z-depth feeling.
 * Fully respects `prefers-reduced-motion`.
 */
export default function MaskedTextReveal({
  children,
  shapeColor = "var(--color-taupe)",
  shapeColorAlt = "var(--color-blush)",
  width = "100%",
  height = "auto",
  className = "",
  variant = "blob",
}: MaskedTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.55"],
  });

  // Text translates upward as user scrolls
  const textY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  // Slight Z-depth push forward
  const textZ = useTransform(scrollYProgress, [0, 1], [-15, 0]);
  // Opacity ramp — resolves quickly
  const textOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.6, 0.95, 1]);
  // Blur resolves early — only a subtle hint, never obstructing readability
  const textBlur = useTransform(scrollYProgress, [0, 0.3, 1], [2, 0, 0]);
  const textFilter = useTransform(textBlur, (v) => `blur(${v}px)`);
  // Clip-path: starts with bottom 25% clipped, opens to full quickly
  const clipBottom = useTransform(scrollYProgress, [0, 0.5, 1], [25, 0, 0]);
  // Shape subtle drift
  const shapeY = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const shapeScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const shapeOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.22, 0.14, 0.07]);

  // Choose mask shape based on variant — all feel born from the heart icon
  const getShapeSvg = () => {
    /* ── Heart variant: the logo heart as the container shell ── */
    if (variant === "heart") {
      return (
        <motion.div
          style={{ y: shapeY, scale: shapeScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-[95%] h-[95%] max-w-[650px]"
            style={{ filter: "blur(1px)" }}
          >
            <defs>
              <linearGradient id="maskHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={shapeColorAlt} stopOpacity="0.18" />
                <stop offset="50%" stopColor={shapeColor} stopOpacity="0.12" />
                <stop offset="100%" stopColor={shapeColorAlt} stopOpacity="0.06" />
              </linearGradient>
              <radialGradient id="maskHeartGlow" cx="50%" cy="40%">
                <stop offset="0%" stopColor={shapeColorAlt} stopOpacity="0.08" />
                <stop offset="100%" stopColor={shapeColorAlt} stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="50" cy="48" r="45" fill="url(#maskHeartGlow)" />
            <motion.path
              d={heartMaskPath}
              fill="url(#maskHeartGrad)"
              style={{ opacity: shapeOpacity }}
            />
            {/* Puzzle inner-curve details */}
            <path d="M50 22C50 22 42 40 50 55" stroke={shapeColorAlt} strokeOpacity="0.07" strokeWidth="0.5" fill="none" />
            <path d="M30 45C30 45 50 42 70 45" stroke={shapeColorAlt} strokeOpacity="0.06" strokeWidth="0.5" fill="none" />
            <path d="M36 62C42 56 46 59 50 56C54 53 58 56 64 62" stroke={shapeColorAlt} strokeOpacity="0.04" strokeWidth="0.4" fill="none" />
          </svg>
        </motion.div>
      );
    }

    /* ── Puzzle variant: interlocking rounded form ── */
    if (variant === "puzzle") {
      return (
        <motion.div
          style={{ y: shapeY, scale: shapeScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-[90%] h-[90%] max-w-[600px]"
            style={{ filter: "blur(1px)" }}
          >
            <defs>
              <linearGradient id="maskPuzzleGrad" x1="20%" y1="0%" x2="80%" y2="100%">
                <stop offset="0%" stopColor={shapeColorAlt} stopOpacity="0.16" />
                <stop offset="50%" stopColor={shapeColor} stopOpacity="0.10" />
                <stop offset="100%" stopColor={shapeColorAlt} stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <motion.path
              d="M25,10 C25,10 40,8 50,10 C50,10 52,18 58,18 C64,18 66,10 66,10 C76,12 90,15 90,25 C90,25 82,27 82,33 C82,39 90,41 90,41 C88,51 90,65 85,75 C85,75 78,72 74,76 C70,80 75,86 75,86 C65,92 50,95 40,90 C40,90 42,82 37,78 C32,74 26,80 26,80 C18,72 10,60 10,48 C10,48 18,45 18,39 C18,33 10,30 10,30 C10,22 18,12 25,10Z"
              fill="url(#maskPuzzleGrad)"
              style={{ opacity: shapeOpacity }}
            />
          </svg>
        </motion.div>
      );
    }

    /* ── Card variant: heart-curved soft container ── */
    if (variant === "card") {
      return (
        <motion.div
          style={{ y: shapeY, scale: shapeScale, opacity: shapeOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-[88%] h-[78%]"
            style={{
              background: `linear-gradient(145deg, ${shapeColor}20, ${shapeColorAlt}14, ${shapeColor}08)`,
              border: `1px solid ${shapeColor}12`,
              borderRadius: "40% 40% 50% 50% / 25% 25% 55% 55%",
              boxShadow: `0 30px 80px ${shapeColor}0A, inset 0 1px 0 ${shapeColor}10`,
            }}
          />
          {/* Puzzle seam decorative lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M50 12 C48 25 52 35 50 45" stroke={shapeColorAlt} strokeOpacity="0.05" strokeWidth="0.3" fill="none" />
            <path d="M22 40 C40 38 60 38 78 40" stroke={shapeColorAlt} strokeOpacity="0.04" strokeWidth="0.3" fill="none" />
          </svg>
        </motion.div>
      );
    }

    /* ── Pill variant: organic rounded soft shell ── */
    if (variant === "pill") {
      return (
        <motion.div
          style={{ y: shapeY, scale: shapeScale, opacity: shapeOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div
            className="w-[72%] h-[58%]"
            style={{
              background: `linear-gradient(160deg, ${shapeColor}1C, ${shapeColorAlt}14, ${shapeColor}0A)`,
              borderRadius: "45% 55% 60% 40% / 50% 50% 50% 50%",
              boxShadow: `0 25px 70px ${shapeColor}08`,
              border: `1px solid ${shapeColor}0A`,
            }}
          />
        </motion.div>
      );
    }

    /* ── Default blob: morphing biomorphic with heart DNA gradients ── */
    return (
      <motion.div
        style={{ y: shapeY, scale: shapeScale }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          viewBox="-120 -120 240 240"
          className="w-[90%] h-[90%] max-w-[600px]"
          style={{ filter: "blur(1px)" }}
        >
          <defs>
            <linearGradient id="maskBlobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={shapeColorAlt} stopOpacity="0.18" />
              <stop offset="40%" stopColor={shapeColor} stopOpacity="0.12" />
              <stop offset="100%" stopColor={shapeColorAlt} stopOpacity="0.06" />
            </linearGradient>
            <radialGradient id="maskBlobGlow" cx="40%" cy="35%">
              <stop offset="0%" stopColor={shapeColorAlt} stopOpacity="0.06" />
              <stop offset="100%" stopColor={shapeColorAlt} stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="0" cy="0" r="100" fill="url(#maskBlobGlow)" />
          <motion.path
            d="M45.3,-62.5C57.1,-53.3,63.8,-37.3,68.2,-21.1C72.5,-4.9,74.6,11.5,68.8,24.7C63,37.9,49.3,47.9,35.2,55.8C21.2,63.7,6.8,69.5,-8.3,69.5C-23.5,69.5,-39.3,63.8,-51.8,53.3C-64.3,42.8,-73.4,27.5,-75.6,11.2C-77.9,-5.1,-73.2,-22.3,-63.5,-35.1C-53.8,-47.9,-39,-56.3,-24.5,-64.1C-10,-71.8,4.3,-78.9,18.2,-76.5C32.2,-74.1,45.8,-62.2,45.3,-62.5Z"
            fill="url(#maskBlobGrad)"
            style={{ opacity: shapeOpacity }}
          />
        </svg>
      </motion.div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        width,
        height,
        perspective: "1000px",
      }}
    >
      {/* Background organic shape — the soft shell holding the message */}
      {getShapeSvg()}

      {/* Ambient warmth shadow beneath shape */}
      <motion.div
        style={{ opacity: shapeOpacity }}
        className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[20px] rounded-full pointer-events-none"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `radial-gradient(ellipse, ${shapeColorAlt}18, transparent 70%)`,
            filter: "blur(18px)",
          }}
        />
      </motion.div>

      {/* Masked text — gently released from the organic container */}
      <motion.div
        style={{
          y: textY,
          translateZ: textZ,
          opacity: textOpacity,
          filter: textFilter,
        }}
        className="relative z-10 motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!filter-none"
      >
        <motion.div
          style={{
            clipPath: useTransform(clipBottom, (v) => `inset(0 0 ${v}% 0)`),
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}

/**
 * A simpler inline variant for section headers — just the emerging text
 * effect with a subtle heart-pulse warmth glow. Good for "What We Believe",
 * "Our Growing Community", etc.
 */
export function RevealHeading({
  children,
  className = "",
  accentColor = "var(--color-blush)",
}: {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "end 0.6"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.5, 0.95, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.25, 1], [1.5, 0, 0]);
  const clip = useTransform(scrollYProgress, [0, 0.4, 1], [20, 0, 0]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.08, 0]);

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: "900px" }}
    >
      {/* Subtle warm glow behind the heading */}
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[80%] h-[120%] rounded-full"
          style={{
            background: `radial-gradient(ellipse, ${accentColor}20, transparent 70%)`,
            filter: "blur(30px)",
          }}
        />
      </motion.div>
      <motion.div
        style={{
          y,
          opacity,
          filter: useTransform(blur, (v) => `blur(${v}px)`),
          clipPath: useTransform(clip, (v) => `inset(0 0 ${v}% 0)`),
        }}
        className="relative z-10 motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!filter-none"
      >
        {children}
      </motion.div>
    </div>
  );
}
