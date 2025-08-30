import { Button } from "@/components/ui/button";
import { Mail, Github, ArrowRight } from "lucide-react";
import { MotionDiv } from "@/components/motion";

interface ActionButtonsProps {
  contact: string;
  github: string;
}

export function ActionButtons({ contact, github }: ActionButtonsProps) {
  return (
    <MotionDiv
      className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 mt-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      viewport={{ once: true }}
    >
      <Button
        size="lg"
        className="group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-6 py-3 h-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl"
      >
        <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        {contact}
        <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="group border-2 border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 bg-background/50 backdrop-blur-sm font-semibold px-6 py-3 h-12 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl rounded-xl"
      >
        <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        {github}
      </Button>
    </MotionDiv>
  );
}
