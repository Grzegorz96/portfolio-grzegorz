import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { useTranslations } from "next-intl";

import { Frontend, Backend, Databases, DevOps, Tools, Testing } from "./images";
import { NewReleasePromo } from "@/components/ui/something";

export function SkillsSection() {
  const t = useTranslations("Skills");

  const stackCategories = [
    {
      icon: <Frontend />,
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
      icon: <Backend />,
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
      icon: <Databases />,
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
      icon: <DevOps />,
      title: t("categories.devops.title"),
      skills: ["AWS", "Docker", "Vercel", "Netlify", "CI/CD", "Microservices"],
      description: t("categories.devops.description"),
      hoverDescription: t("categories.devops.hoverDescription"),
      hoverSubDescription: t("categories.devops.hoverSubDescription"),
    },
    {
      icon: <Testing />,
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
      icon: <Tools />,
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

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              {t("title")}
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              {t("description")}
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {stackCategories.map((item) => (
            <HoverCard key={item.title}>
              <HoverCardTrigger asChild>
                <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative group">
                  {/* Background */}
                  <div className="absolute inset-0 rounded-2xl bg-card" />
                  {/* Additional subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

                  <div className="self-stretch p-6 flex flex-col justify-between items-start relative z-10 h-full">
                    <div className="flex flex-col justify-start items-start flex-1">
                      <p className="self-stretch text-foreground text-lg font-normal leading-7">
                        {item.title} <br />
                        <span className="text-muted-foreground">
                          {item.description}
                        </span>
                      </p>

                      <div className="flex flex-wrap gap-1 justify-start mt-4 w-full">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="self-stretch h-68 relative -mt-0.5 z-10">
                      {item.icon}
                    </div>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-[calc(var(--radix-hover-card-trigger-width)-20px)] shadow-lg border border-border rounded-xl">
                <div className="space-y-3">
                  <h4 className="text-base font-medium text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-sm font-normal text-muted-foreground leading-6">
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
        <NewReleasePromo />
      </div>
    </section>
  );
}
