import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { strings, type Language, type StringKey } from "./strings";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: StringKey) => string;
};

const fallbackValue: LanguageContextValue = {
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key: StringKey) => strings.en[key],
};

const LanguageContext = createContext<LanguageContextValue>(fallbackValue);
const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") setLanguageState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "pt" : "en"),
      t: (key: StringKey) => strings[language][key],
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  return context;
}
