import { AssetLineItemsCard } from "../../components/asset-line-items-card"
import { useZakat } from "../../context/use-zakat"
import { CURRENCY_OPTIONS } from "../../lib/currency"

export function CashAndBankCard() {
  const { nisab, assetCategories, addAssetItem, updateAssetItem, removeAssetItem } = useZakat()
  const currency = CURRENCY_OPTIONS.find((option) => option.code === nisab.currency)!

  return (
    <AssetLineItemsCard
      title="Cash and bank"
      description="Add your savings, bank balances, wallets, and cash in hand."
      items={assetCategories.cash}
      currency={currency}
      itemLabelPlaceholder="e.g. Savings account"
      addButtonLabel="Add cash or bank entry"
      onAdd={() => addAssetItem("cash")}
      onUpdate={(id, updates) => updateAssetItem("cash", id, updates)}
      onRemove={(id) => removeAssetItem("cash", id)}
    />
  )
}
