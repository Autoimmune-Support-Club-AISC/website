"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface OrganicShapeProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
  variant?: "blob" | "heart" | "puzzle" | "concave" | "interlock";
}

const blobPaths = [
  // heart-curve blob
  "M45.3,-62.5C57.1,-53.3,63.8,-37.3,68.2,-21.1C72.5,-4.9,74.6,11.5,68.8,24.7C63,37.9,49.3,47.9,35.2,55.8C21.2,63.7,6.8,69.5,-8.3,69.5C-23.5,69.5,-39.3,63.8,-51.8,53.3C-64.3,42.8,-73.4,27.5,-75.6,11.2C-77.9,-5.1,-73.2,-22.3,-63.5,-35.1C-53.8,-47.9,-39,-56.3,-24.5,-64.1C-10,-71.8,4.3,-78.9,18.2,-76.5C32.2,-74.1,45.8,-62.2,45.3,-62.5Z",
  // soft concave cutout blob
  "M42.7,-55.3C55.9,-47.5,67.2,-35.2,72.2,-20.5C77.2,-5.9,75.8,11.1,68.5,24.6C61.2,38.1,47.9,48.2,34,56.1C20.1,64,5.5,69.7,-9.7,69.7C-24.8,69.7,-40.5,64,-51.5,53.5C-62.5,43,-68.8,27.7,-71.4,11.6C-74.1,-4.5,-73.1,-21.3,-64.8,-33.4C-56.5,-45.5,-40.9,-52.8,-26.5,-60.1C-12.1,-67.4,1.1,-74.6,13.8,-73.3C26.5,-72,42.7,-62.2,42.7,-55.3Z",
  // asymmetric biomorphic shape
  "M37.9,-49.6C48.6,-42.4,56.4,-30.8,61.5,-17.5C66.6,-4.1,69.1,11,64.1,22.8C59.1,34.7,46.7,43.4,34,50.9C21.3,58.4,8.4,64.8,-5.6,65.3C-19.6,65.8,-34.6,60.5,-46.1,50.8C-57.6,41.2,-65.5,27.3,-68.9,12.1C-72.3,-3.1,-71.1,-19.5,-63.2,-31.5C-55.3,-43.5,-40.6,-51.1,-26.8,-57.1C-13,-63.1,0,-67.5,12.3,-65.8C24.6,-64.1,36.2,-56.3,37.9,-49.6Z",
  // interlocking rounded form
  "M44.2,-58.8C56.6,-50.5,65.3,-36.5,70.2,-21.3C75.2,-6.1,76.4,10.3,70.4,23.9C64.3,37.5,51,48.3,36.8,56.3C22.7,64.3,7.7,69.5,-7.1,68.9C-21.9,68.3,-36.5,62,-48.2,51.9C-59.9,41.8,-68.7,27.9,-72.1,12.5C-75.5,-2.9,-73.5,-19.8,-65.1,-32.6C-56.8,-45.4,-42.2,-54.1,-28.2,-61.9C-14.2,-69.7,0.8,-76.5,15.1,-74.8C29.4,-73.1,31.8,-67.1,44.2,-58.8Z",
];

/* ── heart-shaped SVG path with puzzle curves ── */
const heartPuzzlePath =
  "M50 88C50 88 10 65 10 38C10 24 20 14 34 14C42 14 48 18 50 22C52 18 58 14 66 14C80 14 90 24 90 38C90 65 50 88 50 88Z";

/* ── concave cutout contour (kidney / organic indent) ── */
const concavePath =
  "M80,10 C95,10 100,30 100,50 C100,75 85,95 60,95 C40,95 25,85 15,70 C5,55 0,35 10,20 C20,5 40,0 55,5 C60,7 62,15 55,20 C48,25 45,18 50,12 C55,8 70,10 80,10Z";

/* ── interlocking rounded lobes ── */
const interlockPath =
  "M50,5 C65,5 75,15 75,30 C85,30 95,40 95,55 C95,70 85,80 75,80 C75,90 65,95 50,95 C35,95 25,90 25,80 C15,80 5,70 5,55 C5,40 15,30 25,30 C25,15 35,5 50,5Z";

