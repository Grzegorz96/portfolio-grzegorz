import { MotionP } from "@/components/motion";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export function SubHeading({
  subHeading,
  subHeadingWords,
}: {
  subHeading: string;
  subHeadingWords: string[];
}) {
  return (
    <MotionP
      className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold leading-tight"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <span className="mr-2">{subHeading}</span>
      <ContainerTextFlip
        words={subHeadingWords}
        className="text-xl md:text-2xl lg:text-3xl text-accent font-semibold"
        textClassName="text-xl md:text-2xl lg:text-3xl text-accent font-semibold"
        interval={3000}
        animationDuration={800}
      />
    </MotionP>
  );
}
