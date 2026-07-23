import { createContext } from "react"
import type {
  AssetLineItem,
  CurrencyCode,
  NisabState,
  PreciousMetal,
  PreciousMetalItem,
} from "../types/zakat"

export interface ZakatContextValue {
  nisab: NisabState
  setCurrency: (currency: CurrencyCode) => void
  setGoldPricePerGram: (price: number | null) => void
  setSilverPricePerGram: (price: number | null) => void
  setFiqhStandard: (standard: PreciousMetal) => void

  cashItems: AssetLineItem[]
  addCashItem: () => void
  updateCashItem: (id: string, updates: Partial<Omit<AssetLineItem, "id">>) => void
  removeCashItem: (id: string) => void

  goldSilverItems: PreciousMetalItem[]
  addGoldSilverItem: () => void
  updateGoldSilverItem: (id: string, updates: Partial<Omit<PreciousMetalItem, "id">>) => void
  removeGoldSilverItem: (id: string) => void
}

export const ZakatContext = createContext<ZakatContextValue | null>(null)
