export function BackgroundElements() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Small animated particles */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-foreground/6 via-foreground/3 to-transparent rounded-full blur-3xl animate-float-slow opacity-60" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-primary/6 via-primary/3 to-transparent rounded-full blur-3xl animate-float-reverse opacity-60"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-56 h-56 bg-gradient-to-r from-foreground/4 to-primary/3 rounded-full blur-2xl animate-pulse-slow opacity-50"
        style={{ animationDelay: "6s" }}
      />
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-foreground/30 rounded-full animate-pulse" />
      <div
        className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/35 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-foreground/40 rounded-full animate-pulse"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/6 right-1/4 w-0.5 h-0.5 bg-primary/50 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/6 right-1/6 w-0.5 h-0.5 bg-foreground/45 rounded-full animate-pulse"
        style={{ animationDelay: "5s" }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[size:60px_60px] bg-[linear-gradient(color-mix(in_oklch,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(90deg,color-mix(in_oklch,var(--foreground)_6%,transparent)_1px,transparent_1px))] [mask-image:linear-gradient(to_bottom,transparent,color-mix(in_oklch,var(--foreground)_20%,transparent),color-mix(in_oklch,var(--foreground)_80%,transparent),transparent)]" />

      {/* Light Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/6 to-transparent opacity-30 animate-pulse-slow" />
    </div>
  );
}
