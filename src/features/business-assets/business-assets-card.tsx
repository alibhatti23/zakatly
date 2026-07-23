import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function BusinessAssetsCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title="Business assets"
      description="Add the value of trade inventory and money owed to you by customers."
      items={assetCategories.businessAssets}
      currency={currency}
      itemLabelPlaceholder="e.g. Stock inventory"
      addButtonLabel="Add business asset"
      onAdd={() => addAssetItem("businessAssets")}
      onUpdate={(id, updates) => updateAssetItem("businessAssets", id, updates)}
      onRemove={(id) => removeAssetItem("businessAssets", id)}
      tooltipText="Trade inventory and receivables are zakatable since they are held for sale or expected to convert to cash."
    />
  )
}
