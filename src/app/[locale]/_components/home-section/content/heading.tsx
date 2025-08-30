import { MotionH1 } from "@/components/motion";

export function Heading({ heading }: { heading: string }) {
  return (
    <MotionH1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.9] tracking-tight"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
        {heading}
      </span>
    </MotionH1>
  );
}
