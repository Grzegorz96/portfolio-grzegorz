export function Content({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center">{children}</div>
    </div>
  );
}
