"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({ value, duration = 2, prefix = "", suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  // Format number (e.g., 12500 -> 12.5k) if it's large, but since the mock data has values like 12500 and suffix '+',
  // we'll just format it with commas
  const formattedCount = Math.floor(count).toLocaleString();

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
