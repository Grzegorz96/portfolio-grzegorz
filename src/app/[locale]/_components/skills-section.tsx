import { MotionH2, MotionDiv } from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Globe,
  Cloud,
  Server,
  Zap,
  TrendingUp,
  Star,
  Palette,
  TestTube,
} from "lucide-react";
import { useTranslations } from "next-intl";

interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  titleKey: string;
  description: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    titleKey: "frontend",
    description: "React, Next.js, TypeScript",
    color: "from-blue-500/80 to-cyan-500/80",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Redux", level: "advanced" },
      { name: "React Query", level: "advanced" },
      { name: "ZOD", level: "intermediate" },
      { name: "Three.js", level: "intermediate" },
      { name: "Chart.js", level: "intermediate" },
      { name: "Leaflet", level: "intermediate" },
    ],
  },
  {
    icon: Server,
    titleKey: "backend",
    description: "Node.js, NestJS, Python",
    color: "from-emerald-500/80 to-green-500/80",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "NestJS", level: "expert" },
      { name: "Express", level: "expert" },
      { name: "Python", level: "advanced" },
      { name: "Flask", level: "intermediate" },
      { name: "Socket.io", level: "intermediate" },
      { name: "GraphQL", level: "intermediate" },
      { name: "JWT", level: "expert" },
      { name: "OAuth2", level: "intermediate" },
      { name: "Stripe", level: "intermediate" },
    ],
  },
  {
    icon: Database,
    titleKey: "database",
    description: "PostgreSQL, MongoDB, Redis",
    color: "from-purple-500/80 to-pink-500/80",
    skills: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MongoDB", level: "expert" },
      { name: "Redis", level: "advanced" },
      { name: "MySQL", level: "intermediate" },
      { name: "TypeORM", level: "intermediate" },
      { name: "Mongoose", level: "intermediate" },
      { name: "Prisma", level: "intermediate" },
    ],
  },
  {
    icon: Cloud,
    titleKey: "devops",
    description: "AWS, Docker, Vercel",
    color: "from-orange-500/80 to-red-500/80",
    skills: [
      { name: "AWS", level: "intermediate" },
      { name: "Docker", level: "expert" },
      { name: "Vercel", level: "expert" },
      { name: "Netlify", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
      { name: "Microservices", level: "advanced" },
    ],
  },
  {
    icon: TestTube,
    titleKey: "testing",
    description: "Jest, Supertest, Quality",
    color: "from-indigo-500/80 to-blue-500/80",
    skills: [
      { name: "Jest", level: "expert" },
      { name: "Supertest", level: "advanced" },
      { name: "Unit Testing", level: "advanced" },
      { name: "Code Review", level: "intermediate" },
      { name: "Clean Code", level: "advanced" },
    ],
  },
  {
    icon: Palette,
    titleKey: "tools",
    description: "Git, Development Tools",
    color: "from-teal-500/80 to-cyan-500/80",
    skills: [
      { name: "Git", level: "expert" },
      { name: "GitHub", level: "expert" },
      { name: "Postman", level: "advanced" },
      { name: "ESLint", level: "advanced" },
      { name: "Prettier", level: "advanced" },
      { name: "VSCode", level: "expert" },
      { name: "GitHub Copilot", level: "intermediate" },
    ],
  },
];

const getLevelColor = (level: string) => {
  // Neutralne kolory spójne z portfolio
  return "bg-muted/50 text-muted-foreground border-border/50 backdrop-blur-sm";
};

const getLevelIcon = (level: string) => {
  switch (level) {
    case "beginner":
      return <Zap className="w-3 h-3" />;
    case "intermediate":
      return <TrendingUp className="w-3 h-3" />;
    case "advanced":
      return <Star className="w-3 h-3" />;
    case "expert":
      return <Star className="w-3 h-3 fill-current" />;
    default:
      return <Zap className="w-3 h-3" />;
  }
};

export function SkillsSection() {
  const t = useTranslations("Skills");

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16 border-1 border-pink-500"
    >
      <div className="max-w-7xl mx-auto">
        <MotionH2
          className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 pb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("title")}
        </MotionH2>

        <MotionDiv
          className="mt-5 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t("description")}
          </p>
        </MotionDiv>

        {/* Tech Overview Cards with Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <MotionDiv
              key={category.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 h-full group hover:scale-105 hover:shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-border/50">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">
                        {t(`categories.${category.titleKey}`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <MotionDiv
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: skillIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="secondary"
                            className={`${getLevelColor(
                              skill.level
                            )} border-2 hover:scale-105 transition-all duration-200 font-medium backdrop-blur-sm`}
                          >
                            {skill.name}
                          </Badge>
                          <span className="text-xs text-muted-foreground/70">
                            {getLevelIcon(skill.level)}
                          </span>
                        </div>
                      </MotionDiv>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Skills Legend */}
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-6 text-sm text-muted-foreground/80 bg-background/50 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20">
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              {t("levels.beginner")}
            </span>
            <span className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {t("levels.intermediate")}
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              {t("levels.advanced")}
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 fill-current" />
              {t("levels.expert")}
            </span>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
