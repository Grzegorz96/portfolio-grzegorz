import { MapPin, Phone, Calendar } from "lucide-react";
import { MotionDiv } from "@/components/motion";
import { staggerItemVariants } from "@/lib/animations";

interface ContactProps {
  title: string;
  location: string;
  phone: string;
  available: string;
}

export function Contact({ title, location, phone, available }: ContactProps) {
  return (
    <MotionDiv variants={staggerItemVariants}>
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">{available}</span>
        </div>
      </div>
    </MotionDiv>
  );
}
