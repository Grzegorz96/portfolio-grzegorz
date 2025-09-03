import { MotionH2, MotionDiv } from "@/components/motion";
import { useTranslations } from "next-intl";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-1 border-yellow-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mx-auto max-w-[540px] mb-16">
          <MotionH2
            className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 pb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("mainTitle")}
          </MotionH2>
        </div>

        {/* About text content */}
        <MotionDiv
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-lg leading-relaxed text-center">
            {t("description")}
          </p>
        </MotionDiv>
      </div>
    </section>
  );
}
