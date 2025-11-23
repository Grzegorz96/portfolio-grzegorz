"use client";

import { Navigation } from "./navigation";
import { SettingsTrigger, SettingsContent } from "./settings";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MobileHeader } from "./mobile-header";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 mx-auto top-20 z-[9999] hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 py-2",

          isScrolled
            ? "md:max-w-4xl xl:max-w-5xl px-2"
            : "md:max-w-5xl xl:max-w-6xl px-4"
        )}
      >
        <a className="z-50 flex items-center justify-center gap-2" href="#home">
          <svg
            fill="currentColor"
            viewBox="0 0 147 70"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="text-foreground rounded-full size-8 w-8"
          >
            <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z"></path>
            <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z"></path>
          </svg>
        </a>

        {/* Navigation - Center */}
        <Navigation />

        {/* Settings - Right */}
        <DropdownMenu modal={false}>
          <SettingsTrigger />
          <SettingsContent />
        </DropdownMenu>
      </header>
      <MobileHeader />
    </>
  );
}
