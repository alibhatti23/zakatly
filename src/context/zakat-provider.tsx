import { useMemo, useState, type ReactNode } from "react"
import { createId } from "../lib/id"
import type { AssetLineItem, NisabState, PreciousMetalItem } from "../types/zakat"
import { ZakatContext, type ZakatContextValue } from "./zakat-context"

export function ZakatProvider({ children }: { children: ReactNode }) {
  const [nisab, setNisab] = useState<NisabState>({
    currency: "PKR",
    goldPricePerGram: null,
    silverPricePerGram: null,
    fiqhStandard: "gold",
  })

  const [cashItems, setCashItems] = useState<AssetLineItem[]>([])
  const [goldSilverItems, setGoldSilverItems] = useState<PreciousMetalItem[]>([])

  const value = useMemo<ZakatContextValue>(
    () => ({
      nisab,
      setCurrency: (currency) => setNisab((prev) => ({ ...prev, currency })),
      setGoldPricePerGram: (goldPricePerGram) =>
        setNisab((prev) => ({ ...prev, goldPricePerGram })),
      setSilverPricePerGram: (silverPricePerGram) =>
        setNisab((prev) => ({ ...prev, silverPricePerGram })),
      setFiqhStandard: (fiqhStandard) => setNisab((prev) => ({ ...prev, fiqhStandard })),

      cashItems,
      addCashItem: () =>
        setCashItems((prev) => [...prev, { id: createId(), label: "", amount: 0 }]),
      updateCashItem: (id, updates) =>
        setCashItems((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...updates } : item)),
        ),
      removeCashItem: (id) => setCashItems((prev) => prev.filter((item) => item.id !== id)),

      goldSilverItems,
      addGoldSilverItem: () =>
        setGoldSilverItems((prev) => [
          ...prev,
          { id: createId(), label: "", metal: "gold", grams: 0 },
        ]),
      updateGoldSilverItem: (id, updates) =>
        setGoldSilverItems((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...updates } : item)),
        ),
      removeGoldSilverItem: (id) =>
        setGoldSilverItems((prev) => prev.filter((item) => item.id !== id)),
    }),
    [nisab, cashItems, goldSilverItems],
  )

  return <ZakatContext.Provider value={value}>{children}</ZakatContext.Provider>
}
