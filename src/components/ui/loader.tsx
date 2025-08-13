import { cn } from "@/lib/utils";
import { Loader2, Sparkles } from "lucide-react";

interface LoaderProps {
  variant?: "default" | "spinner" | "dots" | "pulse" | "fancy";
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

export function Loader({
  variant = "default",
  size = "md",
  className,
  text = "Loading...",
}: LoaderProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  if (variant === "spinner") {
    return (
      <div className={cn("flex flex-col items-center space-y-4", className)}>
        <div
          className={cn(
            "border-4 border-primary/20 rounded-full animate-spin",
            sizeClasses[size]
          )}
        >
          <div className="w-full h-full border-4 border-transparent border-t-primary rounded-full animate-ping"></div>
        </div>
        {text && (
          <p
            className={cn("text-muted-foreground font-medium", textSizes[size])}
          >
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === "dots") {
    return (
      <div className={cn("flex flex-col items-center space-y-4", className)}>
        <div className="flex space-x-1">
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>
        {text && (
          <p
            className={cn("text-muted-foreground font-medium", textSizes[size])}
          >
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("flex flex-col items-center space-y-4", className)}>
        <div
          className={cn(
            "bg-primary rounded-full animate-pulse",
            sizeClasses[size]
          )}
        ></div>
        {text && (
          <p
            className={cn("text-muted-foreground font-medium", textSizes[size])}
          >
            {text}
          </p>
        )}
      </div>
    );
  }

  if (variant === "fancy") {
    return (
      <div className={cn("flex flex-col items-center space-y-4", className)}>
        <div className="relative">
          {/* Główny okrąg */}
          <div
            className={cn(
              "border-4 border-primary/20 rounded-full animate-spin",
              sizeClasses[size]
            )}
          >
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-ping"></div>
          </div>

          {/* Wirujące iskry */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>

          {/* Pulsujące kropki naokoło */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-ping"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${
                    i * 45
                  }deg) translateY(-24px)`,
                  animationDelay: `${i * 100}ms`,
                }}
              />
            ))}
          </div>
        </div>
        {text && (
          <p
            className={cn("text-muted-foreground font-medium", textSizes[size])}
          >
            {text}
          </p>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      <Loader2 className={cn("animate-spin text-primary", sizeClasses[size])} />
      {text && (
        <p className={cn("text-muted-foreground font-medium", textSizes[size])}>
          {text}
        </p>
      )}
    </div>
  );
}
