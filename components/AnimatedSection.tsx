"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
}: Props) {
  const distance = 40;

  const variants: Variants = {
    hidden: {
      opacity: 0,

      x:
        direction === "left" ? -distance : direction === "right" ? distance : 0,

      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,

      transition: {
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}