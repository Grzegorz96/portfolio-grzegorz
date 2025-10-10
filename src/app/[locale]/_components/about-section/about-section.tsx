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
    },
    {
      icon: <Home className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.exterior.title"),
      description: t("services.exterior.description"),
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.design.title"),
      description: t("services.design.description"),
    },
    {
      icon: <PaintBucket className="w-6 h-6" />,
      secondaryIcon: (
        <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.decoration.title"),
      description: t("services.decoration.description"),
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      secondaryIcon: (
        <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.planning.title"),
      description: t("services.planning.description"),
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      secondaryIcon: (
        <Star className="w-4 h-4 absolute -top-1 -right-1 text-primary/60" />
      ),
      title: t("services.execution.title"),
      description: t("services.execution.description"),
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
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-8 z-10">
          <div className="flex flex-col justify-start items-center gap-6 max-w-4xl">
            <h2 className="text-center text-foreground text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              {t("title")}
            </h2>
            <p className="text-center text-muted-foreground text-base md:text-lg font-normal leading-relaxed max-w-2xl">
              {t("description")}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:gap-12 relative">
            {/* Left Column */}
            <div className="space-y-6 xl:space-y-12">
              {services
                .filter((_service, index) => index < 3)
                .map((service, index) => (
                  <div key={`left-${index}`} className="group">
                    <ServiceItem
                      icon={service.icon}
                      secondaryIcon={service.secondaryIcon}
                      title={service.title}
                      description={service.description}
                    />
                  </div>
                ))}
            </div>

            {/* Center Compare Code */}
            <div className="flex justify-center items-center order-first xl:order-none mb-6 xl:mb-0 w-full min-h-[250px] xl:min-h-[500px]">
              <CompareCode />
            </div>

            {/* Right Column */}
            <div className="space-y-6 xl:space-y-12">
              {services
                .filter((_service, index) => index >= 3)
                .map((service, index) => (
                  <div key={`right-${index}`} className="group">
                    <ServiceItem
                      icon={service.icon}
                      secondaryIcon={service.secondaryIcon}
                      title={service.title}
                      description={service.description}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
