// components/Progressbar.tsx
"use client";

import { useScroll, motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Progressbar() {
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
        background: theme === 'light' ? '#000000' : '#FFFFFF',
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "9px",
        zIndex: 1000,
      }}
    />
  );
}
