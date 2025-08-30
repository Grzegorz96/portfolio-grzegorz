import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { BackgroundBeams } from "@/components/background-beams";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import {
  HeroSection,
  HomeSection,
  ContactSection,
  ProjectsSection,
  AboutSection,
  FAQSection,
  SkillsSection,
} from "./_components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function LandingPage() {
  return (
    <>
      <BackgroundBeams />
      <HeroSection />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <InfiniteMovingCards speed="slow" className="w-full" />
      <FAQSection />
      <ContactSection />
    </>
  );
}
