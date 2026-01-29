"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ 
        once: true,      // Animation happens only once
        margin: "-100px" // Triggers when element is 100px into view
      }}
      transition={{
        duration: 0.9,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1], // Cubic-out ease for a "snap" into place
      }}
    >
      {children}
    </motion.div>
  );
}