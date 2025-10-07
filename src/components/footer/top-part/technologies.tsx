import { MotionDiv } from "@/components/motion";
import { staggerItemVariants } from "@/lib/animations";

interface TechnologiesProps {
  title: string;
  technologies: string[];
}

export function Technologies({ title, technologies }: TechnologiesProps) {
  return (
    <MotionDiv variants={staggerItemVariants}>
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
