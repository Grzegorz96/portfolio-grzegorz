import { MotionH2, MotionDiv } from "@/components/motion";
import { useTranslations } from "next-intl";

export function Heading() {
  const t = useTranslations("Projects");

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
      <MotionH2
        className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 pb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {t("title")}
      </MotionH2>
      <MotionDiv
        className="mt-5 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          {t("description")}
        </p>
      </MotionDiv>
    </div>
  );
}
