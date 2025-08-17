import { MotionDiv } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  status: string;
  technologies: string[];
}

export function ProjectEvent({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative flex items-center mb-16 ${
          index % 2 === 0 ? "justify-start" : "justify-end"
        }`}
      >
        <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
          <div
            className={`w-6 h-6 rounded-full border-4 border-background ${
              event.status === "current"
                ? "bg-accent animate-pulse-glow"
                : "bg-primary"
            } shadow-lg`}
          ></div>
          <div
            className={`absolute inset-0 w-6 h-6 rounded-full ${
              event.status === "current"
                ? "bg-accent animate-ping opacity-20"
                : "bg-primary opacity-20"
            }`}
          ></div>
        </div>

        <div
          className={`w-5/12 ${
            index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
          }`}
        >
          <Card
            className={`glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 ${
              event.status === "current" ? "border-accent/40" : ""
            }`}
          >
            <CardContent className="p-4">
              <div
                className={`flex items-center gap-2 mb-2 ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                <div className="p-1.5 rounded-full glass-effect text-accent">
                  <Calendar className="h-3 w-3" />
                </div>
                <span className="text-base font-bold text-accent">
                  {event.date}
                </span>
              </div>
              <h4 className="font-semibold text-lg mb-2 text-foreground">
                {event.title}
              </h4>
              <p className="text-muted-foreground text-xs mb-3 leading-relaxed">
                {event.description}
              </p>

              <div
                className={`flex flex-wrap gap-1 ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                }`}
              >
                {event.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="text-xs bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div
          className={`absolute top-1/2 h-0.5 ${
            index % 2 === 0
              ? "left-1/2 ml-3 w-12 bg-gradient-to-r from-accent to-transparent"
              : "right-1/2 mr-3 w-12 bg-gradient-to-l from-accent to-transparent"
          } opacity-60`}
        />
      </div>
    </MotionDiv>
  );
}
