import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  X,
  Sun,
  Moon,
  Monitor,
  Languages,
  Check,
  Palette,
  Settings as SettingsIcon,
} from "lucide-react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTheme } from "next-themes";
import { useLocale, Locale, useTranslations } from "next-intl";
import { useParams, useSearchParams } from "next/navigation";
import { useTransition, useState } from "react";
import { Flag } from "./flag";

export function Settings() {
  const t = useTranslations("Header.settings");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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

  return (
    <div className="ml-4">
      <DropdownMenu onOpenChange={setIsSettingsOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <motion.button
            className={cn(
              "relative cursor-pointer w-10 h-10 rounded-full bg-background/50 border border-border/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-background/80"
            )}
          >
            <motion.div
              animate={{ rotate: isSettingsOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isSettingsOpen ? (
                <X className="h-4 w-4 text-foreground" />
              ) : (
                <SettingsIcon className="h-4 w-4 text-foreground" />
              )}
            </motion.div>
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 bg-background/95 border border-border/50 backdrop-blur-xl shadow-xl shadow-black/10 dark:shadow-black/30"
          sideOffset={8}
          avoidCollisions={true}
        >
          <DropdownMenuLabel className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            {t("theme.label")}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className="cursor-pointer flex items-center justify-between focus:bg-accent/50 hover:bg-accent/50 transition-colors duration-200 rounded-md"
          >
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-yellow-500" />
              <span>{t("theme.light")}</span>
            </div>
            {theme === "light" && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className="cursor-pointer flex items-center justify-between focus:bg-accent/50 hover:bg-accent/50 transition-colors duration-200 rounded-md"
          >
            <div className="flex items-center gap-2">
              <Moon className="h-4 w-4 text-slate-600" />
              <span>{t("theme.dark")}</span>
            </div>
            {theme === "dark" && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className="cursor-pointer flex items-center justify-between focus:bg-accent/50 hover:bg-accent/50 transition-colors duration-200 rounded-md"
          >
            <div className="flex items-center gap-2">
              <Monitor className="h-4 w-4 text-blue-500" />
              <span>{t("theme.system")}</span>
            </div>
            {theme === "system" && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>

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
              className="cursor-pointer flex items-center justify-between focus:bg-accent/50 hover:bg-accent/50 transition-colors duration-200 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex items-center gap-2">
                <Flag locale={localeCode} className="w-6 h-4 rounded-sm" />
                <span>{t("language.locale", { locale: localeCode })}</span>
              </div>
              {locale === localeCode && (
                <Check className="h-4 w-4 text-primary" />
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
