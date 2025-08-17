import { MapPin, Phone, Calendar } from "lucide-react";
import { MotionDiv } from "../../motion";

export function Contact() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground">Kontakt</h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Warszawa, Polska</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">+48 123 456 789</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">Dostępny na projekty</span>
        </div>
      </div>
    </MotionDiv>
  );
}
