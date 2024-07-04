"use client";

import { useScroll, motion } from "framer-motion";

export default function Progressbar() {
  const { scrollYProgress } = useScroll(); // destructure scrollYProgress

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress, //scaleX added
        transformOrigin: "left",
        background: "#000000",
        position: "fixed", // Change to fixed
        bottom: 0, // Position it at the bottom
        left: 0,
        width: "100%",
        height: "9px", // Adjust the height as needed
        zIndex: 1000, // Ensure it is above other elements
      }}
    />
  );
}
