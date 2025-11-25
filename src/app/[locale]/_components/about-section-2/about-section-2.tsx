"use client";

import { IDEEditor } from "./ide-editor";

export function AboutSection2() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8 lg:py-10">
        <div className="relative z-0 drop-shadow-2xl">
          <IDEEditor />
        </div>
      </div>
    </section>
  );
}
