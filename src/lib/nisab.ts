import type { NisabState } from "../types/zakat"

export const GOLD_NISAB_GRAMS = 87.48
export const SILVER_NISAB_GRAMS = 612.36

export function calculateGoldNisabValue(goldPricePerGram: number): number {
  return goldPricePerGram * GOLD_NISAB_GRAMS
}

export function calculateSilverNisabValue(silverPricePerGram: number): number {
  return silverPricePerGram * SILVER_NISAB_GRAMS
}

export function activeNisabValue(nisab: NisabState): number | null {
  if (nisab.fiqhStandard === "gold") {
    return nisab.goldPricePerGram !== null ? calculateGoldNisabValue(nisab.goldPricePerGram) : null
  }
  return nisab.silverPricePerGram !== null
    ? calculateSilverNisabValue(nisab.silverPricePerGram)
    : null
}
