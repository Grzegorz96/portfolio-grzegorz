import { MotionDiv } from "@/components/motion";
import { Star, CheckCircle } from "lucide-react";

interface TrustIndicatorsProps {
  rating: string;
  successRate: string;
}

export function TrustIndicators({ rating, successRate }: TrustIndicatorsProps) {
  return (
    <MotionDiv
      className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground/70"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center gap-2">
        <Star className="w-4 h-4 text-yellow-500 fill-current" />
        <span>{rating}</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span>{successRate}</span>
      </div>
    </MotionDiv>
  );
}
