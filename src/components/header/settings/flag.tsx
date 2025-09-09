import { US, PL, DE, ES, FR, IT, JP, RU } from "country-flag-icons/react/3x2";

interface FlagProps {
  locale: string;
  className?: string;
  title?: string;
}

const flagComponents = {
  en: US,
  pl: PL,
  de: DE,
  es: ES,
  fr: FR,
  it: IT,
  jp: JP,
  ru: RU,
} as const;

export function Flag({ locale, className, title }: FlagProps) {
  const FlagComponent = flagComponents[locale as keyof typeof flagComponents];

  if (!FlagComponent) {
    console.warn(`Flag component not found for locale: ${locale}`);
    return null;
  }

  return (
    <FlagComponent
      className={className}
      title={title || locale.toUpperCase()}
    />
  );
}
