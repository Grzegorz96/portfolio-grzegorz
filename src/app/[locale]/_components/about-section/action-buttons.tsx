import { Button } from "@/components/ui/button";
import { Mail, Github, ArrowRight } from "lucide-react";

interface ActionButtonsProps {
  contact: string;
  github: string;
}

export function ActionButtons({ contact, github }: ActionButtonsProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-6">
      <a
        href="#contact"
        className="group inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm  disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-gradient-to-r from-foreground to-foreground/80 hover:from-foreground/90 hover:to-foreground text-primary-foreground font-semibold px-6 py-3 h-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl"
      >
        <Mail className="w-4 h-4 mr-2" />
        {contact}
        <ArrowRight className="w-3 h-3 ml-2" />
      </a>

      <Button
        variant="outline"
        size="lg"
        className="group border-2 border-foreground/30 text-foreground hover:bg-foreground/5 hover:border-foreground/50 bg-background/50 backdrop-blur-sm font-semibold px-6 py-3 h-12 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl rounded-xl"
      >
        <Github className="w-4 h-4 mr-2" />
        {github}
      </Button>
    </div>
  );
}
