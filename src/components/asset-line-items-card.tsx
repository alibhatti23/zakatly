import type { AssetLineItem, CurrencyOption } from "../types/zakat"
import { formatAmount } from "../lib/currency"
import { InfoTooltip } from "./info-tooltip"

interface AssetLineItemsCardProps {
  title: string
  description: string
  items: AssetLineItem[]
  currency: CurrencyOption
  itemLabelPlaceholder: string
  addButtonLabel: string
  onAdd: () => void
  onUpdate: (id: string, updates: Partial<Omit<AssetLineItem, "id">>) => void
  onRemove: (id: string) => void
  tooltipText?: string
}

export function AssetLineItemsCard({
  title,
  description,
  items,
  currency,
  itemLabelPlaceholder,
  addButtonLabel,
  onAdd,
  onUpdate,
  onRemove,
  tooltipText,
}: AssetLineItemsCardProps) {
  const total = items.reduce((sum, item) => sum + item.amount, 0)

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="flex items-center text-lg font-semibold text-slate-900">
        {title}
        {tooltipText && <InfoTooltip text={tooltipText} />}
      </h2>
      <p className="mt-1 text-sm text-slate-500">{description}</p>

      <div className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <input
              type="text"
              placeholder={itemLabelPlaceholder}
              className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
              value={item.label}
              onChange={(event) => onUpdate(item.id, { label: event.target.value })}
            />
            <input
              type="number"
              min="0"
              inputMode="decimal"
              placeholder="0.00"
              className="w-32 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none"
              value={item.amount || ""}
              onChange={(event) => {
                const parsed = Number(event.target.value)
                onUpdate(item.id, { amount: Number.isFinite(parsed) ? parsed : 0 })
              }}
            />
            <button
              type="button"
              aria-label={`Remove ${item.label || "item"}`}
              className="rounded-lg px-2 py-2 text-sm text-slate-400 hover:bg-slate-100 hover:text-red-600"
              onClick={() => onRemove(item.id)}
            >
              ✕
            </button>
          </div>
        ))}

        <button
          type="button"
          className="self-start rounded-lg border border-dashed border-slate-300 px-3 py-2 text-sm text-slate-600 hover:border-emerald-400 hover:text-emerald-700"
          onClick={onAdd}
        >
          {addButtonLabel}
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
