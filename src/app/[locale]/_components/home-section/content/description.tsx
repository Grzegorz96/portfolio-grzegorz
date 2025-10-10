export function Description({ description }: { description: string }) {
  return (
    <p className="text-base md:text-lg text-muted-foreground font-normal leading-relaxed">
      {description}
    </p>
  );
}
