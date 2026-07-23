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

export interface NisabState {
  currency: CurrencyCode
  goldPricePerGram: number | null
  silverPricePerGram: number | null
}
