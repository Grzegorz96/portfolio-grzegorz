import { TopPart } from "./top-part";
import { BottomPart } from "./bottom-part";

export function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-primary/20 relative z-10 mt-20">
      <div className="max-w-6xl mx-auto">
        <TopPart />
        <BottomPart />
      </div>
    </footer>
  );
}
