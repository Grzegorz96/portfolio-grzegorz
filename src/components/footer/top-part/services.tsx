import { MotionDiv } from "../../motion";

export function Services() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">Usługi</h3>
      <ul className="space-y-2 text-sm">
        {[
          "Rozwój aplikacji webowych",
          "Projektowanie UI/UX",
          "Konsultacje techniczne",
          "Optymalizacja wydajności",
        ].map((service) => (
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
