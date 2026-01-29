"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Moves the image slightly within its container
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className="overflow-hidden relative h-[500px] w-full">
      <motion.img 
        style={{ y, scale: 1.2 }} 
        src={src} 
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}