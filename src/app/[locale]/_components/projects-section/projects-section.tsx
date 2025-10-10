"use client";

import { Heading } from "./heading";
import { TimeLineProgress } from "./timeline-progress";
import { useTimelineScroll } from "./use-timeline-scroll";
import { TimelineContent } from "./timeline-content";
import { useTimelineData } from "./use-timeline-data";

export function ProjectsSection() {
  const { ref, containerRef, height, heightTransform, opacityTransform } =
    useTimelineScroll();

  const timelineData = useTimelineData();

  return (
    <section
      className="border-2 border-red-500 relative py-24 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <Heading />

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <TimelineContent key={index} item={item} />
        ))}

        <TimeLineProgress
          height={height}
          heightTransform={heightTransform}
          opacityTransform={opacityTransform}
        />
      </div>
    </section>
  );
}
