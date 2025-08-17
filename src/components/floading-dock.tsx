"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Code, Database, Globe, Mail } from "lucide-react";

interface FloatingDockProps {
  className?: string;
}

const dockItems = [
  { title: "O mnie", icon: <Code className="w-5 h-5" />, href: "#about" },
  {
    title: "Umiejętności",
    icon: <Database className="w-5 h-5" />,
    href: "#skills",
  },
  { title: "Projekty", icon: <Globe className="w-5 h-5" />, href: "#projects" },
  { title: "Kontakt", icon: <Mail className="w-5 h-5" />, href: "#contact" },
];

export function FloatingDock({ className }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50",
        className
      )}
    >
      <motion.div
        className="flex items-center gap-2 p-2 rounded-full glass-effect border border-primary/20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {dockItems.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.href}
            className="relative p-3 rounded-full bg-card/50 hover:bg-primary/20 transition-all duration-300 group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-foreground group-hover:text-primary transition-colors">
              {item.icon}
            </div>
            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-card rounded text-xs text-foreground whitespace-nowrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {item.title}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
