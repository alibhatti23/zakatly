import { createContext } from "react"
import type { AssetLineItem, CurrencyCode, NisabState } from "../types/zakat"

export interface ZakatContextValue {
  nisab: NisabState
  setCurrency: (currency: CurrencyCode) => void
  setGoldPricePerGram: (price: number | null) => void
  setSilverPricePerGram: (price: number | null) => void

  cashItems: AssetLineItem[]
  addCashItem: () => void
  updateCashItem: (id: string, updates: Partial<Omit<AssetLineItem, "id">>) => void
  removeCashItem: (id: string) => void
}

export const ZakatContext = createContext<ZakatContextValue | null>(null)
