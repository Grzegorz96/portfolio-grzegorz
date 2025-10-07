"use client";

import { useTranslations } from "next-intl";
import {
  RefreshCcw,
  Globe,
  Cpu,
  Server,
  Code,
  CheckCircle,
} from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function LoadingElement() {
  const t = useTranslations("Skills");

  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const sprintPhases = [
    {
      name: "Next.js",
      icon: <Globe className="h-4 w-4" />,
    },
    {
      name: "TypeScript",
      icon: <Cpu className="h-4 w-4" />,
    },
    {
      name: "Node.js",
      icon: <Server className="h-4 w-4" />,
    },
    {
      name: "NestJS",
      icon: <Code className="h-4 w-4" />,
    },
  ];

  return (
    <div className="bg-card/50 backdrop-blur-sm shadow-lg border border-border rounded-xl p-8 mb-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-foreground mb-2">
            {t("progress.title")}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {t("progress.description")}
          </p>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 mb-8 border border-border">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              {t("progress.subtitle")}
            </span>
            <RefreshCcw className="h-4 w-4 text-muted-foreground animate-spin" />
          </div>

          <div className="relative mb-6">
            <Progress value={progressValue} className="h-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sprintPhases.map((phase, index) => (
              <div
                key={index}
                className={cn(
                  "text-center p-4 rounded-lg transition-all duration-300 border border-border hover:border-primary/30",
                  progressValue >= (index / sprintPhases.length) * 100
                    ? "bg-primary/10 border-primary/20 hover:bg-primary/20"
                    : "bg-card/50 backdrop-blur-sm hover:bg-card"
                )}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={cn(
                      "rounded-full p-2 mb-2 transition-all duration-300",
                      progressValue >= (index / sprintPhases.length) * 100
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {phase.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {phase.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center">
            <div className="bg-primary/10 rounded-full p-2 mr-3">
              <CheckCircle className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">
              {t("progress.feedback")}
            </span>
          </div>
          <div className="text-sm text-muted-foreground flex items-center">
            <span className="mr-3">{t("progress.improvement")}</span>
            <div className="flex space-x-1">
              <span className="inline-block w-2 h-2 bg-muted rounded-full animate-pulse"></span>
              <span className="inline-block w-2 h-2 bg-muted-foreground rounded-full animate-pulse animation-delay-200"></span>
              <span className="inline-block w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-400"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
