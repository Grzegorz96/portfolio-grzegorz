import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ResumeButton() {
  const t = useTranslations("Header.actions.resume");

  return (
    <Button size="sm" className="hidden lg:inline-flex">
      {t("label")}
    </Button>
  );
}
