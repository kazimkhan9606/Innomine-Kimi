"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { MotionProvider } from "@/components/providers/MotionProvider";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <MotionProvider>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent transform origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-16">{children}</main>
        <Footer />
      </div>
    </MotionProvider>
  );
}
