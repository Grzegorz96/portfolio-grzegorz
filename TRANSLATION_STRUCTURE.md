# 🌍 Struktura Tłumaczeń - Najlepsze Praktyki

## 📋 **Przegląd**

Ten dokument opisuje najlepsze praktyki organizacji plików tłumaczeń w projekcie Next.js z `next-intl`.

## 🎯 **Zasada: Grupowanie Funkcjonalne > Grupowanie Komponentowe**

### ✅ **Dlaczego grupowanie funkcjonalne jest lepsze:**

1. **Łatwiejsze zarządzanie** - wszystkie teksty związane z daną funkcjonalnością w jednym miejscu
2. **Lepsze tłumaczenie** - tłumacze widzą pełny kontekst sekcji
3. **Mniej duplikacji** - wspólne teksty w jednym miejscu
4. **Łatwiejsze utrzymanie** - zmiany w jednym miejscu
5. **Lepsze planowanie** - łatwiej zaplanować nowe funkcjonalności

### ❌ **Dlaczego grupowanie komponentowe jest gorsze:**

1. **Rozproszenie** - podobne teksty w różnych miejscach
2. **Duplikacja** - te same słowa tłumaczone wielokrotnie
3. **Trudniejsze zarządzanie** - zmiany wymagają edycji wielu plików
4. **Gorszy kontekst** - tłumacze nie widzą pełnego obrazu

## 🏗️ **Nowa Struktura**

### **Przed (stara struktura):**

```json
{
  "Header": { ... },
  "Navigation": { ... },
  "LanguageToggle": { ... },
  "ThemeToggle": { ... },
  "home": { ... },
  "about": { ... },
  "theme": { ... }
}
```

### **Po (nowa struktura):**

```json
{
  "Header": {
    "logo": "Portfolio",
    "navigation": {
      "home": "Strona główna",
      "about": "O mnie",
      "projects": "Projekty",
      "contact": "Kontakt"
    },
    "actions": {
      "theme": {
        "select": "Wybierz motyw",
        "light": "Jasny",
        "dark": "Ciemny",
        "system": "Systemowy"
      },
      "language": {
        "label": "Zmień język",
        "locale": "..."
      }
    }
  },
  "Common": {
    "getStarted": "Rozpocznij",
    "loading": "Ładowanie...",
    "save": "Zapisz",
    "cancel": "Anuluj"
  },
  "Pages": {
    "home": { ... },
    "about": { ... },
    "projects": { ... },
    "contact": { ... }
  }
}
```

## 🔧 **Implementacja w Komponentach**

### **ThemeToggle:**

```typescript
const t = useTranslations("Header.actions.theme");
// t("select"), t("light"), t("dark"), t("system")
```

### **LanguageToggle:**

```typescript
const t = useTranslations("Header.actions.language");
// t("label"), t("locale", { locale: "pl" })
```

### **Navigation:**

```typescript
const t = useTranslations("Header.navigation");
// t("home"), t("about"), t("projects"), t("contact")
```

### **Strona główna:**

```typescript
const t = useTranslations("Pages.home");
// t("title"), t("description"), t("viewProjects")
```

## 📁 **Organizacja Sekcji**

### **1. Header**

- **logo** - nazwa portfolio
- **navigation** - menu nawigacyjne
- **actions** - akcje użytkownika (motyw, język)

### **2. Common**

- **getStarted** - przyciski akcji
- **loading** - komunikaty ładowania
- **save/cancel** - akcje formularzy
- **edit/delete** - akcje CRUD

### **3. Pages**

- **home** - strona główna
- **about** - o mnie
- **projects** - projekty
- **contact** - kontakt

### **4. Metadata**

- **title** - tytuły stron
- **description** - opisy meta

## ⚠️ **WAŻNE: Konwencja Nazewnictwa**

### **Namespaces MUSZĄ zaczynać się od wielkiej litery:**

```typescript
// ✅ POPRAWNIE
const t = useTranslations("Header.navigation");
const t = useTranslations("Pages.home");
const t = useTranslations("Common.loading");

// ❌ BŁĘDNIE
const t = useTranslations("header.navigation");
const t = useTranslations("pages.home");
const t = useTranslations("common.loading");
```

### **Dlaczego?**

- `next-intl` wymaga namespaces z wielkiej litery
- Zapewnia spójność z konwencjami React/Next.js
- Lepsze IntelliSense w TypeScript
- Standard w branży

## 🚀 **Korzyści Nowej Struktury**

### **Dla Programistów:**

- ✅ Łatwiejsze znajdowanie tekstów
- ✅ Spójne nazewnictwo
- ✅ Mniej błędów w kluczach
- ✅ Lepsze IntelliSense

### **Dla Tłumaczy:**

- ✅ Pełny kontekst sekcji
- ✅ Mniej duplikacji
- ✅ Łatwiejsze zarządzanie
- ✅ Lepsze jakości tłumaczeń

### **Dla Projektu:**

- ✅ Łatwiejsze utrzymanie
- ✅ Szybsze dodawanie nowych języków
- ✅ Lepsze planowanie funkcjonalności
- ✅ Mniejsza szansa na błędy

## 📝 **Przykłady Użycia**

### **Dodawanie nowego tekstu:**

```typescript
// W komponencie
const t = useTranslations("Header.actions.theme");
const label = t("newOption"); // ❌ Błąd - brak klucza

// W pliku tłumaczeń
"Header": {
  "actions": {
    "theme": {
      "newOption": "Nowa opcja" // ✅ Dodaj tutaj
    }
  }
}
```

### **Dodawanie nowej sekcji:**

```json
{
  "Header": {
    "actions": {
      "notifications": {
        // ✅ Nowa sekcja
        "label": "Powiadomienia",
        "markAsRead": "Oznacz jako przeczytane"
      }
    }
  }
}
```

## 🔍 **Walidacja Struktury**

### **Sprawdź czy:**

1. ✅ Wszystkie komponenty używają `useTranslations`
2. ✅ Brak hardkodowanych tekstów
3. ✅ Spójne nazewnictwo kluczy
4. ✅ Wszystkie języki mają tę samą strukturę
5. ✅ Brak duplikacji tekstów
6. ✅ **Wszystkie namespaces zaczynają się od wielkiej litery**

### **Narzędzia do sprawdzania:**

- ESLint z regułami `next-intl`
- TypeScript z typami tłumaczeń
- Automatyczne testy struktury

## 📚 **Dodatkowe Zasoby**

- [Dokumentacja next-intl](https://next-intl-docs.vercel.app/)
- [Najlepsze praktyki i18n](https://next-intl-docs.vercel.app/docs/getting-started)
- [Przykłady struktur](https://next-intl-docs.vercel.app/docs/routing/middleware)

---

**Pamiętaj:** Struktura tłumaczeń to fundament internacjonalizacji. Dobrze zaplanowana struktura zaoszczędzi Ci wiele czasu w przyszłości! 🚀

**WAŻNE:** Zawsze używaj namespaces z wielkiej litery w `next-intl`!
