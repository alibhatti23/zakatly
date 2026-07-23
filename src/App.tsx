import { ZakatProvider } from "./context/zakat-provider"
import { NisabSetupCard } from "./features/nisab-setup/nisab-setup-card"
import { CashAndBankCard } from "./features/cash-and-bank/cash-and-bank-card"

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
          <CashAndBankCard />
        </main>
      </div>
    </ZakatProvider>
  )
}

export default App
