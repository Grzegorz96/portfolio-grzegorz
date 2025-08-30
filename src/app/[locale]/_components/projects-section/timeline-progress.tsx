import { MotionValue } from "motion/react";
import { MotionDiv } from "@/components/motion";

interface TimeLineProgressProps {
  height: number;
  heightTransform: MotionValue<number>;
  opacityTransform: MotionValue<number>;
}

export function TimeLineProgress({
  height,
  heightTransform,
  opacityTransform,
}: TimeLineProgressProps) {
  return (
    <div
      style={{
        height: height + "px",
      }}
      className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-border to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
      // className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
    >
      <MotionDiv
        style={{
          height: heightTransform,
          opacity: opacityTransform,
        }}
        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-primary via-accent to-transparent rounded-full shadow-lg"
      />
    </div>
  );
}
