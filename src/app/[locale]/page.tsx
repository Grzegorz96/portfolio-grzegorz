import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { Marquee } from "@/components/ui/marquee";
import { marqueeItems } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";

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
      <HeroSection />
      <HomeSection />
      <AboutSection />
      <AnimatedSection
        id="skills"
        delay={0.3}
        className="relative z-10 max-w-[1320px] mx-auto scroll-mt-16"
      >
        <SkillsSection />
      </AnimatedSection>

      {/* <ProjectsSection /> */}
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
      <AnimatedSection delay={0.3}>
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
