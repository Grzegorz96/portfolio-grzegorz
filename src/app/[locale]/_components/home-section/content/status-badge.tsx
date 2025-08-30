import { MotionDiv } from "@/components/motion/motion-div";
import { Sparkles } from "lucide-react";

export function StatusBadge({ badge }: { badge: string }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm shadow-lg">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="font-semibold">{badge}</span>
        <Sparkles className="w-4 h-4 text-accent" />
      </div>
    </MotionDiv>
  );
}
