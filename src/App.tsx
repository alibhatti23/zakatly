import { ZakatProvider } from "./context/zakat-provider"
import { LanguageProvider } from "./context/language-provider"
import { useLanguage } from "./context/use-language"
import { LanguageToggle } from "./components/language-toggle"
import { NisabSetupCard } from "./features/nisab-setup/nisab-setup-card"
import { CashAndBankCard } from "./features/cash-and-bank/cash-and-bank-card"
import { GoldSilverCard } from "./features/gold-silver/gold-silver-card"
import { InvestmentsCard } from "./features/investments/investments-card"
import { BusinessAssetsCard } from "./features/business-assets/business-assets-card"
import { RealEstateCard } from "./features/real-estate/real-estate-card"
import { LiabilitiesCard } from "./features/liabilities/liabilities-card"
import { FiqhStandardToggle } from "./features/fiqh-standard/fiqh-standard-toggle"
import { ResultSummaryCard } from "./features/result-summary/result-summary-card"

function AppShell() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-4">
          <div>
            <h1 className="text-xl font-semibold text-emerald-700">{t("appTitle")}</h1>
            <p className="text-sm text-slate-500">{t("appSubtitle")}</p>
          </div>
          <LanguageToggle />
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
        <LiabilitiesCard />
        <ResultSummaryCard />
      </main>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <ZakatProvider>
        <AppShell />
      </ZakatProvider>
    </LanguageProvider>
  )
}

export default App