export default function OrganicShape({
  className = "",
  color = "#D79A7D",
  size = 200,
  delay = 0,
  duration = 20,
  style = {},
  variant = "blob",
}: OrganicShapeProps) {
  if (variant === "heart") {
    return (
      <motion.div
        className={`absolute pointer-events-none ${className}`}
        style={{ width: size, height: size, ...style }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id={`hg-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.14" />
              <stop offset="100%" stopColor={color} stopOpacity="0.06" />
            </linearGradient>
          </defs>
          <motion.path
            d={heartPuzzlePath}
            fill={`url(#hg-${delay})`}
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Puzzle inner curves */}
          <path d="M50 22C50 22 40 42 50 58" stroke={color} strokeOpacity="0.08" strokeWidth="0.6" fill="none" />
          <path d="M28 46C28 46 50 42 72 46" stroke={color} strokeOpacity="0.08" strokeWidth="0.6" fill="none" />
          <path d="M35 60C40 55 45 58 50 55C55 52 60 55 65 60" stroke={color} strokeOpacity="0.05" strokeWidth="0.5" fill="none" />
        </motion.svg>
      </motion.div>
    );
  }

  if (variant === "concave") {
    return (
      <motion.div
        className={`absolute pointer-events-none ${className}`}
        style={{ width: size, height: size, ...style }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          animate={{ rotate: [0, 8, -5, 0] }}
          transition={{ duration: duration * 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <radialGradient id={`cg-${delay}`} cx="40%" cy="40%">
              <stop offset="0%" stopColor={color} stopOpacity="0.14" />
              <stop offset="100%" stopColor={color} stopOpacity="0.04" />
            </radialGradient>
          </defs>
          <motion.path
            d={concavePath}
            fill={`url(#cg-${delay})`}
            animate={{ scale: [1, 1.03, 0.98, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    );
  }

  if (variant === "interlock") {
    return (
      <motion.div
        className={`absolute pointer-events-none ${className}`}
        style={{ width: size, height: size, ...style }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          animate={{ rotate: [0, -6, 4, 0] }}
          transition={{ duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id={`ig-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.12" />
              <stop offset="50%" stopColor="#CFB9A8" stopOpacity="0.08" />
              <stop offset="100%" stopColor={color} stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <motion.path
            d={interlockPath}
            fill={`url(#ig-${delay})`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    );
  }

  if (variant === "puzzle") {
    return (
      <motion.div
        className={`absolute pointer-events-none ${className}`}
        style={{ width: size, height: size, ...style }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay, ease: "easeOut" }}
      >
        <motion.svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          animate={{ rotate: [0, 5, -3, 0] }}
          transition={{ duration: duration, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id={`pg-${delay}`} x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.16" />
              <stop offset="100%" stopColor="#988670" stopOpacity="0.06" />
            </linearGradient>
          </defs>
          {/* Puzzle piece shape — rounded tabs and concave slots */}
          <motion.path
            d="M25,10 C25,10 40,8 50,10 C50,10 52,18 58,18 C64,18 66,10 66,10 C76,12 90,15 90,25 C90,25 82,27 82,33 C82,39 90,41 90,41 C88,51 90,65 85,75 C85,75 78,72 74,76 C70,80 75,86 75,86 C65,92 50,95 40,90 C40,90 42,82 37,78 C32,74 26,80 26,80 C18,72 10,60 10,48 C10,48 18,45 18,39 C18,33 10,30 10,30 C10,22 18,12 25,10Z"
            fill={`url(#pg-${delay})`}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </motion.div>
    );
  }

  // Default: morphing blob
  const initialPath = blobPaths[0];

  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size, ...style }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: "easeOut" }}
    >
      <motion.svg
        viewBox="-100 -100 200 200"
        className="w-full h-full"
        animate={{ rotate: [0, 360] }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.path
          d={initialPath}
          fill={color}
          opacity={0.12}
          animate={{
            d: [blobPaths[0], blobPaths[1], blobPaths[2], blobPaths[3], blobPaths[0]],
          }}
          transition={{
            duration: duration * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   FloatingHeart — logo-inspired heart icon
   ──────────────────────────────────────────── */
export function FloatingHeart({
  className = "",
  size = 300,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [-10, 10, -10],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
        <defs>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D79A7D" stopOpacity="0.10" />
            <stop offset="50%" stopColor="#CFB9A8" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#D79A7D" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="heartGlow" cx="50%" cy="45%">
            <stop offset="0%" stopColor="#D79A7D" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#D79A7D" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Outer glow */}
        <circle cx="50" cy="50" r="48" fill="url(#heartGlow)" />
        {/* Main heart */}
        <path
          d={heartPuzzlePath}
          fill="url(#heartGrad)"
          stroke="rgba(215, 154, 125, 0.12)"
          strokeWidth="0.5"
        />
        {/* Puzzle-like inner curves — heart DNA */}
        <path d="M50 22C50 22 42 40 50 55" stroke="rgba(215, 154, 125, 0.08)" strokeWidth="0.6" fill="none" />
        <path d="M30 45C30 45 50 42 70 45" stroke="rgba(215, 154, 125, 0.08)" strokeWidth="0.6" fill="none" />
        <path d="M38 62C43 57 47 60 50 57C53 54 57 57 62 62" stroke="rgba(215, 154, 125, 0.06)" strokeWidth="0.4" fill="none" />
        {/* Puzzle nubs on seam */}
        <circle cx="50" cy="40" r="3" fill="rgba(215, 154, 125, 0.04)" />
        <circle cx="42" cy="52" r="2.5" fill="rgba(207, 185, 168, 0.04)" />
        <circle cx="58" cy="52" r="2.5" fill="rgba(207, 185, 168, 0.04)" />
      </svg>
    </motion.div>
  );
}

/* ────────────────────────────────────────────
   AmbientBlobs — slow drifting background warmth
   Very low opacity, large-scale, scroll-reactive
   ──────────────────────────────────────────── */
export function AmbientBlobs({ className = "" }: { className?: string }) {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}>
      {/* Top-right warm blob */}
      <motion.div
        className="absolute -top-[15%] -right-[10%] w-[650px] h-[650px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(215,154,125,0.12) 0%, rgba(215,154,125,0.04) 45%, transparent 70%)",
          y: y1,
        }}
        animate={{ x: [0, 25, -15, 0], y: [0, -15, 10, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bottom-left warm blob */}
      <motion.div
        className="absolute -bottom-[10%] -left-[10%] w-[550px] h-[550px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(207,185,168,0.11) 0%, rgba(207,185,168,0.03) 45%, transparent 70%)",
          y: y2,
        }}
        animate={{ x: [0, -20, 10, 0], y: [0, 20, -10, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Center heart-tinted warmth */}
      <motion.div
        className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[450px] h-[450px] rounded-full will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(215,154,125,0.08) 0%, rgba(215,154,125,0.02) 40%, transparent 65%)",
          y: y3,
        }}
        animate={{ scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

/* ────────────────────────────────────────────
   OrganicDivider — morphing SVG section transition
   Replaces hard section breaks with living curves
   ──────────────────────────────────────────── */
export function OrganicDivider({
  color = "#D79A7D",
  colorAlt = "#CFB9A8",
  flip = false,
  variant = "wave",
  className = "",
}: {
  color?: string;
  colorAlt?: string;
  flip?: boolean;
  variant?: "wave" | "heartWave" | "blob";
  className?: string;
}) {
  const wavePaths = {
    wave: [
      "M0,60 C150,20 350,100 500,50 C650,0 850,80 1000,40 L1000,100 L0,100Z",
      "M0,50 C120,90 300,10 500,60 C700,110 880,20 1000,50 L1000,100 L0,100Z",
    ],
    heartWave: [
      "M0,65 C80,40 160,80 250,50 C300,35 330,55 360,45 C390,35 420,55 480,40 C560,20 640,75 750,55 C860,35 940,60 1000,50 L1000,100 L0,100Z",
      "M0,50 C100,70 180,30 280,55 C340,70 370,40 400,50 C430,60 460,35 520,55 C600,80 700,25 800,50 C900,75 960,40 1000,60 L1000,100 L0,100Z",
    ],
    blob: [
      "M0,70 C100,30 200,90 350,50 C450,20 550,80 650,40 C750,10 850,70 1000,45 L1000,100 L0,100Z",
      "M0,45 C150,80 250,15 400,55 C500,85 600,25 700,60 C800,90 900,30 1000,55 L1000,100 L0,100Z",
    ],
  };

  const paths = wavePaths[variant];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ marginTop: "-1px", marginBottom: "-1px", transform: flip ? "scaleY(-1)" : undefined }}
    >
      <motion.svg
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[90px] block"
      >
        <defs>
          <linearGradient id={`divGrad-${variant}-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.15" />
            <stop offset="50%" stopColor={colorAlt} stopOpacity="0.10" />
            <stop offset="100%" stopColor={color} stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <motion.path
          fill={`url(#divGrad-${variant}-${flip})`}
          d={paths[0]}
          animate={{ d: [paths[0], paths[1], paths[0]] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
    </div>
  );
}

/* ────────────────────────────────────────────
   HeartContainer — organic card with heart-curve border
   Text sits inside a heart-inspired soft shell
   ──────────────────────────────────────────── */
export function HeartContainer({
  children,
  className = "",
  color = "#D79A7D",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: `linear-gradient(145deg, ${color}08, ${color}04)`,
        borderRadius: "40% 40% 50% 50% / 30% 30% 60% 60%",
        border: `1px solid ${color}12`,
        padding: "3rem 2.5rem",
        boxShadow: `0 20px 60px ${color}08, inset 0 1px 0 ${color}10`,
      }}
    >
      {/* Puzzle seam decorations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M50 5 C50 5 45 25 50 40" stroke={color} strokeOpacity="0.06" strokeWidth="0.3" fill="none" />
        <path d="M20 35 C20 35 50 32 80 35" stroke={color} strokeOpacity="0.05" strokeWidth="0.3" fill="none" />
      </svg>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
