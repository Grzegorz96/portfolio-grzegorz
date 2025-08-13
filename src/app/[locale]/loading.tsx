export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted">
      <div className="relative">
        {/* Główny spinner */}
        <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-primary rounded-full animate-ping"></div>
        </div>

        {/* Pulsujące kropki */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-1">
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

        {/* Tekst ładowania */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-sm text-muted-foreground font-medium">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
}
