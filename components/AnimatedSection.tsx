"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  direction?: "left" | "right" | "up";
};

export default function AnimatedSection({
  children,
  direction = "up",
}: Props) {
  let x = 0;
  let y = 0;

  if (direction === "left") x = -120;
  if (direction === "right") x = 120;
  if (direction === "up") y = 80;

  return (
    <motion.div
      initial={{ opacity: 0, x, y, scale: 0.95, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // smooth cubic-bezier
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
}