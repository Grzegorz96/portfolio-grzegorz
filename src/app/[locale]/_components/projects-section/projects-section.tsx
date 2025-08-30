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
      id="projects"
      className="relative min-h-screen scroll-mt-16 border-1 border-green-500"
      ref={containerRef}
    >
      <Heading />

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {timelineData.map((item, index) => (
          <TimelineContent key={index} item={item} index={index} />
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
