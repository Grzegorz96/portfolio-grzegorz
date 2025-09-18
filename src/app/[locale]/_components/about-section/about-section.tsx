import { MotionH2, MotionP, MotionDiv } from "@/components/motion";
import { useTranslations } from "next-intl";
import {
  Users,
  Pen,
  PaintBucket,
  Home,
  Ruler,
  PenTool,
  Building2,
  Award,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import { CompareCode } from "./compare-code";
import { StatCounter } from "./stat-counter";
import { ServiceItem } from "./service-item";

export function AboutSection() {
  const t = useTranslations("About");

  const services = [
    {
      icon: <Pen className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.interior.title"),
      description: t("services.interior.description"),
      position: "left",
    },
    {
      icon: <Home className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.exterior.title"),
      description: t("services.exterior.description"),
      position: "left",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.design.title"),
      description: t("services.design.description"),
      position: "left",
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.decoration.title"),
      description: t("services.decoration.description"),
      position: "right",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.planning.title"),
      description: t("services.planning.description"),
      position: "right",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.execution.title"),
      description: t("services.execution.description"),
      position: "right",
    },
  ];

  const stats = [
    {
      icon: <Award className="w-6 h-6" />,
      value: 25,
      label: t("stats.technologies"),
      suffix: "+",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: 100,
      label: t("stats.performance"),
      suffix: "%",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      value: 2,
      label: t("stats.degrees"),
      suffix: "",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      value: 24,
      label: t("stats.availability"),
      suffix: "/7",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Background glow effects */}
      <div className="w-[200px] h-[200px] absolute top-[100px] left-[10%] origin-center rotate-45 bg-primary/8 blur-[60px] z-0" />
      <div className="w-[150px] h-[150px] absolute bottom-[200px] right-[15%] origin-center -rotate-30 bg-primary/6 blur-[50px] z-0" />
      <div className="w-[100px] h-[100px] absolute top-[400px] left-[80%] origin-center rotate-15 bg-primary/5 blur-[40px] z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <MotionH2
            className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {t("title")}
          </MotionH2>
        </div>

        <MotionP
          className="text-center max-w-2xl mx-auto mb-16 text-muted-foreground text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t("description")}
        </MotionP>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Left Column */}
          <div className="space-y-12 lg:space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <MotionDiv
                  key={`left-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col group"
                >
                  <ServiceItem
                    icon={service.icon}
                    secondaryIcon={service.secondaryIcon}
                    title={service.title}
                    description={service.description}
                  />
                </MotionDiv>
              ))}
          </div>

          {/* Center Compare Code */}
          <MotionDiv
            className="flex justify-center items-center order-first lg:order-none mb-8 lg:mb-0 w-full min-h-[300px] lg:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <CompareCode />
          </MotionDiv>

          {/* Right Column */}
          <div className="space-y-12 lg:space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <MotionDiv
                  key={`right-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col group"
                >
                  <ServiceItem
                    icon={service.icon}
                    secondaryIcon={service.secondaryIcon}
                    title={service.title}
                    description={service.description}
                  />
                </MotionDiv>
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatCounter
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
