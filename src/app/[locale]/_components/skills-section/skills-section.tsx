"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code,
  CheckCircle,
  Rocket,
  RefreshCcw,
  Database,
  Cloud,
  Globe,
  Cpu,
  Server,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useTranslations } from "next-intl";

export function SkillsSection() {
  const t = useTranslations("Skills");
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const stepFlowItems = [
    {
      icon: <Code className="h-10 w-10 text-gray-700" />,
      title: t("categories.frontend.title"),
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "React Query",
        "ZOD",
        "Three.js",
        "Chart.js",
        "Leaflet",
      ],
      description: t("categories.frontend.description"),
      hoverDescription: t("categories.frontend.hoverDescription"),
      hoverSubDescription: t("categories.frontend.hoverSubDescription"),
    },
    {
      icon: <Server className="h-10 w-10 text-gray-700" />,
      title: t("categories.backend.title"),
      skills: [
        "Node.js",
        "NestJS",
        "Express",
        "Python",
        "Flask",
        "Socket.io",
        "GraphQL",
        "JWT",
        "OAuth2",
        "Stripe",
      ],
      description: t("categories.backend.description"),
      hoverDescription: t("categories.backend.hoverDescription"),
      hoverSubDescription: t("categories.backend.hoverSubDescription"),
    },
    {
      icon: <Database className="h-10 w-10 text-gray-700" />,
      title: t("categories.database.title"),
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "TypeORM",
        "Mongoose",
        "Prisma",
      ],
      description: t("categories.database.description"),
      hoverDescription: t("categories.database.hoverDescription"),
      hoverSubDescription: t("categories.database.hoverSubDescription"),
    },
    {
      icon: <Cloud className="h-10 w-10 text-gray-700" />,
      title: t("categories.devops.title"),
      skills: ["AWS", "Docker", "Vercel", "Netlify", "CI/CD", "Microservices"],
      description: t("categories.devops.description"),
      hoverDescription: t("categories.devops.hoverDescription"),
      hoverSubDescription: t("categories.devops.hoverSubDescription"),
    },
    {
      icon: <Cpu className="h-10 w-10 text-gray-700" />,
      title: t("categories.testing.title"),
      skills: [
        "Jest",
        "Supertest",
        "Unit Testing",
        "Code Review",
        "Clean Code",
      ],
      description: t("categories.testing.description"),
      hoverDescription: t("categories.testing.hoverDescription"),
      hoverSubDescription: t("categories.testing.hoverSubDescription"),
    },
    {
      icon: <Globe className="h-10 w-10 text-gray-700" />,
      title: t("categories.tools.title"),
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "ESLint",
        "Prettier",
        "VSCode",
        "GitHub Copilot",
      ],
      description: t("categories.tools.description"),
      hoverDescription: t("categories.tools.hoverDescription"),
      hoverSubDescription: t("categories.tools.hoverSubDescription"),
    },
  ];

  const sprintPhases = [
    {
      name: "Next.js",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      name: "TypeScript",
      icon: <Cpu className="h-4 w-4" />,
    },
    {
      name: "Node.js",
      icon: <Database className="h-4 w-4" />,
    },
    {
      name: "NestJS",
      icon: <Code className="h-4 w-4" />,
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 pb-2 mb-6">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Pierwszy rząd - Frontend, Backend, Databases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stepFlowItems.slice(0, 3).map((item) => (
            <HoverCard key={item.title}>
              <HoverCardTrigger asChild>
                <div className="bg-gradient-to-br from-card to-secondary rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-secondary rounded-full p-4 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[calc(var(--radix-hover-card-trigger-width)-20px)] shadow-lg">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-card-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.hoverDescription}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {item.hoverSubDescription}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="relative h-16 mb-10">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-border to-muted"></div>
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
            <div className="bg-muted rounded-full p-1">
              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
            </div>
          </div>

          <div className="md:hidden flex justify-center items-center h-full">
            <div className="w-1/3 h-0.5 bg-border"></div>
            <div className="bg-muted rounded-full p-1 mx-2">
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="w-1/3 h-0.5 bg-border"></div>
          </div>
        </div>

        {/* Drugi rząd - Cloud & DevOps, Testing & Quality, Development Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stepFlowItems.slice(3, 6).map((item) => (
            <HoverCard key={item.title}>
              <HoverCardTrigger asChild>
                <div className="bg-gradient-to-br from-card to-secondary rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-border h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-secondary rounded-full p-4 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[calc(var(--radix-hover-card-trigger-width)-20px)] shadow-lg">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-card-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.hoverDescription}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {item.hoverSubDescription}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="relative h-16 mb-10">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-border to-muted"></div>
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
            <div className="bg-muted rounded-full p-1">
              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
            </div>
          </div>

          <div className="md:hidden flex justify-center items-center h-full">
            <div className="w-1/3 h-0.5 bg-border"></div>
            <div className="bg-muted rounded-full p-1 mx-2">
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="w-1/3 h-0.5 bg-border"></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary to-muted rounded-2xl p-8 mb-10 shadow-sm border border-border">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                {t("progress.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("progress.description")}
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 mb-8 border border-border">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {t("progress.subtitle")}
                </span>
                <RefreshCcw className="h-4 w-4 text-muted-foreground animate-spin" />
              </div>

              <div className="relative mb-6">
                <Progress value={progressValue} className="h-2" />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {sprintPhases.map((phase, index) => (
                  <div
                    key={index}
                    className={cn(
                      "text-center p-4 rounded-lg transition-all duration-300 border",
                      progressValue >= (index / sprintPhases.length) * 100
                        ? "bg-primary/10 border-primary/20"
                        : "bg-secondary border-border"
                    )}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={cn(
                          "rounded-full p-2 mb-2 transition-all duration-300",
                          progressValue >= (index / sprintPhases.length) * 100
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        )}
                      >
                        {phase.icon}
                      </div>
                      <span className="text-sm font-medium text-card-foreground">
                        {phase.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center">
                <div className="bg-primary/10 rounded-full p-2 mr-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {t("progress.feedback")}
                </span>
              </div>
              <div className="text-sm text-muted-foreground flex items-center">
                <span className="mr-3">{t("progress.improvement")}</span>
                <div className="flex space-x-1">
                  <span className="inline-block w-2 h-2 bg-muted rounded-full animate-pulse"></span>
                  <span className="inline-block w-2 h-2 bg-muted-foreground rounded-full animate-pulse animation-delay-200"></span>
                  <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-400"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-16 mb-10">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-border to-muted"></div>
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
            <div className="bg-muted rounded-full p-1">
              <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
            </div>
          </div>

          <div className="md:hidden flex justify-center items-center h-full">
            <div className="w-1/3 h-0.5 bg-border"></div>
            <div className="bg-muted rounded-full p-1 mx-2">
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="w-1/3 h-0.5 bg-border"></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary via-card to-secondary rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
          <div className="relative inline-block mb-4">
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse-slow"></div>
            <div className="relative bg-card rounded-full p-4 border border-border shadow-md">
              <Rocket className="h-10 w-10 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-card-foreground">
            {t("cta.title")}
          </h3>
          <p className="text-muted-foreground">{t("cta.description")}</p>
          <div className="flex justify-center mt-4 space-x-2">
            <span className="inline-block w-3 h-3 rounded-full bg-muted animate-pulse"></span>
            <span className="inline-block w-3 h-3 rounded-full bg-muted-foreground animate-pulse animation-delay-200"></span>
            <span className="inline-block w-3 h-3 rounded-full bg-primary animate-pulse animation-delay-400"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
