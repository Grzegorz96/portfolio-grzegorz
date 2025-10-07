import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { MotionDiv } from "@/components/motion";
import { staggerItemVariants } from "@/lib/animations";
import Link from "next/link";

interface ProfileProps {
  name: string;
  description: string;
}

export function Profile({ name, description }: ProfileProps) {
  return (
    <MotionDiv variants={staggerItemVariants}>
      <h3 className="text-lg font-semibold mb-4 text-foreground neon-text">
        {name}
      </h3>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {description}
      </p>
      <div className="flex gap-3">
        {[
          { icon: Github, href: "#" },
          { icon: Linkedin, href: "#" },
          { icon: Twitter, href: "#" },
          { icon: Mail, href: "#" },
        ].map((social, index) => (
          <Link
            key={index}
            href={social.href}
            className="p-2 rounded-full glass-effect border border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            aria-label={social.icon.displayName || "Social link"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </MotionDiv>
  );
}
