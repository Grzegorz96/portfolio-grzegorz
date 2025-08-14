import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  const t = useTranslations("home");

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-8">
        <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {t("title")}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t("description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
            {t("viewProjects")}
          </button> */}
          <button className="px-8 py-3 border border-input bg-background text-foreground rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
            {/* {t("contactMe")} */}
          </button>
          <Link
            href="/loader-demo"
            className="px-8 py-3 border border-primary/20 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors"
          >
            View Loaders
          </Link>
        </div>
      </div>

      {/* Demo sections to show header navigation */}
      <div className="mt-32 space-y-32">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Home Section</h2>
            <p className="text-muted-foreground">
              This is the home section of your portfolio.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">About Section</h2>
            <p className="text-muted-foreground">
              This is the about section of your portfolio.
            </p>
          </div>
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Projects Section</h2>
            <p className="text-muted-foreground">
              This is the projects section of your portfolio.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
            <p className="text-muted-foreground">
              This is the contact section of your portfolio.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
