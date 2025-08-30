import { MotionP } from "@/components/motion";

export function Description({ description }: { description: string }) {
  return (
    <MotionP
      className="text-lg md:text-xl text-muted-foreground leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
    >
      {description}
    </MotionP>
  );
}
