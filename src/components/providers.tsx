import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { MotionConfigProvider } from "@/components/motion-config";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextIntlClientProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        {/* <MotionConfigProvider>{children}</MotionConfigProvider> */}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
