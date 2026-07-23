import { Route, Routes } from "react-router-dom"
import { ZakatProvider } from "./context/zakat-provider"
import { LanguageProvider } from "./context/language-provider"
import { SiteLayout } from "./layout/site-layout"
import { CalculatorPage } from "./pages/calculator-page"
import { AboutPage } from "./pages/about-page"
import { ZakatGuidePage } from "./pages/zakat-guide-page"
import { PrivacyPolicyPage } from "./pages/privacy-policy-page"

function App() {
  return (
    <LanguageProvider>
      <ZakatProvider>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route index element={<CalculatorPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="zakat-guide" element={<ZakatGuidePage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
          </Route>
        </Routes>
      </ZakatProvider>
    </LanguageProvider>
  )
}

export default App
