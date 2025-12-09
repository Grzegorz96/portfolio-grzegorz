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
  images: string[];
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
      images: [
        "/images/projects/teamcraft/pc/1.png",
        "/images/projects/teamcraft/pc/2.png",
      ],
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
      images: [
        "/images/projects/meteofy/pc/1.png",
        "/images/projects/meteofy/pc/2.png",
      ],
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
      images: [
        "/images/projects/shoper/1.png",
        "/images/projects/shoper/2.png",
      ],
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
      images: [
        "/images/projects/millionaire_webapp/pc/1.png",
        "/images/projects/millionaire_webapp/pc/2.png",
      ],
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
      images: ["/images/projects/saper/1.png", "/images/projects/saper/2.png"],
      button: t("entries.saper.button"),
    },
  ];

  return (
    <section className="w-full px-5 overflow-visible bg-transparent mx-auto py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
      {/* Background shader */}
      <div className="w-[547px] h-[938px] absolute top-[614px] right-[80px] origin-top-right rotate-[33.39deg] bg-primary/10 blur-[130px] z-0" />

      <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
        <div className="relative flex flex-col items-center text-center gap-6">
          <h2 className="w-full max-w-[720px] text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
            {t("title")}
          </h2>
          <p className="w-full max-w-[720px] text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            {t("description")}
          </p>
        </div>
      </div>

      <div className="w-full relative z-10 bg-card/50 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 md:p-12 space-y-12 md:space-y-16 ring-1 ring-foreground/5">
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

              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                {entry.images.map((imageSrc, imageIndex) => (
                  <div
                    key={imageSrc}
                    className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/60 bg-gradient-to-br from-card/80 via-card/60 to-background shadow-lg hover:shadow-xl transition-all duration-300 p-3"
                  >
                    <Image
                      src={imageSrc}
                      alt={`${entry.title} preview ${imageIndex + 1}`}
                      fill
                      className="object-contain drop-shadow-sm"
                      sizes="(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw"
                      priority={index === 0 && imageIndex === 0}
                    />
                  </div>
                ))}
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
    </section>
  );
}
