import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { MotionA, MotionDiv } from "@/components/motion";

export function Profile() {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg font-semibold mb-4 text-foreground neon-text">
        Jan Kowalski
      </h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        Fullstack Developer specjalizujący się w nowoczesnych technologiach
        webowych i futurystycznych interfejsach użytkownika.
      </p>
      <div className="flex gap-3">
        {[
          { icon: Github, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Mail, href: "#" },
        ].map((social, index) => (
          <MotionA
            key={index}
            href={social.href}
            className="p-2 rounded-full glass-effect border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </MotionA>
        ))}
      </div>
    </MotionDiv>
  );
}
