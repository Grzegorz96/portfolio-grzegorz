"use client";

import { MotionConfig } from "motion/react";
import { ReactNode } from "react";

interface MotionConfigProviderProps {
  children: ReactNode;
}

export function MotionConfigProvider({ children }: MotionConfigProviderProps) {
  return (
    <MotionConfig
      // Globalne ustawienia transition
      transition={{
        // Domyślne ustawienia dla wszystkich animacji
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1], // ease-out curve
        // Domyślne ustawienia dla różnych typów animacji
        opacity: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
        y: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // slide up/down
        x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // slide left/right
        scale: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }, // hover effects
        rotate: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // rotation effects
        filter: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }, // blur, brightness etc
      }}
      // Respektuj ustawienia użytkownika dotyczące redukcji animacji
      reducedMotion="user"
    >
      {children}
    </MotionConfig>
  );
}

// Eksportuj również jako domyślny
export default MotionConfigProvider;
