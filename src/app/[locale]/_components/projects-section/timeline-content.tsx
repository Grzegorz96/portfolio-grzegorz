import { type TimelineItem } from "./use-timeline-data";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export function TimelineContent({ item }: { item: TimelineItem }) {
  return (
    <div className="flex justify-start pt-10 md:pt-40 md:gap-10">
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center border border-border">
          <div className="h-4 w-4 rounded-full bg-primary/20 border border-primary/30 p-2" />
        </div>
        <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-muted-foreground">
          {item.title}
        </h3>
      </div>

      <div className="relative pl-20 pr-4 md:pl-4 w-full">
        <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-muted-foreground">
          {item.title}
        </h3>
        <div>
          <p className="mb-8 text-xs font-normal text-muted-foreground md:text-sm">
            {item.description}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {item.images?.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center text-muted-foreground text-sm overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="group border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 bg-background/50 backdrop-blur-sm font-semibold px-6 py-3 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl rounded-xl"
          >
            <span className="mr-2">{item.buttonText || "Zobacz więcej"}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </div>
  );
}
