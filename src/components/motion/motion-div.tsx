"use client";

import React from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  function MotionDiv({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    );
  }
);

export { MotionDiv };
