import { NextIntlClientProvider } from "next-intl";
import { MotionConfigProvider } from "@/components/motion-config";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <NextIntlClientProvider>
      {children}
      {/* <MotionConfigProvider>{children}</MotionConfigProvider> */}
    </NextIntlClientProvider>
  );
}
