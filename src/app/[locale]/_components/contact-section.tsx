import { MotionH2, MotionDiv } from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 relative z-10scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto">
        <MotionH2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground neon-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Kontakt
        </MotionH2>
        <div className="grid md:grid-cols-2 gap-12">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6 text-foreground">
              Skontaktuj się ze mną
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Szukasz programisty do swojego projektu? Masz pytania o
              współpracę? Napisz do mnie - odpowiem w ciągu 24 godzin.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "jan.kowalski@example.com" },
                { icon: Linkedin, text: "linkedin.com/in/jankowalski" },
                { icon: Github, text: "github.com/jankowalski" },
              ].map((contact) => (
                <MotionDiv
                  key={contact.text}
                  className="flex items-center gap-3 group cursor-pointer"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <contact.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  <span className="text-foreground group-hover:text-accent transition-colors">
                    {contact.text}
                  </span>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-effect border-primary/20">
              <CardHeader>
                <CardTitle className="text-foreground">
                  Wyślij wiadomość
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Imię
                  </label>
                  <Input
                    id="name"
                    placeholder="Twoje imię"
                    className="glass-effect border-primary/30 focus:border-primary"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="twoj@email.com"
                    className="glass-effect border-primary/30 focus:border-primary"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-foreground"
                  >
                    Wiadomość
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Opisz swój projekt..."
                    rows={4}
                    className="glass-effect border-primary/30 focus:border-primary"
                    autoComplete="message"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 animate-glow">
                  Wyślij wiadomość
                </Button>
              </CardContent>
            </Card>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
