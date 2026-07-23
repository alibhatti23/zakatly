import { useLanguage } from "../../context/use-language"
import { useZakat } from "../../context/use-zakat"
import { ASSET_CATEGORY_ORDER } from "../../lib/asset-categories"
import { CURRENCY_OPTIONS, formatAmount } from "../../lib/currency"
import { activeNisabValue } from "../../lib/nisab"
import type { TranslationKey } from "../../lib/translations"
import { summarizeZakat } from "../../lib/zakat-calculation"
import type { AssetCategoryKey } from "../../types/zakat"

const CATEGORY_TRANSLATION_KEYS: Record<AssetCategoryKey, TranslationKey> = {
  cash: "cashTitle",
  investments: "investmentsTitle",
  businessAssets: "businessAssetsTitle",
  realEstate: "realEstateTitle",
}

export function ResultSummaryCard() {
  const { nisab, assetCategories, goldSilverItems, liabilityItems } = useZakat()
  const { t } = useLanguage()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!
  const nisabValue = activeNisabValue(nisab)
  const summary = summarizeZakat(assetCategories, goldSilverItems, liabilityItems, nisab, nisabValue)

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{t("resultTitle")}</h2>
      <p className="mt-1 text-sm text-slate-500">{t("resultDescription")}</p>

      <dl className="mt-5 divide-y divide-slate-100 text-sm">
        {ASSET_CATEGORY_ORDER.map((category) => (
          <div key={category} className="flex justify-between py-2">
            <dt className="text-slate-500">{t(CATEGORY_TRANSLATION_KEYS[category])}</dt>
            <dd className="font-medium text-slate-800">
              {formatAmount(summary.categoryTotals[category], currency)}
            </dd>
          </div>
        ))}
        <div className="flex justify-between py-2">
          <dt className="text-slate-500">{t("resultGoldSilver")}</dt>
          <dd className="font-medium text-slate-800">
            {formatAmount(summary.goldSilverTotal, currency)}
          </dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-slate-500">{t("resultLiabilities")}</dt>
          <dd className="font-medium text-red-600">
            − {formatAmount(summary.liabilitiesTotal, currency)}
          </dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="font-medium text-slate-700">{t("resultTotalWealth")}</dt>
          <dd className="font-semibold text-slate-900">
            {formatAmount(summary.grandTotal, currency)}
          </dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-slate-500">{t("resultApplicableNisab")}</dt>
          <dd className="font-medium text-slate-800">
            {summary.nisabValue !== null
              ? formatAmount(summary.nisabValue, currency)
              : t("resultSetRate")}
          </dd>
        </div>
      </dl>

      <div
        className={`mt-5 rounded-lg px-4 py-4 ${
          summary.isDue ? "bg-emerald-50" : "bg-slate-100"
        }`}
      >
        {summary.nisabValue === null ? (
          <p className="text-sm text-slate-600">{t("resultEnterRate")}</p>
        ) : summary.isDue ? (
          <>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
              {t("resultZakatDue")}
            </p>
            <p className="mt-1 text-xl font-semibold text-emerald-800">
              {formatAmount(summary.zakatAmount, currency)}
            </p>
          </>
        ) : (
          <p className="text-sm text-slate-600">{t("resultNotDue")}</p>
        )}
      </div>
    </section>
  )
}
