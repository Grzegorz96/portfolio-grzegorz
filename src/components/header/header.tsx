import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { CTAButton } from "./cta-button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("Header");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Selector */}
            <ThemeToggle />
            <LanguageToggle />
            {/* CTA Button */}
            <CTAButton />
          </div>

          {/* Mobile Menu */}
        </div>
      </div>
    </header>
  );
}
