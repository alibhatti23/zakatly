import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useLanguage } from "../../context/use-language"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function CashAndBankCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const { t } = useLanguage()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title={t("cashTitle")}
      description={t("cashDescription")}
      items={assetCategories.cash}
      currency={currency}
      itemLabelPlaceholder={t("cashPlaceholder")}
      addButtonLabel={t("cashAddButton")}
      onAdd={() => addAssetItem("cash")}
      onUpdate={(id, updates) => updateAssetItem("cash", id, updates)}
      onRemove={(id) => removeAssetItem("cash", id)}
      tooltipText="Cash, savings, and bank balances are fully zakatable each year since they are held wealth, not fixed assets."
    />
  )
}
