interface StatCounterProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix: string;
}

export function StatCounter({ icon, value, label, suffix }: StatCounterProps) {
  return (
    <div className="group flex flex-col items-center gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:bg-card transition-colors duration-300">
      <div className="w-10 h-10 bg-primary/5 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1 text-center">
        <div className="text-2xl font-bold text-foreground flex items-center justify-center mb-1">
          <span>{value}</span>
          <span>{suffix}</span>
        </div>
        <p className="text-muted-foreground text-xs font-medium">{label}</p>
      </div>
    </div>
  );
}
