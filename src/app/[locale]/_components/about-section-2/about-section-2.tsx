"use client";

import { useTranslations } from "next-intl";
import { StatusBadge } from "../about-section/content/status-badge";
import { Heading } from "../about-section/content/heading";
import { SubHeading } from "../about-section/content/sub-heading";
import { Description } from "../about-section/content/description";
import { ActionButtons } from "../about-section/action-buttons";
import { Cards } from "../about-section/stats/cards";
import { IDEEditor } from "./ide-editor";

export function AboutSection2() {
  const t = useTranslations("About");

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-20">
        {/* IDE Editor Background */}

        {/* IDE Editor */}
        <div className="relative z-0">
          <IDEEditor className="w-full h-full min-h-[600px] lg:min-h-[800px]" />
        </div>
      </div>
    </section>
  );
}
