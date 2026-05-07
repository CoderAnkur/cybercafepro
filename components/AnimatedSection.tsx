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
  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -180 : direction === "right" ? 180 : 0,
      y: direction === "up" ? 110 : direction === "down" ? -110 : 0,
      scale: 0.9,
      rotate: direction === "left" ? -3 : direction === "right" ? 3 : 0,
      filter: "blur(18px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1.35,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      exit="hidden"
      viewport={{ once: false, amount: 0.22, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}