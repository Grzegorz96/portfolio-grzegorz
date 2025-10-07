import { MotionDiv } from "@/components/motion";
import { staggerItemVariants } from "@/lib/animations";

interface ServicesProps {
  title: string;
  services: string[];
}

export function Services({ title, services }: ServicesProps) {
  return (
    <MotionDiv variants={staggerItemVariants}>
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <ul className="space-y-2 text-sm">
        {services.map((service) => (
          <li key={service}>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {service}
            </a>
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
}
