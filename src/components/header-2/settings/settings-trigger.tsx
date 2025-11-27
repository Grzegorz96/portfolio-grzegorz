import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { X, Languages } from "lucide-react";
import { MotionDiv } from "@/components/motion";

export function SettingsTrigger() {
  return (
    <DropdownMenuTrigger asChild>
      <Button className="relative cursor-pointer size-8 rounded-full bg-background/50 border border-border/30 backdrop-blur-sm lg:flex items-center justify-center transition-all duration-300 hover:bg-background/80 group hidden">
        <MotionDiv
          className="group-data-[state=open]:rotate-180 transition-transform duration-300"
          layout
        >
          <Languages className="size-4 text-foreground group-data-[state=closed]:block group-data-[state=open]:hidden" />
          <X className="size-4 text-foreground group-data-[state=closed]:hidden group-data-[state=open]:block" />
        </MotionDiv>
      </Button>
    </DropdownMenuTrigger>
  );
}
