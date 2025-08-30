import { FloatingShape } from "./floating-shape";
import { floatingShapes } from "./data";
import { Heading, Description, StatusBadge } from "./content";
import { ScrollIndicator } from "./scroll-indicator";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center border-1 border-red-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent/[0.05] blur-3xl" />

      <div className="absolute inset-0">
        {floatingShapes.map((shape, index) => (
          <FloatingShape
            key={index}
            delay={shape.delay}
            width={shape.width}
            height={shape.height}
            rotate={shape.rotate}
            gradient={shape.gradient}
            className={shape.className}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <StatusBadge badge={t("content.badge")} />
          <Heading
            heading={t("content.heading")}
            headingWords={t.raw("content.headingWords")}
          />
          <Description description={t("content.description")} />
        </div>
      </div>

      <ScrollIndicator scrollDown={t("scrollDown")} />
    </section>
  );
}
