const TROY_OUNCE_IN_GRAMS = 31.1034768

export interface LiveMetalRates {
  goldPerGramUsd: number
  silverPerGramUsd: number
}

async function fetchOuncePriceUsd(symbol: "XAU" | "XAG"): Promise<number | null> {
  try {
    const response = await fetch(`https://api.gold-api.com/price/${symbol}`)
    if (!response.ok) return null

    const data: unknown = await response.json()
    if (
      typeof data === "object" &&
      data !== null &&
      "price" in data &&
      typeof (data as { price: unknown }).price === "number"
    ) {
      return (data as { price: number }).price
    }
    return null
  } catch {
    return null
  }
}

export async function fetchLiveMetalRates(): Promise<LiveMetalRates | null> {
  const [goldOunce, silverOunce] = await Promise.all([
    fetchOuncePriceUsd("XAU"),
    fetchOuncePriceUsd("XAG"),
  ])

  if (goldOunce === null || silverOunce === null) return null

  return {
    goldPerGramUsd: goldOunce / TROY_OUNCE_IN_GRAMS,
    silverPerGramUsd: silverOunce / TROY_OUNCE_IN_GRAMS,
  }
}
