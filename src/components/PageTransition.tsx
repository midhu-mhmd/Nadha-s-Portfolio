"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Animation variants for the overlay strips
  const anim = (variants: any, custom: number) => ({
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  });

  const expand = {
    initial: { top: 0 },
    enter: (i: number) => ({
      top: "100vh",
      transition: {
        duration: 0.8,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1], // Cubic out
      },
      transitionEnd: { height: "0", top: "0" },
    }),
    exit: (i: number) => ({
      height: "100vh",
      transition: {
        duration: 0.5,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <div className="inner">
      <AnimatePresence mode="wait">
        <motion.div key={pathname}>
          {/* 1. STAIRCASE OVERLAY (The Strips) */}
          <div className="fixed inset-0 z-[100] flex pointer-events-none h-screen w-screen">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                {...anim(expand, i)}
                className="relative h-full w-full bg-[#C0847B]"
              />
            ))}
          </div>

          {/* 2. CONTENT TRANSITION */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}