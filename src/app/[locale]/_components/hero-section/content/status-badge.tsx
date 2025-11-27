import { MotionDiv } from "@/components/motion";
import { Circle } from "lucide-react";

export function StatusBadge({ badge }: { badge: string }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/3 border border-foreground/8 mb-8 md:mb-12"
    >
      <Circle className="h-2 w-2 fill-accent" />
      <span className="text-sm text-foreground/60 tracking-wide">{badge}</span>
    </MotionDiv>
  );
}
