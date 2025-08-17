import { Logo } from "./logo";
import { Navigation } from "./navigation";
import { ResumeButton } from "./resume-button";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Selector */}
            <ThemeToggle />

            {/* Language Selector */}
            <LanguageToggle />

            {/* Resume Button */}
            <ResumeButton />
          </div>

          {/* Mobile Menu */}
        </div>
      </div>
    </header>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { Logo } from "./logo";
// import { Navigation } from "./navigation";
// import { ResumeButton } from "./resume-button";
// import { ThemeToggle } from "./theme-toggle";
// import { LanguageToggle } from "./language-toggle";

// export function Header() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Pokazuj header przy scrollowaniu w górę, ukrywaj przy scrollowaniu w dół
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsVisible(false); // Ukryj header
//       } else {
//         setIsVisible(true); // Pokaż header
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <header
//       className={`fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ${
//         isVisible ? "translate-y-0" : "-translate-y-full"
//       }`}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <Logo />

//           {/* Desktop Navigation */}
//           <Navigation />

//           {/* Desktop Controls */}
//           <div className="hidden md:flex items-center space-x-4">
//             {/* Theme Selector */}
//             <ThemeToggle />

//             {/* Language Selector */}
//             <LanguageToggle />

//             {/* Resume Button */}
//             <ResumeButton />
//           </div>

//           {/* Mobile Menu */}
//         </div>
//       </div>
//     </header>
//   );
// }
