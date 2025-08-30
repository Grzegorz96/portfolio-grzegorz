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
  SiAmazonwebservices,
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

export interface TechItem {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}

export const technologies: TechItem[] = [
  { name: "Next.js", icon: SiNextdotjs, color: "#3B82F6" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Express", icon: SiExpress, color: "#E5E7EB" },
  { name: "Nest.js", icon: SiNestjs, color: "#E0234E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Vercel", icon: SiVercel, color: "#6B7280" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#636363" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
];
