import { BottomPart } from "./bottom-part";
import { useTranslations } from "next-intl";
import { Profile, Services, Technologies, Contact } from "./top-part";

export function Footer() {
  const t = useTranslations("Footer");

  const servicesWords = [
    t("services.webDevelopment"),
    t("services.uiuxDesign"),
    t("services.technicalConsulting"),
    t("services.performanceOptimization"),
  ];

  const technologiesWords = [
    t("technologies.reactNextjs"),
    t("technologies.nodejsExpress"),
    t("technologies.typescript"),
    t("technologies.databases"),
  ];

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-primary/20 relative z-10 mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Top Part */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <Profile
            name={t("profile.name")}
            description={t("profile.description")}
          />
          <Services title={t("services.title")} services={servicesWords} />
          <Technologies
            title={t("technologies.title")}
            technologies={technologiesWords}
          />
          <Contact
            title={t("contact.title")}
            location={t("contact.location")}
            phone={t("contact.phone")}
            available={t("contact.available")}
          />
        </div>
        <BottomPart
          copyright={t("bottom.copyright")}
          privacyPolicy={t("bottom.privacyPolicy")}
          termsOfService={t("bottom.termsOfService")}
        />
      </div>
    </footer>
  );
}
