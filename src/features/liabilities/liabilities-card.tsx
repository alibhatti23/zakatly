import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useLanguage } from "../../context/use-language"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function LiabilitiesCard() {
  const { nisab, liabilityItems, addLiabilityItem, updateLiabilityItem, removeLiabilityItem } =
    useZakat()
  const { t } = useLanguage()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title={t("liabilitiesTitle")}
      description={t("liabilitiesDescription")}
      items={liabilityItems}
      currency={currency}
      itemLabelPlaceholder={t("liabilitiesPlaceholder")}
      addButtonLabel={t("liabilitiesAddButton")}
      onAdd={addLiabilityItem}
      onUpdate={updateLiabilityItem}
      onRemove={removeLiabilityItem}
    />
  )
}
