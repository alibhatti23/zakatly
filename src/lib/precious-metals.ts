import type { NisabState, PreciousMetalItem } from "../types/zakat"

export function preciousMetalItemValue(
  item: PreciousMetalItem,
  rates: Pick<NisabState, "goldPricePerGram" | "silverPricePerGram">,
): number {
  const pricePerGram = item.metal === "gold" ? rates.goldPricePerGram : rates.silverPricePerGram
  if (pricePerGram === null) return 0
  return item.grams * pricePerGram
}
