import { useEffect, useMemo, useState, type ReactNode } from "react"
import { TRANSLATIONS } from "../lib/translations"
import type { Language } from "../types/language"
import { LanguageContext, type LanguageContextValue } from "./language-context"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    document.documentElement.lang = language === "ur" ? "ur" : "en"
    document.documentElement.dir = language === "ur" ? "rtl" : "ltr"
  }, [language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key) => TRANSLATIONS[language][key],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
