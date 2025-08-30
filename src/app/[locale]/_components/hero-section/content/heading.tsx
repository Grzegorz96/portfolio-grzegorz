import { MotionDiv } from "@/components/motion";
import { FlipWords } from "@/components/ui/flip-words";

export function Heading({
  heading,
  headingWords,
}: {
  heading: string;
  headingWords: string[];
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-accent to-primary">
          {heading}
        </span>
        <br />
        <FlipWords
          words={headingWords}
          duration={2000}
          className="leading-tight"
        />
      </h1>
    </MotionDiv>
  );
}
