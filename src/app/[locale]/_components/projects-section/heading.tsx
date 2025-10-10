import { useTranslations } from "next-intl";

export function Heading() {
  const t = useTranslations("Projects");

  return (
    <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
      <div className="flex flex-col justify-start items-center gap-4">
        <h2 className="w-full max-w-[800px] text-center text-foreground text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
          {t("title")}
        </h2>
        <p className="w-full max-w-[700px] text-center text-muted-foreground text-base md:text-lg font-normal leading-relaxed">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
