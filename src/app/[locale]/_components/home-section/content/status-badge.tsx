import { Sparkles } from "lucide-react";

export function StatusBadge({ badge }: { badge: string }) {
  return (
    <div className="w-full flex justify-center lg:justify-start">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm shadow-lg">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        <span className="font-semibold">{badge}</span>
        <Sparkles className="w-4 h-4 text-accent" />
      </div>
    </div>
  );
}
