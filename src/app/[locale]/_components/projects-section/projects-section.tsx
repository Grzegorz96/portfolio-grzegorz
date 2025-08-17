import { MotionH2, MotionDiv, MotionH3 } from "@/components/motion";
import { Zap, Code, Database, Cpu } from "lucide-react";

import { ProjectCard } from "./project-card";
import { ProjectEvent } from "./project-event";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Pełna platforma e-commerce z systemem płatności, zarządzaniem produktami i panelem administracyjnym.",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      date: "2024",
      status: "Ukończony",
      image: "/placeholder.svg?height=200&width=300",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Task Management App",
      description:
        "Aplikacja do zarządzania zadaniami z funkcjami współpracy zespołowej i raportowaniem.",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
      date: "2023",
      status: "Ukończony",
      image: "/placeholder.svg?height=200&width=300",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Real-time Chat App",
      description:
        "Aplikacja czatu w czasie rzeczywistym z obsługą pokoi, plików i powiadomień.",
      technologies: ["Vue.js", "Node.js", "Redis", "WebSocket"],
      date: "2023",
      status: "Ukończony",
      image: "/placeholder.svg?height=200&width=300",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dashboard analityczny z wizualizacją danych, raportami i eksportem do różnych formatów.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      date: "2024",
      status: "W trakcie",
      image: "/placeholder.svg?height=200&width=300",
      icon: <Cpu className="h-6 w-6" />,
    },
  ];

  const timelineEvents = [
    {
      date: "2024",
      title: "Analytics Dashboard",
      description:
        "Rozpoczęcie pracy nad zaawansowanym dashboardem analitycznym z AI-powered insights",
      status: "current",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
    },
    {
      date: "2024",
      title: "E-commerce Platform",
      description:
        "Ukończenie pełnej platformy e-commerce dla klienta z branży fashion z mikrousługami",
      status: "completed",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    },
    {
      date: "2023",
      title: "Task Management App",
      description:
        "Stworzenie aplikacji do zarządzania projektami dla zespołu 50+ osób z real-time collaboration",
      status: "completed",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    },
    {
      date: "2023",
      title: "Real-time Chat App",
      description:
        "Implementacja systemu komunikacji dla platformy edukacyjnej z end-to-end encryption",
      status: "completed",
      technologies: ["Vue.js", "Node.js", "Redis", "WebSocket"],
    },
    {
      date: "2022",
      title: "Rozpoczęcie freelancingu",
      description:
        "Pierwsze komercyjne projekty jako fullstack developer - focus na modern web technologies",
      status: "completed",
      technologies: ["JavaScript", "React", "Node.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/70 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/70 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionH2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground neon-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Moje projekty
          </MotionH2>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <MotionH3
              className="font-playfair text-3xl font-bold text-center mb-12 holographic-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Timeline projektów
            </MotionH3>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-primary to-accent opacity-60 rounded-full"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-accent via-primary to-accent animate-pulse-glow rounded-full"></div>

              {timelineEvents.map((event, index) => (
                <ProjectEvent key={index} event={event} index={index} />
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
