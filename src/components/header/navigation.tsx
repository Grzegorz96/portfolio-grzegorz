import { useTranslations } from "next-intl";

export function Navigation() {
  const t = useTranslations("Header.navigation");

  const navItems = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#faq", label: t("faq") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navItems.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
