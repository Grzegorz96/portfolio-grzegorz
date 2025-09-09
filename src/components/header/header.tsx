import { Navigation } from "./navigation";
import { SettingsTrigger, SettingsContent } from "./settings";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="fixed bottom-0 sm:bottom-auto sm:top-0 left-1/2 -translate-x-1/2 z-50 my-6 flex items-center gap-4 bg-background/5 border border-border/50 backdrop-blur-xl py-1 px-1 rounded-full shadow-lg shadow-black/5 dark:shadow-black/20">
      <Navigation />

      <DropdownMenu modal={false}>
        <SettingsTrigger />
        <SettingsContent />
      </DropdownMenu>
    </header>
  );
}
