import type { AssetCategoryKey } from "../types/zakat"

export const ASSET_CATEGORY_LABELS: Record<AssetCategoryKey, string> = {
  cash: "Cash and bank",
  investments: "Investments",
  businessAssets: "Business assets",
  realEstate: "Real estate",
}

export const ASSET_CATEGORY_ORDER: AssetCategoryKey[] = [
  "cash",
  "investments",
  "businessAssets",
  "realEstate",
]
