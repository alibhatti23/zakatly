import { useLanguage } from "../context/use-language"
import type { TranslationKey } from "../lib/translations"

const FAQ_ENTRIES: [TranslationKey, TranslationKey][] = [
  ["guideQ1", "guideA1"],
  ["guideQ2", "guideA2"],
  ["guideQ3", "guideA3"],
  ["guideQ4", "guideA4"],
  ["guideQ5", "guideA5"],
  ["guideQ6", "guideA6"],
]

export function ZakatGuidePage() {
  const { t } = useLanguage()

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">{t("guideTitle")}</h1>
      <p className="mt-4 text-slate-600">{t("guideIntro")}</p>

      <div className="mt-8 flex flex-col gap-6">
        {FAQ_ENTRIES.map(([questionKey, answerKey]) => (
          <section key={questionKey}>
            <h2 className="text-lg font-semibold text-slate-800">{t(questionKey)}</h2>
            <p className="mt-2 text-slate-600">{t(answerKey)}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
