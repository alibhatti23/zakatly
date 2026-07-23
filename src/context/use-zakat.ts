import { useContext } from "react"
import { ZakatContext, type ZakatContextValue } from "./zakat-context"

export function useZakat(): ZakatContextValue {
  const context = useContext(ZakatContext)
  if (!context) {
    throw new Error("useZakat must be used within a ZakatProvider")
  }
  return context
}
