import { getTranslations } from "next-intl/server";
import { type Metadata } from "next";
import { Marquee } from "@/components/ui/marquee";
import { marqueeItems } from "@/lib/data";
import { AnimatedSection } from "@/components/animated-section";

import {
  HeroSection,
  ContactSection,
  AboutSection,
  ProjectsSection,
  FAQSection,
  SkillsSection,
} from "./_components";

import { AboutSection2 } from "./_components/about-section-2";

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
      <AnimatedSection id="about" delay={0.5} className="relative z-10 mt-16">
        <AboutSection />
      </AnimatedSection>

      <AnimatedSection
        id="skills"
        delay={0.5}
        className="relative z-10 max-w-[1320px] mx-auto mt-16"
      >
        <SkillsSection />
      </AnimatedSection>

      <AnimatedSection
        id="projects"
        delay={0.5}
        className="relative z-10 max-w-[1320px] mx-auto mt-16"
      >
        <ProjectsSection />
      </AnimatedSection>

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

      <AnimatedSection
        id="faq"
        delay={0.5}
        className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16 border-2 border-blue-500"
      >
        <FAQSection />
      </AnimatedSection>
      <AnimatedSection
        id="contact"
        delay={0.5}
        className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16 border-2 border-blue-500"
      >
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
