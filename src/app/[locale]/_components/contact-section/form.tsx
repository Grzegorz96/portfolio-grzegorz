import { MotionDiv } from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface FormProps {
  formLabels: {
    title: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
}

export function Form({ formLabels }: FormProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="glass-effect border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-foreground">
            {formLabels.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                {formLabels.name}
              </label>
              <Input
                id="name"
                name="name"
                required
                className="glass-effect border-primary/30 focus:border-primary"
                autoComplete="name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                {formLabels.email}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                className="glass-effect border-primary/30 focus:border-primary"
                autoComplete="email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              {formLabels.subject}
            </label>
            <Input
              id="subject"
              name="subject"
              required
              className="glass-effect border-primary/30 focus:border-primary"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              {formLabels.message}
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={6}
              className="glass-effect border-primary/30 focus:border-primary"
              autoComplete="message"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 animate-glow"
          >
            {formLabels.send}
          </Button>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
