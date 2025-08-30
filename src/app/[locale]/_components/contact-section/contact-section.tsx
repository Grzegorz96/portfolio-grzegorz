import { MotionH2, MotionDiv } from "@/components/motion";
import { Elipse } from "./elipse";
import { Heading } from "./heading";
import { SubHeading } from "./sub-heading";
import { Info } from "./info";
import { Form } from "./form";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16 border-1 border-purple-500"
    >
      {/* Background glow effect */}
      <div className="w-[150px] h-[150px] absolute top-[100px] left-[15%] origin-center rotate-45 bg-primary/8 blur-[50px] z-0" />
      <div className="w-[100px] h-[100px] absolute bottom-[100px] right-[20%] origin-center -rotate-30 bg-primary/6 blur-[40px] z-0" />
      <div className="w-[80px] h-[80px] absolute top-[300px] left-[25%] origin-center rotate-15 bg-primary/5 blur-[30px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-[540px] mb-16">
          <MotionH2
            className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10 pb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("heading")}
          </MotionH2>

          <MotionDiv
            className="mt-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("subHeading")}
            </p>
          </MotionDiv>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
          <Form formLabels={t.raw("form")} />
          <Info heading={t("info.heading")} subHeading={t("info.subHeading")} />
        </div>
      </div>
    </section>
  );
}
