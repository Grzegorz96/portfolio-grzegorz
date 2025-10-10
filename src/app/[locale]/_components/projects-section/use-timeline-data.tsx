import { useTranslations } from "next-intl";

export interface TimelineItem {
  title: string;
  description: string;
  images?: Array<{
    src: string;
    alt: string;
  }>;
  buttonText?: string;
  buttonLink?: string;
}

export function useTimelineData() {
  const t = useTranslations("Projects");

  return [
    {
      title: "2025",
      description:
        "Advanced full-stack applications with modern technologies. Built complex 3D applications, weather services, and microservices architecture with real-time features.",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "TimeVoyager - 3D Virtual Museum",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Meteofy - Weather Service",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Innowise - Microservices App",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Advanced Backend Systems",
        },
      ],
      buttonText: "Zobacz projekty 2025",
      buttonLink: "/projects/2025",
    },
    {
      title: "2024",
      description:
        "Full-stack development focusing on classifieds platforms and quiz applications. Built desktop and web applications with Python, Flask, and modern frontend technologies.",
      images: [
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Shoper - Classifieds Service",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Millionaire - Quiz Application",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Python Desktop Apps",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Flask Backend Systems",
        },
      ],
      buttonText: "Zobacz projekty 2024",
      buttonLink: "/projects/2024",
    },
    {
      title: "2023",
      description:
        "Early projects including weather applications and game development. Started with JavaScript, HTML, CSS and began exploring React ecosystem.",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Saper Game" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Weather App" },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "JavaScript Projects",
        },
        {
          src: "/placeholder.svg?height=300&width=400",
          alt: "Learning Projects",
        },
      ],
      buttonText: "Zobacz projekty 2023",
      buttonLink: "/projects/2023",
    },
  ];
}
