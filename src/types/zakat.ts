export type CurrencyCode =
  | "PKR"
  | "USD"
  | "SAR"
  | "AED"
  | "GBP"
  | "EUR"
  | "INR"
  | "BDT"

export interface CurrencyOption {
  code: CurrencyCode
  label: string
  symbol: string
}

export type PreciousMetal = "gold" | "silver"

export interface NisabState {
  currency: CurrencyCode
  goldPricePerGram: number | null
  silverPricePerGram: number | null
  fiqhStandard: PreciousMetal
}

export interface AssetLineItem {
  id: string
  label: string
  amount: number
}

export type AssetCategoryKey = "cash" | "investments"

export interface PreciousMetalItem {
  id: string
  label: string
  metal: PreciousMetal
  grams: number
}
