import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { MotionDiv } from "@/components/motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  image: string;
  icon: React.ReactNode;
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
        <div className="aspect-video bg-muted rounded-t-lg overflow-hidden relative">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            width={300}
            height={200}
          />
          <div className="absolute top-4 left-4 p-2 rounded-full glass-effect text-accent">
            {project.icon}
          </div>
          <div className="absolute top-4 right-4">
            <Badge
              variant="default"
              className={`${
                project.status === "Ukończony"
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground"
              } ${project.status === "W trakcie" ? "animate-pulse-glow" : ""}`}
            >
              {project.status}
            </Badge>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-foreground">{project.title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {project.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              Kod
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-accent hover:bg-accent/90"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
