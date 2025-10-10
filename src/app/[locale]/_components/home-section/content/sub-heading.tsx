import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export function SubHeading({
  subHeading,
  subHeadingWords,
}: {
  subHeading: string;
  subHeadingWords: string[];
}) {
  return (
    <p className="text-lg md:text-xl text-accent font-medium leading-relaxed">
      <span className="mr-2">{subHeading}</span>
      <ContainerTextFlip
        words={subHeadingWords}
        className="text-lg md:text-xl text-accent font-medium"
        textClassName="text-lg md:text-xl text-accent font-medium"
        interval={3000}
        animationDuration={800}
      />
    </p>
  );
}
