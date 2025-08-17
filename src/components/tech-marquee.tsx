"use client";

import { MotionDiv } from "@/components/motion";
import { useAnimation } from "motion/react";
import { useEffect } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiAmazonwebservices, // poprawiona nazwa ikony AWS
  SiVercel,
  SiGit,
  SiTailwindcss,
  SiPrisma,
  SiGraphql,
  SiSocketdotio,
  SiPython,
  SiDjango,
  SiFastapi,
} from "react-icons/si";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" }, // poprawiona nazwa ikony AWS
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];

export function TechMarquee() {
  const controls = useAnimation();

  useEffect(() => {
    const startAnimation = () => {
      controls.start({
        x: [null, -130 * technologies.length],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <div className="relative overflow-hidden py-12 bg-gradient-to-r from-transparent via-primary/5 to-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

      <MotionDiv className="flex gap-8 whitespace-nowrap" animate={controls}>
        {[...technologies, ...technologies].map((tech, index) => (
          <MotionDiv
            key={`tech-${index}`}
            className="flex items-center gap-3 px-6 py-3 glass-effect border border-primary/20 rounded-full hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05, y: -2 }}
            style={{ minWidth: "fit-content" }}
          >
            <tech.icon
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
              style={{ color: tech.color }}
            />
            <span className="text-foreground font-medium group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}
