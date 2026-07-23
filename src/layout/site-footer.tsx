import { Link } from "react-router-dom"
import { useLanguage } from "../context/use-language"

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-700">
            {year} {t("footerRights")}
          </p>
          <p className="mt-1">{t("footerTagline")}</p>
        </div>

        <nav className="flex flex-wrap gap-4">
          <Link to="/about" className="hover:text-emerald-700">
            {t("navAbout")}
          </Link>
          <Link to="/zakat-guide" className="hover:text-emerald-700">
            {t("navGuide")}
          </Link>
          <Link to="/privacy" className="hover:text-emerald-700">
            {t("navPrivacy")}
          </Link>
          <a
            href="https://github.com/alibhatti23/zakatly"
            target="_blank"
            rel="noreferrer"
            className="hover:text-emerald-700"
          >
            {t("footerGithub")}
          </a>
        </nav>
      </div>
    </footer>
  )
}
