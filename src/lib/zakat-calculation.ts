import type { AssetCategoryKey, AssetLineItem, NisabState, PreciousMetalItem } from "../types/zakat"
import { preciousMetalItemValue } from "./precious-metals"

export const ZAKAT_RATE = 0.025

export function lineItemsTotal(items: AssetLineItem[]): number {
  return items.reduce((sum, item) => sum + item.amount, 0)
}

export function goldSilverTotal(items: PreciousMetalItem[], nisab: NisabState): number {
  return items.reduce((sum, item) => sum + preciousMetalItemValue(item, nisab), 0)
}

export interface ZakatSummary {
  categoryTotals: Record<AssetCategoryKey, number>
  goldSilverTotal: number
  liabilitiesTotal: number
  grandTotal: number
  nisabValue: number | null
  isDue: boolean
  zakatAmount: number
}

export function summarizeZakat(
  assetCategories: Record<AssetCategoryKey, AssetLineItem[]>,
  metalItems: PreciousMetalItem[],
  liabilityItems: AssetLineItem[],
  nisab: NisabState,
  nisabValue: number | null,
): ZakatSummary {
  const categoryTotals = Object.fromEntries(
    Object.entries(assetCategories).map(([category, items]) => [
      category,
      lineItemsTotal(items),
    ]),
  ) as Record<AssetCategoryKey, number>

  const categorySum = Object.values(categoryTotals).reduce((sum, value) => sum + value, 0)
  const metals = goldSilverTotal(metalItems, nisab)
  const liabilities = lineItemsTotal(liabilityItems)
  const grandTotal = Math.max(0, categorySum + metals - liabilities)
  const isDue = nisabValue !== null && grandTotal >= nisabValue

  return {
    categoryTotals,
    goldSilverTotal: metals,
    liabilitiesTotal: liabilities,
    grandTotal,
    nisabValue,
    isDue,
    zakatAmount: isDue ? grandTotal * ZAKAT_RATE : 0,
  }
}
