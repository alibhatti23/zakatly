import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function RealEstateCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title="Real estate"
      description="Add property held for investment or resale. Your own home is not zakatable."
      items={assetCategories.realEstate}
      currency={currency}
      itemLabelPlaceholder="e.g. Rental plot"
      addButtonLabel="Add property"
      onAdd={() => addAssetItem("realEstate")}
      onUpdate={(id, updates) => updateAssetItem("realEstate", id, updates)}
      onRemove={(id) => removeAssetItem("realEstate", id)}
      tooltipText="Property held for investment or resale is zakatable at its market value. A primary residence is not."
    />
  )
}
