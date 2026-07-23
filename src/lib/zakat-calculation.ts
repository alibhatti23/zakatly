import type { AssetLineItem, NisabState, PreciousMetalItem } from "../types/zakat"
import { preciousMetalItemValue } from "./precious-metals"

export const ZAKAT_RATE = 0.025

export function lineItemsTotal(items: AssetLineItem[]): number {
  return items.reduce((sum, item) => sum + item.amount, 0)
}

export function goldSilverTotal(items: PreciousMetalItem[], nisab: NisabState): number {
  return items.reduce((sum, item) => sum + preciousMetalItemValue(item, nisab), 0)
}

export interface ZakatSummary {
  cashTotal: number
  goldSilverTotal: number
  grandTotal: number
  nisabValue: number | null
  isDue: boolean
  zakatAmount: number
}

export function summarizeZakat(
  cashItems: AssetLineItem[],
  metalItems: PreciousMetalItem[],
  nisab: NisabState,
  nisabValue: number | null,
): ZakatSummary {
  const cash = lineItemsTotal(cashItems)
  const metals = goldSilverTotal(metalItems, nisab)
  const grandTotal = cash + metals
  const isDue = nisabValue !== null && grandTotal >= nisabValue

  return {
    cashTotal: cash,
    goldSilverTotal: metals,
    grandTotal,
    nisabValue,
    isDue,
    zakatAmount: isDue ? grandTotal * ZAKAT_RATE : 0,
  }
}
