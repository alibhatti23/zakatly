import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function InvestmentsCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title="Investments"
      description="Add the current market value of stocks, crypto, and sukuk you hold."
      items={assetCategories.investments}
      currency={currency}
      itemLabelPlaceholder="e.g. Stock portfolio"
      addButtonLabel="Add investment"
      onAdd={() => addAssetItem("investments")}
      onUpdate={(id, updates) => updateAssetItem("investments", id, updates)}
      onRemove={(id) => removeAssetItem("investments", id)}
    />
  )
}
