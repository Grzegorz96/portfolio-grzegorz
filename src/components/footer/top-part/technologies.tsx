import { MotionDiv } from "@/components/motion";

interface TechnologiesProps {
  title: string;
  technologies: string[];
}

export function Technologies({ title, technologies }: TechnologiesProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm">
        {technologies.map((tech) => (
          <li key={tech}>
            <a
              href="#"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              {tech}
            </a>
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
}
