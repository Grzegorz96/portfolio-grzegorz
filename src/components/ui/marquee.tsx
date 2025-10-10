interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
}

export function Marquee({ children, speed = 30 }: MarqueeProps) {
  return (
    <div className="overflow-hidden py-12 relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16 border-2 border-blue-500">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <div
          className="flex w-max min-w-full shrink-0 flex-nowrap gap-8 py-4 animate-marquee"
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}
