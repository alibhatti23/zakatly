import { useLanguage } from "../context/use-language"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="inline-flex rounded-lg border border-slate-300 p-1">
      <button
        type="button"
        className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
          language === "en" ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-slate-100"
        }`}
        onClick={() => setLanguage("en")}
      >
        English
      </button>
      <button
        type="button"
        className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
          language === "ur" ? "bg-emerald-600 text-white" : "text-slate-600 hover:bg-slate-100"
        }`}
        onClick={() => setLanguage("ur")}
      >
        اردو
      </button>
    </div>
  )
}
