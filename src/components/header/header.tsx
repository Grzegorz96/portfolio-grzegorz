import { Navigation } from "./navigation";
import { SettingsTrigger, SettingsContent } from "./settings";
import { DropdownMenu } from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-semibold text-foreground">
              Portfolio
            </span>
          </div>

          {/* Navigation - Center */}
          <Navigation />

          {/* Settings - Right */}
          <DropdownMenu modal={false}>
            <SettingsTrigger />
            <SettingsContent />
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
