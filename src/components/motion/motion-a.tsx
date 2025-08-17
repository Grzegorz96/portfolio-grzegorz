"use client";

import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type MotionAProps = HTMLMotionProps<"a">;

const MotionA = React.forwardRef<HTMLAnchorElement, MotionAProps>(
  function MotionA({ children, ...props }, ref) {
    return (
      <motion.a ref={ref} {...props}>
        {children}
      </motion.a>
    );
  }
);

export { MotionA };
