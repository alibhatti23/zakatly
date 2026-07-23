import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useLanguage } from "../../context/use-language"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function InvestmentsCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const { t } = useLanguage()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title={t("investmentsTitle")}
      description={t("investmentsDescription")}
      items={assetCategories.investments}
      currency={currency}
      itemLabelPlaceholder={t("investmentsPlaceholder")}
      addButtonLabel={t("investmentsAddButton")}
      onAdd={() => addAssetItem("investments")}
      onUpdate={(id, updates) => updateAssetItem("investments", id, updates)}
      onRemove={(id) => removeAssetItem("investments", id)}
    />
  )
}
