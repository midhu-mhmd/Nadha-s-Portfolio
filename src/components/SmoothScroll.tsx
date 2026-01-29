"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        // 1. Duration: Higher = slower/smoother (seconds)
        duration: 1.5,
        // 2. Lerp: Linear Interpolation (0 to 1). Lower = more "floaty"
        lerp: 0.08, 
        // 3. Smoothness for touch devices
        syncTouch: true,
        smoothWheel: true,
        // 4. Custom Easing (The "Awwwards" curve)
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }}
    >
      {children}
    </ReactLenis>
  );
}