"use client";

import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Languages, Check } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, Locale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Flag } from "./flag";

export function SettingsContent() {
  const t = useTranslations("Header.settings");
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  function onLanguageChange(nextLocale: Locale) {
    startTransition(() => {
      const query = Object.fromEntries(searchParams.entries());

      // @ts-expect-error -- from next-intl : TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params, query }, { locale: nextLocale });
    });
  }

  return (
    <DropdownMenuContent
      align="end"
      className="w-56 bg-background/95 border border-border/50 backdrop-blur-xl shadow-xl shadow-black/10 z-[9999]"
      sideOffset={15}
      avoidCollisions={true}
    >
      <DropdownMenuLabel className="flex items-center gap-2">
        <Languages className="h-4 w-4" />
        {t("language.label")}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {routing.locales.map((localeCode) => (
        <DropdownMenuItem
          key={localeCode}
          onClick={() => onLanguageChange(localeCode)}
          disabled={isPending}
          className="cursor-pointer flex items-center justify-between focus:bg-muted/50 hover:bg-muted/50 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center gap-2">
            <Flag locale={localeCode} className="w-6 h-4 rounded-sm" />
            <span>{t("language.locale", { locale: localeCode })}</span>
          </div>
          {locale === localeCode && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
}
