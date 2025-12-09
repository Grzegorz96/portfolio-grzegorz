import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { useTranslations } from "next-intl";

import { Frontend, Backend, Databases, DevOps, Tools, Testing } from "./images";
import { CTA } from "./cta";

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
    },
    {
      icon: <DevOps />,
      title: t("categories.devops.title"),
      skills: ["AWS", "Docker", "Vercel", "Netlify", "CI/CD", "Microservices"],
      description: t("categories.devops.description"),
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
    },
  ];

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent border-2">
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
            <Card
              key={item.title}
              className="overflow-hidden rounded-2xl border-foreground/20 flex flex-col justify-start items-start relative group shadow-none gap-0 bg-transparent self-stretch p-6 z-10 h-full"
            >
              {/* Background */}
              <div className="absolute inset-0 rounded-2xl bg-card" />
              {/* Additional subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent rounded-2xl" />

              <CardHeader className="p-0 px-0 gap-0 flex flex-col items-start self-stretch w-full flex-1 relative">
                <CardTitle className="leading-7 font-normal mb-0 p-0 text-lg text-foreground self-stretch w-full">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-lg leading-7 font-normal p-0 text-muted-foreground mt-0 mb-0 w-full">
                  {item.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1 justify-start mt-4 w-full">
                  {item.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block px-2 py-1 text-xs bg-primary/10 text-foreground rounded-md border border-foreground/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="self-stretch h-68 relative -mt-0.5 z-10 p-0">
                {item.icon}
              </CardContent>
            </Card>
          ))}
        </div>
        <CTA
          title={t("cta.title")}
          subtitle={t("cta.subtitle")}
          description={t("cta.description")}
          buttonText={t("cta.button")}
        />
      </div>
    </section>
  );
}
