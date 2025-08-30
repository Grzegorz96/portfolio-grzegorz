import { MotionDiv } from "@/components/motion";

export function Description({ description }: { description: string }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
        {description}
      </p>
    </MotionDiv>
  );
}
