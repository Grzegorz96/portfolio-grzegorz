import { Info } from "./info";
import { Form } from "./form";
import { Elipse } from "./elipse";
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section className="w-full pt-40 md:pt-50 lg:pt-60 pb-10 md:pb-20 px-5 relative flex flex-col justify-center items-center overflow-visible">
      <Elipse />
      <div className="relative z-10 flex flex-col justify-start items-center gap-9 max-w-5xl mx-auto">
        <div className="flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-[68px] font-semibold leading-tight md:leading-tight lg:leading-[76px] break-words">
            {t("heading")}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base font-medium leading-[18.20px] md:leading-relaxed break-words max-w-2xl">
            {t("subHeading")}
          </p>
        </div>
        {/* Contact Content */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 w-full mx-auto items-start">
          <Form formLabels={t.raw("form")} />
          <Info heading={t("info.heading")} subHeading={t("info.subHeading")} />
        </div>
      </div>
    </section>
  );
}
