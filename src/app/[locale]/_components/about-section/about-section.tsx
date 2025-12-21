import { StatusBadge, Heading, SubHeading, Description } from "./content";
import { Cards } from "./stats";
import { Photo } from "./photo";
import { ActionButtons } from "./action-buttons";
import { BackgroundElements } from "./background-elements";
import { useTranslations } from "next-intl";
import Demo from "../tech-section/demo";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <BackgroundElements />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 sm:gap-12 lg:gap-24">
          {/* Status Badge - Mobile */}
          <div className="order-1 lg:hidden w-full">
            <StatusBadge badge={t("content.badge")} />
          </div>

          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left max-w-4xl lg:max-w-3xl *:w-full gap-8">
            {/* Content */}
            <div className="flex flex-col gap-6">
              <div className="hidden lg:block">
                <StatusBadge badge={t("content.badge")} />
              </div>
              <Heading heading={t("content.heading")} />
              <SubHeading
                subHeading={t("content.subHeading")}
                subHeadingWords={t.raw("content.subHeadingWords")}
              />
              <Description description={t("content.description")} />
            </div>
            <ActionButtons
              contact={t("actionButtons.contact")}
              github={t("actionButtons.github")}
            />
            {/* Stats */}
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

          {/* Right Side - Photo */}
          <Photo />
        </div>
        {/* <Demo /> */}
      </div>
    </section>
  );
}
