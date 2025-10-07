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
    <Card className="h-full bg-card/50 backdrop-blur-sm shadow-lg border border-border rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-foreground">
          {formLabels.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-full space-y-4">
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
              className="bg-card/50 backdrop-blur-sm border border-border focus:border-primary rounded-lg"
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
              className="bg-card/50 backdrop-blur-sm border border-border focus:border-primary rounded-lg"
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
            className="bg-card/50 backdrop-blur-sm border border-border focus:border-primary rounded-lg"
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
            className="bg-card/50 backdrop-blur-sm border border-border focus:border-primary rounded-lg"
            autoComplete="message"
          />
        </div>
        <Button
          type="submit"
          className="w-full mt-auto bg-primary/5 text-primary hover:bg-primary/10 rounded-full shadow-lg transition-all duration-200"
        >
          {formLabels.send}
        </Button>
      </CardContent>
    </Card>
  );
}
