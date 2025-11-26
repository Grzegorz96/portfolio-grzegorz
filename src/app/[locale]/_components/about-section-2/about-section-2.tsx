"use client";

import { useTranslations } from "next-intl";
import { IDEEditor } from "./ide-editor";
import { StatusBadge } from "../about-section/content/status-badge";
import { Heading } from "../about-section/content/heading";
import { SubHeading } from "../about-section/content/sub-heading";
import { Description } from "../about-section/content/description";
import { ActionButtons } from "../about-section/action-buttons";
import { Cards } from "../about-section/stats/cards";

export function AboutSection2() {
  const t = useTranslations("About");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[color:var(--background)] text-foreground">
      {/* IDE centered backdrop */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl px-4">
          <IDEEditor />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-background via-background/95 to-background/15" />
          <div className="absolute inset-y-0 left-0 w-2/3 rounded-3xl bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          <div className="absolute -left-32 top-8 h-64 w-64 rounded-full bg-chart-2/20 blur-[130px]" />
          <div className="absolute left-1/3 bottom-6 h-40 w-40 rounded-full bg-chart-1/16 blur-[110px]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center justify-start px-6 py-10 lg:py-14">
        <div className="w-full max-w-3xl space-y-6">
          <StatusBadge badge={t("content.badge")} />

          <div className="space-y-4">
            <Heading heading={t("content.heading")} />
            <SubHeading
              subHeading={t("content.subHeading")}
              subHeadingWords={t.raw("content.subHeadingWords")}
            />
            <Description description={t("content.description")} />
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <ActionButtons
              contact={t("actionButtons.contact")}
              github={t("actionButtons.github")}
            />

            <Cards
              experience={{
                years: t("stats.cards.experience.years"),
                description: t("stats.cards.experience.description"),
                subDescription: t("stats.cards.experience.subDescription"),
              }}
              projects={{
                count: t("stats.cards.projects.count"),
                description: t("stats.cards.projects.description"),
                subDescription: t("stats.cards.projects.subDescription"),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
