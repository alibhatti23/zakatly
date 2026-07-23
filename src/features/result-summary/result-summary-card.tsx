import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS, formatAmount } from "../../lib/currency"
import { activeNisabValue } from "../../lib/nisab"
import { summarizeZakat } from "../../lib/zakat-calculation"

export function ResultSummaryCard() {
  const { nisab, cashItems, goldSilverItems } = useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!
  const nisabValue = activeNisabValue(nisab)
  const summary = summarizeZakat(cashItems, goldSilverItems, nisab, nisabValue)

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Result and summary</h2>
      <p className="mt-1 text-sm text-slate-500">
        A breakdown of your zakatable wealth against your chosen Nisab.
      </p>

      <dl className="mt-5 divide-y divide-slate-100 text-sm">
        <div className="flex justify-between py-2">
          <dt className="text-slate-500">Cash and bank</dt>
          <dd className="font-medium text-slate-800">
            {formatAmount(summary.cashTotal, currency)}
          </dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-slate-500">Gold and silver</dt>
          <dd className="font-medium text-slate-800">
            {formatAmount(summary.goldSilverTotal, currency)}
          </dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="font-medium text-slate-700">Total zakatable wealth</dt>
          <dd className="font-semibold text-slate-900">
            {formatAmount(summary.grandTotal, currency)}
          </dd>
        </div>
        <div className="flex justify-between py-2">
          <dt className="text-slate-500">Applicable Nisab</dt>
          <dd className="font-medium text-slate-800">
            {summary.nisabValue !== null
              ? formatAmount(summary.nisabValue, currency)
              : "Set a rate in Nisab setup"}
          </dd>
        </div>
      </dl>

      <div
        className={`mt-5 rounded-lg px-4 py-4 ${
          summary.isDue ? "bg-emerald-50" : "bg-slate-100"
        }`}
      >
        {summary.nisabValue === null ? (
          <p className="text-sm text-slate-600">
            Enter a gold or silver rate above to find out if Zakat is due.
          </p>
        ) : summary.isDue ? (
          <>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
              Zakat due (2.5%)
            </p>
            <p className="mt-1 text-xl font-semibold text-emerald-800">
              {formatAmount(summary.zakatAmount, currency)}
            </p>
          </>
        ) : (
          <p className="text-sm text-slate-600">
            Your total wealth is below the Nisab threshold, so Zakat is not due this year.
          </p>
        )}
      </div>
    </section>
  )
}
