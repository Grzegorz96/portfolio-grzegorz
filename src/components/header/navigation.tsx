import { useTranslations } from "next-intl";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

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
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="space-x-8">
        {navItems.map(({ href, label }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-accent/50 hover:shadow-sm rounded-md px-3 py-2"
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
