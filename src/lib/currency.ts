import type { CurrencyOption } from "../types/zakat"

export const CURRENCY_OPTIONS: CurrencyOption[] = [
  { code: "PKR", label: "Pakistani Rupee", symbol: "Rs" },
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "SAR", label: "Saudi Riyal", symbol: "SR" },
  { code: "AED", label: "UAE Dirham", symbol: "AED" },
  { code: "GBP", label: "British Pound", symbol: "£" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "INR", label: "Indian Rupee", symbol: "₹" },
  { code: "BDT", label: "Bangladeshi Taka", symbol: "৳" },
]

export function formatAmount(amount: number, currency: CurrencyOption): string {
  const rounded = Math.round(amount * 100) / 100
  return `${currency.symbol} ${rounded.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}
