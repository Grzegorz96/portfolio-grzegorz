# Struktura Headera

## 📁 Organizacja komponentów

Header został podzielony na mniejsze, reużywalne komponenty w folderze `src/components/header/`:

```
src/components/header/
├── index.ts           # Eksport wszystkich komponentów
├── header.tsx         # Główny komponent Header (kompozycja)
├── logo.tsx           # Logo portfolio
├── navigation.tsx     # Menu nawigacyjne
├── theme-toggle.tsx   # Przełącznik motywu
├── mobile-menu.tsx    # Menu mobilne
└── cta-button.tsx     # Przycisk CTA
```

## 🎯 Korzyści z podziału:

### 1. **Reużywalność**

- Każdy komponent może być używany osobno
- Łatwiejsze testowanie jednostkowe
- Możliwość podmiany konkretnej części

### 2. **Czytelność kodu**

- Każdy plik ma jedną odpowiedzialność
- Łatwiejsze debugowanie
- Lepsze zarządzanie stanem

### 3. **Maintainability**

- Mniejsze pliki = łatwiejsze zarządzanie
- Izolacja logiki biznesowej
- Łatwiejsze dodawanie nowych funkcji

## 🔧 Po co ThemeProvider?

### **Dlaczego go stworzyłem:**

1. **Zarządzanie motywami globalnie**

   - Wszystkie komponenty mają dostęp do tego samego stanu motywu
   - Synchronizacja między różnymi częściami aplikacji

2. **Persystencja wyboru użytkownika**

   - Zapisuje preferencje w localStorage
   - Pamięta wybór między sesjami

3. **Automatyczne wykrywanie preferencji systemowych**
   - Jeśli użytkownik nie wybrał motywu → używa systemowego
   - Reaguje na zmiany w ustawieniach systemu

### **Dlaczego jako kliencki ("use client"):**

1. **Interaktywność**

   - Użytkownik musi móc klikać i zmieniać motyw
   - React hooks (`useState`, `useEffect`) działają tylko po stronie klienta

2. **Hydration**

   - `next-themes` musi działać w przeglądarce
   - Dostęp do `localStorage` i `window.matchMedia`

3. **Dynamiczne zmiany**
   - Motyw może się zmieniać bez odświeżania strony
   - CSS variables są aktualizowane w czasie rzeczywistym

## 🚀 Jak to działa:

```tsx
// ThemeProvider w layout.tsx
<ThemeProvider
  attribute="class" // Używa klasy 'dark' na <html>
  defaultTheme="system" // Domyślnie systemowy motyw
  enableSystem // Włącza wykrywanie preferencji systemowych
  disableTransitionOnChange // Wyłącza animacje przy zmianie motywu
>
  <Header />
  <main>{children}</main>
</ThemeProvider>
```

```tsx
// ThemeToggle używa useTheme hook
const { theme, setTheme } = useTheme();

// Zmienia motyw przez klasę CSS
setTheme("dark"); // → <html class="dark">
setTheme("light"); // → <html class="">
setTheme("system"); // → Automatycznie na podstawie preferencji systemowych
```

## 🎨 Tailwind + shadcn + Dark Mode:

1. **Tailwind CSS** - automatycznie używa klasy `dark:` gdy `<html class="dark">`
2. **shadcn/ui** - komponenty mają wbudowane style dla jasnego/ciemnego motywu
3. **CSS Variables** - kolory są definiowane w `globals.css` i zmieniają się automatycznie

## 📱 Responsywność:

- **Desktop**: Pełne menu + dropdown motywu + CTA button
- **Mobile**: Hamburger menu z ikoną aktualnego motywu
- **Tablet**: Układ pośredni między desktop a mobile
