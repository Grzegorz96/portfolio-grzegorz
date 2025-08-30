import { MotionDiv } from "../../motion";

interface ServicesProps {
  title: string;
  services: string[];
}

export function Services({ title, services }: ServicesProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
    >
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
