import { ZakatProvider } from "./context/zakat-provider"
import { NisabSetupCard } from "./features/nisab-setup/nisab-setup-card"
import { CashAndBankCard } from "./features/cash-and-bank/cash-and-bank-card"
import { GoldSilverCard } from "./features/gold-silver/gold-silver-card"
import { InvestmentsCard } from "./features/investments/investments-card"
import { BusinessAssetsCard } from "./features/business-assets/business-assets-card"
import { RealEstateCard } from "./features/real-estate/real-estate-card"
import { FiqhStandardToggle } from "./features/fiqh-standard/fiqh-standard-toggle"
import { ResultSummaryCard } from "./features/result-summary/result-summary-card"

function App() {
  return (
    <ZakatProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
            <h1 className="text-xl font-semibold text-emerald-700">Zakatly</h1>
            <p className="text-sm text-slate-500">Free, accurate Zakat calculator</p>
          </div>
        </header>

        <main className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-10">
          <NisabSetupCard />
          <FiqhStandardToggle />
          <CashAndBankCard />
          <GoldSilverCard />
          <InvestmentsCard />
          <BusinessAssetsCard />
          <RealEstateCard />
          <ResultSummaryCard />
        </main>
      </div>
    </ZakatProvider>
  )
}

export default App
