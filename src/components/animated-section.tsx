"use client";

import { motion, type HTMLMotionProps } from "motion/react";

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// initial={{
//   opacity: 0,
//   y: 60,
//   scale: 0.85,
//   rotateX: 20,
//   filter: "blur(10px)",
//   transformOrigin: "center bottom",
// }}
// whileInView={{
//   opacity: 1,
//   y: 0,
//   scale: 1,
//   rotateX: 0,
//   filter: "blur(0px)",
// }}
// viewport={{ once: true, margin: "-100px 0px -50px 0px" }}
// transition={{
//   duration: 1.2,
//   ease: [0.16, 1, 0.3, 1],
//   delay,
//   type: "spring",
//   stiffness: 80,
//   damping: 20,
//   mass: 0.8,
//   opacity: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
//   y: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
//   scale: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
//   rotateX: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
//   filter: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
// }}
