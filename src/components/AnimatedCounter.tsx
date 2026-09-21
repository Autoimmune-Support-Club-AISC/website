"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export default function AnimatedCounter({
  end,
  duration = 3,
  suffix = "",
  prefix = "",
  label,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (endTime - startTime), 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center"
    >
      <div className="font-serif text-5xl md:text-6xl text-blush mb-3 tracking-tight">
        <span className="sr-only">
          {prefix}
          {end.toLocaleString()}
          {suffix}
        </span>
        <span aria-hidden="true">
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </span>
      </div>
      <div className="text-foreground-light/60 text-sm tracking-widest uppercase">
        {label}
      </div>
    </motion.div>
  );
}
