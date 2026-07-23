import { NisabSetupCard } from "../features/nisab-setup/nisab-setup-card"
import { CashAndBankCard } from "../features/cash-and-bank/cash-and-bank-card"
import { GoldSilverCard } from "../features/gold-silver/gold-silver-card"
import { InvestmentsCard } from "../features/investments/investments-card"
import { BusinessAssetsCard } from "../features/business-assets/business-assets-card"
import { RealEstateCard } from "../features/real-estate/real-estate-card"
import { LiabilitiesCard } from "../features/liabilities/liabilities-card"
import { FiqhStandardToggle } from "../features/fiqh-standard/fiqh-standard-toggle"
import { ResultSummaryCard } from "../features/result-summary/result-summary-card"

export function CalculatorPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
      <NisabSetupCard />
      <FiqhStandardToggle />
      <CashAndBankCard />
      <GoldSilverCard />
      <InvestmentsCard />
      <BusinessAssetsCard />
      <RealEstateCard />
      <LiabilitiesCard />
      <ResultSummaryCard />
    </main>
  )
}
