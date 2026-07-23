import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS, formatAmount } from "../../lib/currency"
import { calculateGoldNisabValue, calculateSilverNisabValue } from "../../lib/nisab"
import type { PreciousMetal } from "../../types/zakat"

const OPTIONS: { value: PreciousMetal; label: string }[] = [
  { value: "gold", label: "Gold Nisab" },
  { value: "silver", label: "Silver Nisab" },
]

export function FiqhStandardToggle() {
  const { nisab, setFiqhStandard } = useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  const goldNisabValue =
    nisab.goldPricePerGram !== null ? calculateGoldNisabValue(nisab.goldPricePerGram) : null
  const silverNisabValue =
    nisab.silverPricePerGram !== null
      ? calculateSilverNisabValue(nisab.silverPricePerGram)
      : null
  const activeValue = nisab.fiqhStandard === "gold" ? goldNisabValue : silverNisabValue

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Fiqh standard toggle</h2>
      <p className="mt-1 text-sm text-slate-500">
        Choose whether your Nisab threshold is based on gold or silver. Both are classical
        standards; the silver Nisab is a lower amount, so scholars who prefer it consider it more
        precautionary since more wealth becomes zakatable.
      </p>

      <div className="mt-4 inline-flex rounded-lg border border-slate-300 p-1">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              nisab.fiqhStandard === option.value
                ? "bg-emerald-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
            onClick={() => setFiqhStandard(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5 rounded-lg bg-emerald-50 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
          Applicable Nisab ({nisab.fiqhStandard === "gold" ? "87.48g gold" : "612.36g silver"})
        </p>
        <p className="mt-1 text-base font-semibold text-emerald-800">
          {activeValue !== null
            ? formatAmount(activeValue, currency)
            : `Enter the ${nisab.fiqhStandard} rate in Nisab setup above`}
        </p>
      </div>
    </section>
  )
}
