"use client";

import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type MotionH3Props = HTMLMotionProps<"h3">;

const MotionH3 = React.forwardRef<HTMLHeadingElement, MotionH3Props>(
  function MotionH3({ children, ...props }, ref) {
    return (
      <motion.h3 ref={ref} {...props}>
        {children}
      </motion.h3>
    );
  }
);

export { MotionH3 };
