import { Outlet } from "react-router-dom"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  )
}
