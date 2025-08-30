import { MotionDiv } from "@/components/motion";
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
    <MotionDiv
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <h3 className="text-xl font-semibold mb-6 text-foreground">{heading}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed">{subHeading}</p>
      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <MotionDiv
            key={contact.label}
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2 * index,
            }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <contact.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-muted-foreground text-sm">{contact.label}</p>

              <Link
                href={contact.href}
                className="text-foreground font-medium hover:text-accent transition-colors duration-200"
              >
                {contact.value}
              </Link>
            </div>
          </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
