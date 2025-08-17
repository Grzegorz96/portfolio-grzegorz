"use client";

import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type MotionH2Props = HTMLMotionProps<"h2">;

const MotionH2 = React.forwardRef<HTMLHeadingElement, MotionH2Props>(
  function MotionH2({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    );
  }
);

export { MotionH2 };
