import { MarqueeLogoScroller } from "./marquee-logo-scroller";

import { logoItems } from "./logo-items";

const Demo = () => {
  // const logos = [{ component: logoItems.nextjs, name: "Next.js" }];
  const logos = Object.entries(logoItems).map(([name, component]) => ({
    component,
    name,
  }));

  return (
    <div className="bg-background min-h-[400px] w-full flex items-center justify-center p-4">
      <MarqueeLogoScroller
        title="Driven by Solid Technologies"
        description="Frameworks, languages and technologies I use to create fast and modern applications."
        logos={logos}
        speed="normal"
      />
    </div>
  );
};

export default Demo;
