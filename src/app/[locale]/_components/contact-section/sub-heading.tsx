import { MotionP } from "@/components/motion";

export function SubHeading({ subHeading }: { subHeading: string }) {
  return (
    <MotionP
      className="text-muted-foreground text-sm md:text-base font-medium leading-[18.20px] md:leading-relaxed break-words max-w-2xl text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {subHeading}
    </MotionP>
  );
}
