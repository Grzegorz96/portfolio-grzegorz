import { MotionDiv } from "@/components/motion";

export function ScrollIndicator({ scrollDown }: { scrollDown: string }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-muted-foreground/60 font-medium">
          {scrollDown}
        </div>
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-foreground/50 to-transparent origin-center" />
    </MotionDiv>
  );
}
