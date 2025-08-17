export function BottomPart() {
  return (
    <div className="border-t border-primary/20 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © 2024 Jan Kowalski. Wszystkie prawa zastrzeżone.
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Polityka prywatności
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Warunki użytkowania
          </a>
        </div>
      </div>
    </div>
  );
}
