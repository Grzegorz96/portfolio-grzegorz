"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  const t = useTranslations("Header.navigation");
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const navItems = [
    { name: t("about"), url: "#about" },
    { name: t("skills"), url: "#skills" },
    { name: t("projects"), url: "#projects" },
    { name: t("faq"), url: "#faq" },
    { name: t("contact"), url: "#contact" },
  ];

  return (
    // <NavigationMenu className="flex items-center gap-4 mx-4">
    <NavigationMenu className="absolute inset-0 m-auto hidden size-fit lg:block">
      <NavigationMenuList className="text-nowrap">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;

          return (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-colors duration-200",
                  "text-muted-foreground hover:text-foreground",
                  isActive && "text-primary"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 40,
                      mass: 0.8,
                    }}
                  >
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -bottom-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -bottom-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm bottom-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
