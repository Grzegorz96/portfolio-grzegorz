import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "grzegorz.strzeszewski@example.com",
    href: "mailto:grzegorz.strzeszewski@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/grzegorz-strzeszewski",
    href: "https://linkedin.com/in/grzegorz-strzeszewski",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/grzegorz-strzeszewski",
    href: "https://github.com/grzegorz-strzeszewski",
  },
];

export function Info({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="space-y-4 mb-6">
        <h3 className="text-2xl font-semibold text-foreground">{heading}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {subHeading}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {contactInfo.map((contact) => (
          <Link
            key={contact.label}
            href={contact.href}
            className="group flex items-center gap-3 p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:bg-card transition-colors duration-300"
          >
            <div className="w-10 h-10 bg-primary/5 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300 flex-shrink-0">
              <contact.icon className="w-4 h-4 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-muted-foreground text-xs font-medium">
                {contact.label}
              </p>
              <p className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                {contact.value}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
