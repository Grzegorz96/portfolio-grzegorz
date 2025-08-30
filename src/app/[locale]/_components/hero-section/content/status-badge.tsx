import { MotionDiv } from "@/components/motion";
import { Circle } from "lucide-react";

export function StatusBadge({ badge }: { badge: string }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
    >
      <Circle className="h-2 w-2 fill-rose-500/80" />
      <span className="text-sm text-white/60 tracking-wide">{badge}</span>
    </MotionDiv>
  );
}
