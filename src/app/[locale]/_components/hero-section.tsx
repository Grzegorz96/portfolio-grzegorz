import { MotionDiv, MotionH1, MotionP } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Mail, Github } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative z-20 overflow-hidden flex items-center"
    >
      {/* Tło z gradientem */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-20">
          {/* Lewa strona - Tekst */}
          <div className="text-center lg:text-left order-2 lg:order-1 max-w-3xl lg:max-w-2xl">
            <MotionDiv
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Dostępny do nowych projektów
              </div>
            </MotionDiv>

            <MotionH1
              className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Grzegorz Strzeszewski
              </span>
            </MotionH1>
            <MotionP
              className="text-2xl md:text-3xl text-accent font-semibold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Fullstack Developer & UI/UX Enthusiast
            </MotionP>
            <MotionP
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Tworzę nowoczesne aplikacje webowe wykorzystując najnowsze
              technologie. Specjalizuję się w React, Node.js i bazach danych z
              futurystycznym podejściem do UX/UI.
            </MotionP>
            <MotionDiv
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5 mr-3" />
                Skontaktuj się
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-semibold px-8 py-3 h-12 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Github className="w-5 h-5 mr-3" />
                GitHub
              </Button>
            </MotionDiv>

            {/* Dodatkowe informacje */}
            <MotionDiv
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>5+ lat doświadczenia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>50+ ukończonych projektów</span>
              </div>
            </MotionDiv>
          </div>

          {/* Prawa strona - Zdjęcie */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <MotionDiv
              initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="relative"
            >
              {/* Tło za zdjęciem */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl scale-110" />

              <div className="relative">
                <Image
                  src="/portret.png"
                  alt="Grzegorz Strzeszewski"
                  className="w-56 h-80 md:w-64 md:h-96 rounded-2xl shadow-2xl animate-float transition-all duration-500 hover:scale-105 hover:rotate-1 object-cover overflow-hidden border-4 border-white/20 backdrop-blur-sm"
                  width={256}
                  height={384}
                />

                {/* Dekoracyjne elementy */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse" />
                <div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
