"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang, type SiteContent } from "./data/content";

type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: SiteContent;
};

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = "tt-portfolio-lang";

export function I18nProvider({ children }: { children: ReactNode }) {
  // Default to English so server-render and first client render match (no
  // hydration mismatch). A previously chosen French preference is restored
  // after mount.
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "fr" || saved === "en") setLang(saved);
    } catch {
      /* localStorage unavailable — keep default */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value: I18nValue = {
    lang,
    setLang,
    toggle: () => setLang(lang === "en" ? "fr" : "en"),
    t: content[lang],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within <I18nProvider>");
  return ctx;
}
