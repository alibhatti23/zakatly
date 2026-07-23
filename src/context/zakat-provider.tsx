import { useMemo, useState, type ReactNode } from "react"
import type { NisabState } from "../types/zakat"
import { ZakatContext, type ZakatContextValue } from "./zakat-context"

export function ZakatProvider({ children }: { children: ReactNode }) {
  const [nisab, setNisab] = useState<NisabState>({
    currency: "PKR",
    goldPricePerGram: null,
    silverPricePerGram: null,
  })

  const value = useMemo<ZakatContextValue>(
    () => ({
      nisab,
      setCurrency: (currency) => setNisab((prev) => ({ ...prev, currency })),
      setGoldPricePerGram: (goldPricePerGram) =>
        setNisab((prev) => ({ ...prev, goldPricePerGram })),
      setSilverPricePerGram: (silverPricePerGram) =>
        setNisab((prev) => ({ ...prev, silverPricePerGram })),
    }),
    [nisab],
  )

  return <ZakatContext.Provider value={value}>{children}</ZakatContext.Provider>
}
