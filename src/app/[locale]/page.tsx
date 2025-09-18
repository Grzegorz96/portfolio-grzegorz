import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { Marquee } from "@/components/ui/marquee";
import { marqueeItems } from "@/lib/data";

import {
  HeroSection,
  HomeSection,
  ContactSection,
  ProjectsSection,
  AboutSection,
  FAQSection,
  SkillsSection,
} from "./_components";
import { BackgroundBeams } from "@/components/background-beams";

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
      {/* <BackgroundBeams /> */}
      <HeroSection />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Marquee speed={90}>
        {Object.entries(marqueeItems).map(([name, Logo]) => (
          <div
            key={name}
            className="relative h-16 w-fit mx-8 flex items-center justify-center"
          >
            <Logo />
          </div>
        ))}
      </Marquee>
      <FAQSection />
      <ContactSection />
    </>
  );
}
