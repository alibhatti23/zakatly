import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS, formatAmount } from "../../lib/currency"
import { preciousMetalItemValue } from "../../lib/precious-metals"
import type { PreciousMetal } from "../../types/zakat"

export function GoldSilverCard() {
  const { nisab, goldSilverItems, addGoldSilverItem, updateGoldSilverItem, removeGoldSilverItem } =
    useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!
  const hasRates = nisab.goldPricePerGram !== null || nisab.silverPricePerGram !== null

  const total = goldSilverItems.reduce(
    (sum, item) => sum + preciousMetalItemValue(item, nisab),
    0,
  )

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Gold and silver</h2>
      <p className="mt-1 text-sm text-slate-500">
        Add jewelry, coins, and bars by weight. Value is worked out using the rate you set in
        Nisab setup.
      </p>

      {!hasRates && (
        <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700">
          Set a gold or silver rate in Nisab setup above to see values here.
        </p>
      )}

      <div className="mt-5 flex flex-col gap-3">
        {goldSilverItems.map((item) => {
          const value = preciousMetalItemValue(item, nisab)
          return (
            <div key={item.id} className="flex flex-wrap items-center gap-2">
              <input
                type="text"
                placeholder="e.g. Wedding ring"
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                value={item.label}
                onChange={(event) => updateGoldSilverItem(item.id, { label: event.target.value })}
              />
              <select
                className="rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                value={item.metal}
                onChange={(event) =>
                  updateGoldSilverItem(item.id, { metal: event.target.value as PreciousMetal })
                }
              >
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
              </select>
              <input
                type="number"
                min="0"
                inputMode="decimal"
                placeholder="Grams"
                className="w-28 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
                value={item.grams || ""}
                onChange={(event) => {
                  const parsed = Number(event.target.value)
                  updateGoldSilverItem(item.id, { grams: Number.isFinite(parsed) ? parsed : 0 })
                }}
              />
              <span className="w-28 text-right text-sm text-slate-500">
                {formatAmount(value, currency)}
              </span>
              <button
                type="button"
                aria-label={`Remove ${item.label || "item"}`}
                className="rounded-lg px-2 py-2 text-sm text-slate-400 hover:bg-slate-100 hover:text-red-600"
                onClick={() => removeGoldSilverItem(item.id)}
              >
                ✕
              </button>
            </div>
          )
        })}

        <button
          type="button"
          className="self-start rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-600 hover:border-emerald-400 hover:text-emerald-700"
          onClick={addGoldSilverItem}
        >
          Add gold or silver item
        </button>
      </div>

      <div className="mt-5 rounded-lg bg-emerald-50 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">Total</p>
        <p className="mt-1 text-base font-semibold text-emerald-800">
          {formatAmount(total, currency)}
        </p>
      </div>
    </section>
  )
}
