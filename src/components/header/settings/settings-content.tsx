"use client";

import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Monitor, Languages, Check, Palette } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTheme } from "next-themes";
import { useLocale, Locale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Flag } from "./flag";

export function SettingsContent() {
  const t = useTranslations("Header.settings");
  const { theme, setTheme } = useTheme();
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

  // Theme configuration
  const themeOptions = [
    {
      value: "light" as const,
      icon: Sun,
      iconColor: "text-yellow-500",
      label: t("theme.light"),
    },
    {
      value: "dark" as const,
      icon: Moon,
      iconColor: "text-slate-600",
      label: t("theme.dark"),
    },
    {
      value: "system" as const,
      icon: Monitor,
      iconColor: "text-blue-500",
      label: t("theme.system"),
    },
  ];

  return (
    <DropdownMenuContent
      align="end"
      className="w-56 bg-background/95 border border-border/50 backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/30 z-[9999]"
      sideOffset={15}
      avoidCollisions={true}
    >
      <DropdownMenuLabel className="flex items-center gap-2">
        <Palette className="h-4 w-4" />
        {t("theme.label")}
      </DropdownMenuLabel>
      <DropdownMenuSeparator />
      {themeOptions.map((option) => (
        <DropdownMenuItem
          key={option.value}
          onClick={() => setTheme(option.value)}
          className="cursor-pointer flex items-center justify-between focus:bg-muted/50 hover:bg-muted/50 rounded-md"
        >
          <div className="flex items-center gap-2">
            <option.icon className={`h-4 w-4 ${option.iconColor}`} />
            <span>{option.label}</span>
          </div>
          {theme === option.value && <Check className="h-4 w-4 text-primary" />}
        </DropdownMenuItem>
      ))}

      <DropdownMenuSeparator />

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
