import Next from "next/image";

export function Photo() {
  return (
    <div className="order-1 lg:order-2 flex items-center justify-center relative">
      <div className="relative group">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/15 to-primary/15 rounded-3xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-500" />

        {/* Main Image */}
        <div className="relative">
          <Next
            src="/portret.png"
            alt="Grzegorz Strzeszewski"
            className="w-72 h-[28rem] md:w-80 md:h-[30rem] lg:w-96 lg:h-[32rem] min-w-[280px] rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 hover:scale-105 object-cover border-2 border-foreground/20"
            width={320}
            height={512}
            priority
          />

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-foreground/60 rounded-full animate-pulse" />
          <div
            className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Hover Glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Floating Particles Around Image */}
        <div className="absolute -top-8 -left-8 w-2 h-2 bg-foreground/60 rounded-full animate-pulse" />
        <div
          className="absolute -top-6 right-8 w-1.5 h-1.5 bg-primary/70 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-8 -right-4 w-1 h-1 bg-foreground/80 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
      </div>
    </div>
  );
}
