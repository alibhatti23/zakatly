import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useLanguage } from "../../context/use-language"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function BusinessAssetsCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const { t } = useLanguage()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title={t("businessAssetsTitle")}
      description={t("businessAssetsDescription")}
      items={assetCategories.businessAssets}
      currency={currency}
      itemLabelPlaceholder={t("businessAssetsPlaceholder")}
      addButtonLabel={t("businessAssetsAddButton")}
      onAdd={() => addAssetItem("businessAssets")}
      onUpdate={(id, updates) => updateAssetItem("businessAssets", id, updates)}
      onRemove={(id) => removeAssetItem("businessAssets", id)}
    />
  )
}
