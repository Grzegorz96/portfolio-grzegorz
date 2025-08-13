export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-sm">P</span>
      </div>
      <span className="hidden sm:inline-block text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
        Portfolio
      </span>
    </div>
  );
}
