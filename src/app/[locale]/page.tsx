import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { FloatingDock } from "@/components/floading-dock";
import { BackgroundBeams } from "@/components/background-beams";
import { TechMarquee } from "@/components/tech-marquee";

import {
  AboutSection,
  ContactSection,
  ProjectsSection,
  SkillsSection,
  HeroSection,
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundBeams />

      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TechMarquee />
      <ContactSection />

      {/* <FloatingDock /> */}
    </div>
  );
}
