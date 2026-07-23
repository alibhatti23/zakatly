import { createContext } from "react"
import type { CurrencyCode, NisabState } from "../types/zakat"

export interface ZakatContextValue {
  nisab: NisabState
  setCurrency: (currency: CurrencyCode) => void
  setGoldPricePerGram: (price: number | null) => void
  setSilverPricePerGram: (price: number | null) => void
}

export const ZakatContext = createContext<ZakatContextValue | null>(null)
