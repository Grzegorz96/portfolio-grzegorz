interface CardsProps {
  experience: {
    years: string;
    description: string;
    subDescription: string;
  };
  projects: {
    count: string;
    description: string;
    subDescription: string;
  };
}

export function Cards({ experience, projects }: CardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 w-full sm:gap-4 mx-auto lg:mx-0">
      <div className="group w-full bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden rounded-xl border border-border transition-all duration-500 ease-out cursor-pointer hover:bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/2 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex items-start justify-between px-4 py-3">
          <div>
            <div className="text-lg sm:text-xl font-bold text-foreground transition-colors duration-300 mb-1">
              {experience.years}
            </div>
            <div className="text-xs font-medium text-muted-foreground">
              {experience.description}
            </div>
            <div className="text-xs text-muted-foreground/70">
              {experience.subDescription}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-foreground/10 rounded-full flex items-center justify-center">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-foreground rounded-full animate-pulse" />
            </div>
            <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-foreground to-foreground/60 rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="group w-full bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden rounded-xl border border-border transition-all duration-500 ease-out cursor-pointer hover:bg-card">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex items-start justify-between px-4 py-3">
          <div>
            <div className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
              {projects.count}
            </div>
            <div className="text-xs font-medium text-muted-foreground">
              {projects.description}
            </div>
            <div className="text-xs text-muted-foreground/70">
              {projects.subDescription}
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary/10 rounded-full flex items-center justify-center">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="w-full h-1 bg-muted/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
