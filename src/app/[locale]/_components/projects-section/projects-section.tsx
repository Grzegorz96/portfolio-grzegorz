"use client";

import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export type ProjectEntry = {
  domain: string;
  date: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  button: string;
};

export function ProjectsSection() {
  const t = useTranslations("Projects");

  const projectEntries: ProjectEntry[] = [
    {
      domain: t("entries.teamcraft.domain"),
      date: t("entries.teamcraft.date"),
      title: t("entries.teamcraft.title"),
      description: t("entries.teamcraft.description"),
      features: [
        t("entries.teamcraft.features.f1"),
        t("entries.teamcraft.features.f2"),
        t("entries.teamcraft.features.f3"),
        t("entries.teamcraft.features.f4"),
      ],
      image: "/images/projects/teamcraft/pc/1.png",
      button: t("entries.teamcraft.button"),
    },
    {
      domain: t("entries.meteofy.domain"),
      date: t("entries.meteofy.date"),
      title: t("entries.meteofy.title"),
      description: t("entries.meteofy.description"),
      features: [
        t("entries.meteofy.features.f1"),
        t("entries.meteofy.features.f2"),
        t("entries.meteofy.features.f3"),
        t("entries.meteofy.features.f4"),
      ],
      image: "/images/projects/meteofy/pc/1.png",
      button: t("entries.meteofy.button"),
    },
    {
      domain: t("entries.shoper.domain"),
      date: t("entries.shoper.date"),
      title: t("entries.shoper.title"),
      description: t("entries.shoper.description"),
      features: [
        t("entries.shoper.features.f1"),
        t("entries.shoper.features.f2"),
        t("entries.shoper.features.f3"),
        t("entries.shoper.features.f4"),
      ],
      image: "/images/projects/shoper/1.png",
      button: t("entries.shoper.button"),
    },
    {
      domain: t("entries.millionaire.domain"),
      date: t("entries.millionaire.date"),
      title: t("entries.millionaire.title"),
      description: t("entries.millionaire.description"),
      features: [
        t("entries.millionaire.features.f1"),
        t("entries.millionaire.features.f2"),
        t("entries.millionaire.features.f3"),
        t("entries.millionaire.features.f4"),
      ],
      image: "/images/projects/millionaire_webapp/pc/1.png",
      button: t("entries.millionaire.button"),
    },
    {
      domain: t("entries.saper.domain"),
      date: t("entries.saper.date"),
      title: t("entries.saper.title"),
      description: t("entries.saper.description"),
      features: [
        t("entries.saper.features.f1"),
        t("entries.saper.features.f2"),
        t("entries.saper.features.f3"),
        t("entries.saper.features.f4"),
      ],
      image: "/images/projects/saper/1.png",
      button: t("entries.saper.button"),
    },
  ];

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full mx-auto py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        {/* Background shader */}
        <div className="w-[547px] h-[938px] absolute top-[614px] right-[80px] origin-top-right rotate-[33.39deg] bg-primary/10 blur-[130px] z-0" />

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

        <div className="w-full max-w-4xl mx-auto relative z-10 space-y-12 md:space-y-16">
          {projectEntries.map((entry, index) => (
            <div
              key={index}
              className="relative flex flex-col gap-6 md:flex-row md:gap-12 border-b border-border/50 pb-12 md:pb-16 last:border-0"
            >
              <div className="top-32 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                <Badge
                  variant="secondary"
                  className="text-xs font-semibold w-fit bg-primary/10 text-primary border border-primary/20"
                >
                  {entry.domain}
                </Badge>
                <span className="text-muted-foreground text-xs font-medium">
                  {entry.date}
                </span>
              </div>
              <div className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-4">
                  <h2 className="text-foreground text-xl md:text-2xl lg:text-3xl font-semibold leading-tight">
                    {entry.title}
                  </h2>
                  <p className="text-muted-foreground text-sm md:text-base font-normal leading-relaxed">
                    {entry.description}
                  </p>

                  <ul className="text-muted-foreground ml-4 space-y-2 text-sm md:text-base">
                    {entry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="list-disc">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full">
                  <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={entry.image}
                      alt={`${entry.title} preview`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="mt-2 group w-fit border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 bg-background/50 backdrop-blur-sm font-semibold px-6 py-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl rounded-xl"
                  asChild
                >
                  <a href="#projects" className="flex items-center">
                    <span className="mr-2">{entry.button}</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
