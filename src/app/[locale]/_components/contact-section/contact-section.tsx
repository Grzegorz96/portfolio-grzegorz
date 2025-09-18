import { MotionH2, MotionDiv } from "@/components/motion";
import { Info } from "./info";
import { Form } from "./form";
import { Elipse } from "./elipse";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section className="w-full pt-20 md:pt-60 lg:pt-60 pb-10 md:pb-20 px-5 relative flex flex-col justify-center items-center overflow-visible">
      <Elipse />
      <div className="relative z-10 flex flex-col justify-start items-center gap-9 max-w-4xl mx-auto">
        <div className="flex flex-col justify-start items-center gap-4 text-center">
          <MotionH2
            className="text-foreground text-4xl md:text-5xl lg:text-[68px] font-semibold leading-tight md:leading-tight lg:leading-[76px] break-words max-w-[435px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("heading")}
          </MotionH2>
          <MotionDiv
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm md:text-base font-medium leading-[18.20px] md:leading-relaxed break-words max-w-2xl">
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
