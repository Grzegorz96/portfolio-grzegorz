"use client";

import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type MotionSpanProps = HTMLMotionProps<"span">;

const MotionSpan = React.forwardRef<HTMLSpanElement, MotionSpanProps>(
  function MotionSpan({ children, ...props }, ref) {
    return (
      <motion.span ref={ref} {...props}>
        {children}
      </motion.span>
    );
  }
);

export { MotionSpan };
