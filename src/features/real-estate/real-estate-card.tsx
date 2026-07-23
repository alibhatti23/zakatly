import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useLanguage } from "../../context/use-language"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function RealEstateCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const { t } = useLanguage()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title={t("realEstateTitle")}
      description={t("realEstateDescription")}
      items={assetCategories.realEstate}
      currency={currency}
      itemLabelPlaceholder={t("realEstatePlaceholder")}
      addButtonLabel={t("realEstateAddButton")}
      onAdd={() => addAssetItem("realEstate")}
      onUpdate={(id, updates) => updateAssetItem("realEstate", id, updates)}
      onRemove={(id) => removeAssetItem("realEstate", id)}
      tooltipText="Property held for investment or resale is zakatable at its market value. A primary residence is not."
    />
  )
}
