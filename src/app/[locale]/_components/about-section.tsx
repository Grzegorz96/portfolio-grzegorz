import { MotionDiv, MotionH2 } from "@/components/motion";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Github,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <MotionH2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground neon-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          O mnie
        </MotionH2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Jestem pasjonatem programowania z ponad 5-letnim doświadczeniem w
              tworzeniu aplikacji webowych. Specjalizuję się w technologiach
              JavaScript/TypeScript, zarówno po stronie frontend jak i backend.
            </p>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Moje podejście do programowania opiera się na czystym kodzie,
              najlepszych praktykach i ciągłym uczeniu się nowych technologii.
              Lubię wyzwania i rozwiązywanie złożonych problemów technicznych.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Linkedin />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </MotionDiv>
          <MotionDiv
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Code, title: "Frontend", desc: "React, Vue, Angular" },
              {
                icon: Database,
                title: "Backend",
                desc: "Node.js, Python, PHP",
              },
              { icon: Globe, title: "Web", desc: "HTML, CSS, JavaScript" },
              {
                icon: Smartphone,
                title: "Mobile",
                desc: "React Native, Flutter",
              },
            ].map((item, index) => (
              <MotionDiv
                key={item.title}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold mb-1 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
