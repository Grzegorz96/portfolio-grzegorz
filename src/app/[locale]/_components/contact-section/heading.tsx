import { MotionH2 } from "@/components/motion";

export function Heading({ heading }: { heading: string }) {
  return (
    <MotionH2
      className="text-4xl md:text-5xl lg:text-[68px] font-semibold leading-tight md:leading-tight lg:leading-[76px] break-words max-w-[600px] text-center text-foreground neon-text"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {heading}
    </MotionH2>
  );
}
