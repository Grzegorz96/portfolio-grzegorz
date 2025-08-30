import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { ResumeButton } from "./resume-button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Selector */}
            <ThemeToggle />

            {/* Language Selector */}
            <LanguageToggle />

            {/* Resume Button */}
            <ResumeButton />
          </div>

          {/* Mobile Menu */}
        </div>
      </div>
    </header>
  );
}
