import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareCode() {
  return (
    <div className="p-2 border rounded-2xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-square">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="w-full h-full"
        slideMode="hover"
      />
    </div>
  );
}
