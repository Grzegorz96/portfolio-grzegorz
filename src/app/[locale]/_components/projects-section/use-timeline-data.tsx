import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Star,
  Database,
  Cpu,
  TrendingUp,
  Zap,
  Code,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

export function useTimelineData() {
  const t = useTranslations("Projects");

  return [
    {
      title: t("years.2024.title"),
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">
              {t("years.2024.subtitle")}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("years.2024.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* E-commerce Platform */}
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={t("projects.ecommerce.title")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="default"
                      className="bg-green-500 hover:bg-green-600 text-white border-0"
                    >
                      {t("status.completed")}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="default"
                      className="bg-accent hover:bg-accent/90 text-white border-0"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      {t("badges.featured")}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-full glass-effect text-accent backdrop-blur-sm">
                    <Database className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t("projects.ecommerce.title")}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("projects.ecommerce.description")}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Next.js", "Node.js", "PostgreSQL", "Stripe"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("actions.code")}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 bg-accent hover:bg-accent/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("actions.demo")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Analytics Dashboard */}
            <Card className="glass-effect border-accent/20 hover:border-accent/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={t("projects.analytics.title")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="default"
                      className="bg-orange-500 hover:bg-orange-600 text-white border-0 animate-pulse"
                    >
                      {t("status.inProgress")}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-full glass-effect text-accent backdrop-blur-sm">
                    <Cpu className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {t("projects.analytics.title")}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("projects.analytics.description")}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {["React", "D3.js", "Python", "FastAPI"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("actions.code")}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("actions.demo")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: t("years.2023.title"),
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">
              {t("years.2023.subtitle")}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("years.2023.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Task Management App */}
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={t("projects.taskManagement.title")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="default"
                      className="bg-green-500 hover:bg-green-600 text-white border-0"
                    >
                      {t("status.completed")}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-full glass-effect text-accent backdrop-blur-sm">
                    <Code className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t("projects.taskManagement.title")}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("projects.taskManagement.description")}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {["React", "Express.js", "MongoDB", "Socket.io"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("actions.code")}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 bg-accent hover:bg-accent/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("actions.demo")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Real-time Chat App */}
            <Card className="glass-effect border-accent/20 hover:border-accent/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={t("projects.chatApp.title")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="default"
                      className="bg-green-500 hover:bg-green-600 text-white border-0"
                    >
                      {t("status.completed")}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="default"
                      className="bg-accent hover:bg-accent/90 text-white border-0"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      {t("badges.featured")}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-full glass-effect text-accent backdrop-blur-sm">
                    <Zap className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {t("projects.chatApp.title")}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("projects.chatApp.description")}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {["Vue.js", "Node.js", "Redis", "WebSocket"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("actions.code")}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("actions.demo")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
    {
      title: t("years.2022.title"),
      content: (
        <div className="space-y-8">
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-foreground">
              {t("years.2022.subtitle")}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t("years.2022.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Portfolio Website */}
            <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={t("projects.portfolio.title")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="default"
                      className="bg-green-500 hover:bg-green-600 text-white border-0"
                    >
                      {t("status.completed")}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="default"
                      className="bg-accent hover:bg-accent/90 text-white border-0"
                    >
                      <Star className="w-3 h-3 mr-1" />
                      {t("badges.featured")}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-full glass-effect text-accent backdrop-blur-sm">
                    <Code className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {t("projects.portfolio.title")}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("projects.portfolio.description")}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {[
                    "Next.js",
                    "Framer Motion",
                    "Tailwind CSS",
                    "TypeScript",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("actions.code")}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 bg-accent hover:bg-accent/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("actions.demo")}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mobile Fitness App */}
            <Card className="glass-effect border-accent/20 hover:border-accent/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={t("projects.fitnessApp.title")}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    width={400}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="default"
                      className="bg-green-500 hover:bg-green-600 text-white border-0"
                    >
                      {t("status.completed")}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 p-2 rounded-full glass-effect text-accent backdrop-blur-sm">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                  {t("projects.fitnessApp.title")}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t("projects.fitnessApp.description")}
                </p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {["React Native", "Firebase", "TensorFlow", "Redux"].map(
                    (tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    )
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("actions.code")}
                  </Button>
                  <Button
                    size="sm"
                    variant="default"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("actions.demo")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ),
    },
  ];
}
