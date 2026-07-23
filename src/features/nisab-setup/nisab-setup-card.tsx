import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS, formatAmount } from "../../lib/currency"
import { calculateGoldNisabValue, calculateSilverNisabValue } from "../../lib/nisab"
import type { CurrencyCode } from "../../types/zakat"

function parseRateInput(value: string): number | null {
  if (value.trim() === "") return null
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : null
}

export function NisabSetupCard() {
  const { nisab, setCurrency, setGoldPricePerGram, setSilverPricePerGram } = useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  const goldNisabValue =
    nisab.goldPricePerGram !== null ? calculateGoldNisabValue(nisab.goldPricePerGram) : null
  const silverNisabValue =
    nisab.silverPricePerGram !== null
      ? calculateSilverNisabValue(nisab.silverPricePerGram)
      : null

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Nisab setup</h2>
      <p className="mt-1 text-sm text-slate-500">
        Enter today's gold and silver rate to work out your Nisab threshold.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Currency
          <select
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
            value={nisab.currency}
            onChange={(event) => setCurrency(event.target.value as CurrencyCode)}
          >
            {CURRENCY_OPTIONS.map((option) => (
              <option key={option.code} value={option.code}>
                {option.code} — {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Gold price per gram
          <input
            type="number"
            min="0"
            inputMode="decimal"
            placeholder="0.00"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
            value={nisab.goldPricePerGram ?? ""}
            onChange={(event) => setGoldPricePerGram(parseRateInput(event.target.value))}
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium text-slate-700">
          Silver price per gram
          <input
            type="number"
            min="0"
            inputMode="decimal"
            placeholder="0.00"
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
            value={nisab.silverPricePerGram ?? ""}
            onChange={(event) => setSilverPricePerGram(parseRateInput(event.target.value))}
          />
        </label>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-emerald-50 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
            Gold Nisab (87.48g)
          </p>
          <p className="mt-1 text-base font-semibold text-emerald-800">
            {goldNisabValue !== null ? formatAmount(goldNisabValue, currency) : "Enter gold rate"}
          </p>
        </div>
        <div className="rounded-lg bg-slate-100 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
            Silver Nisab (612.36g)
          </p>
          <p className="mt-1 text-base font-semibold text-slate-800">
            {silverNisabValue !== null
              ? formatAmount(silverNisabValue, currency)
              : "Enter silver rate"}
          </p>
        </div>
      </div>
    </section>
  )
}
