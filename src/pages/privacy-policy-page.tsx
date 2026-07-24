import { useLanguage } from "../context/use-language"

export function PrivacyPolicyPage() {
  const { t } = useLanguage()

  return (
    <main className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="text-2xl font-semibold text-slate-900">{t("privacyTitle")}</h1>
      <p className="mt-4 text-slate-600">{t("privacyIntro")}</p>

      <div className="mt-8 flex flex-col gap-6">
        <section>
          <h2 className="text-lg font-semibold text-slate-800">{t("privacyNoServerHeading")}</h2>
          <p className="mt-2 text-slate-600">{t("privacyNoServerBody")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">{t("privacyNoTrackingHeading")}</h2>
          <p className="mt-2 text-slate-600">{t("privacyNoTrackingBody")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">{t("privacyLiveRateHeading")}</h2>
          <p className="mt-2 text-slate-600">{t("privacyLiveRateBody")}</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-slate-800">{t("privacyOpenSourceHeading")}</h2>
          <p className="mt-2 text-slate-600">
            {t("privacyOpenSourceBody")}{" "}
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
      </div>
    </main>
  )
}
