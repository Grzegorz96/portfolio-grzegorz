"use client";

import {
  User,
  Code,
  Briefcase,
  HelpCircle,
  Mail,
  Sun,
  Languages,
  Moon,
  Monitor,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useLocale, Locale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { Flag } from "./settings/flag";

export function MobileHeader() {
  const t = useTranslations("Header");
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function onLanguageChange(nextLocale: Locale) {
    startTransition(() => {
      const query = Object.fromEntries(searchParams.entries());
      // @ts-expect-error -- from next-intl : TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      router.replace({ pathname, params, query }, { locale: nextLocale });
    });
  }

  const themeOptions = [
    {
      value: "light" as const,
      icon: Sun,
      iconColor: "text-yellow-500",
      label: t("settings.theme.light"),
    },
    {
      value: "dark" as const,
      icon: Moon,
      iconColor: "text-slate-600",
      label: t("settings.theme.dark"),
    },
    {
      value: "system" as const,
      icon: Monitor,
      iconColor: "text-blue-500",
      label: t("settings.theme.system"),
    },
  ];

  const handleMobileNavClick = (elementId: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 120; // Account for sticky header height + margin
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-40 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-2">
        <a className="flex items-center justify-center gap-2" href="#home">
          <svg
            fill="currentColor"
            viewBox="0 0 147 70"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-foreground rounded-full size-7 w-7"
          >
            <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
            <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z"></path>
          </svg>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-24 left-4 right-4 max-h-[calc(100vh-8rem)] bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6 overflow-y-auto scrollbar-hide overscroll-contain">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("about")}
                className="flex items-center gap-3 text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                <User size={20} strokeWidth={2.5} />
                {t("navigation.about")}
              </button>
              <button
                onClick={() => handleMobileNavClick("skills")}
                className="flex items-center gap-3 text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                <Code size={20} strokeWidth={2.5} />
                {t("navigation.skills")}
              </button>
              <button
                onClick={() => handleMobileNavClick("projects")}
                className="flex items-center gap-3 text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                <Briefcase size={20} strokeWidth={2.5} />
                {t("navigation.projects")}
              </button>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="flex items-center gap-3 text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                <HelpCircle size={20} strokeWidth={2.5} />
                {t("navigation.faq")}
              </button>
              <button
                onClick={() => handleMobileNavClick("contact")}
                className="flex items-center gap-3 text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                <Mail size={20} strokeWidth={2.5} />
                {t("navigation.contact")}
              </button>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-4">
                {/* Theme Section */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground">
                    <Sun className="h-4 w-4" />
                    {t("settings.theme.label")}
                  </div>
                  {themeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setTheme(option.value)}
                      className="flex items-center justify-between px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                    >
                      <div className="flex items-center gap-3">
                        <option.icon
                          className={`h-5 w-5 ${option.iconColor}`}
                        />
                        <span>{option.label}</span>
                      </div>
                      {theme === option.value && (
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Language Section */}
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground">
                    <Languages className="h-4 w-4" />
                    {t("settings.language.label")}
                  </div>
                  {routing.locales.map((localeCode) => (
                    <button
                      key={localeCode}
                      onClick={() => onLanguageChange(localeCode)}
                      disabled={isPending}
                      className="flex items-center justify-between px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="flex items-center gap-3">
                        <Flag
                          locale={localeCode}
                          className="w-6 h-4 rounded-sm"
                        />
                        <span>
                          {t("settings.language.locale", {
                            locale: localeCode,
                          })}
                        </span>
                      </div>
                      {locale === localeCode && (
                        <div className="w-2 h-2 bg-primary rounded-full" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
