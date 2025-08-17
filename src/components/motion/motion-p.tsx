"use client";

import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type MotionPProps = HTMLMotionProps<"p">;

const MotionP = React.forwardRef<HTMLParagraphElement, MotionPProps>(
  function MotionP({ children, ...props }, ref) {
    return (
      <motion.p ref={ref} {...props}>
        {children}
      </motion.p>
    );
  }
);

export { MotionP };
