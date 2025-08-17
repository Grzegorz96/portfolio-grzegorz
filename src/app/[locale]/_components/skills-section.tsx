import { MotionH2, MotionDiv } from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe } from "lucide-react";

export function SkillsSection() {
  return (
    <section
      id="skills"
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
          Umiejętności
        </MotionH2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Code,
              title: "Frontend",
              skills: [
                "React",
                "Next.js",
                "Vue.js",
                "TypeScript",
                "Tailwind CSS",
                "SASS",
              ],
            },
            {
              icon: Database,
              title: "Backend",
              skills: [
                "Node.js",
                "Express",
                "Python",
                "Django",
                "PostgreSQL",
                "MongoDB",
              ],
            },
            {
              icon: Globe,
              title: "Narzędzia",
              skills: ["Git", "Docker", "AWS", "Vercel", "Jest", "Webpack"],
            },
          ].map((category, index) => (
            <MotionDiv
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <category.icon className="w-5 h-5 text-primary" />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <MotionDiv
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: skillIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 transition-colors"
                        >
                          {skill}
                        </Badge>
                      </MotionDiv>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
