import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function LiabilitiesCard() {
  const { nisab, liabilityItems, addLiabilityItem, updateLiabilityItem, removeLiabilityItem } =
    useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title="Liabilities"
      description="Add short-term debts due now, such as loans or bills, to deduct from your total."
      items={liabilityItems}
      currency={currency}
      itemLabelPlaceholder="e.g. Personal loan"
      addButtonLabel="Add liability"
      onAdd={addLiabilityItem}
      onUpdate={updateLiabilityItem}
      onRemove={removeLiabilityItem}
    />
  )
}
