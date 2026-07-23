import { NavLink } from "react-router-dom"
import { LanguageToggle } from "../components/language-toggle"
import { LogoMark } from "../components/logo-mark"
import { useLanguage } from "../context/use-language"

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-emerald-700" : "text-slate-500 hover:text-emerald-700"
  }`

export function SiteHeader() {
  const { t } = useLanguage()

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <div className="flex items-center gap-3">
          <LogoMark size={36} />
          <div>
            <h1 className="text-xl font-semibold text-emerald-700">{t("appTitle")}</h1>
            <p className="text-sm text-slate-500">{t("appSubtitle")}</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <NavLink to="/" end className={navLinkClass}>
            {t("navHome")}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {t("navAbout")}
          </NavLink>
          <NavLink to="/zakat-guide" className={navLinkClass}>
            {t("navGuide")}
          </NavLink>
        </nav>

        <LanguageToggle />
      </div>
    </header>
  )
}
