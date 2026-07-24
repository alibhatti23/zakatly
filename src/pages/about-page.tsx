import { useLanguage } from "../context/use-language"

export function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">{t("aboutTitle")}</h1>
      <p className="mt-4 text-slate-600">{t("aboutIntro")}</p>

      <div className="mt-8 flex flex-col gap-6">
        <section>
          <h2 className="text-lg font-semibold text-slate-800">{t("aboutWhyFreeHeading")}</h2>
          <p className="mt-2 text-slate-600">{t("aboutWhyFreeBody")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">{t("aboutOpenSourceHeading")}</h2>
          <p className="mt-2 text-slate-600">
            {t("aboutOpenSourceBody")}{" "}
            <a
              href="https://github.com/alibhatti23/zakatly"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
            >
              github.com/alibhatti23/zakatly
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">{t("aboutPrivacyHeading")}</h2>
          <p className="mt-2 text-slate-600">{t("aboutPrivacyBody")}</p>
        </section>
      </div>
    </main>
  )
}
