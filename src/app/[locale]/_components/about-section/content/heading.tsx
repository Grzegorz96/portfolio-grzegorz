export function Heading({ heading }: { heading: string }) {
  return (
    <h1 className="text-4xl md:text-6xl font-semibold text-foreground leading-tight md:leading-[66px]">
      <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
        {heading}
      </span>
    </h1>
  );
}
