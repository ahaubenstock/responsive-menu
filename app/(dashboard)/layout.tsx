import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({ children }: {
  children: ReactNode
}) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="h-[60px] bg-slate-700">
      </div>
      <div className="flex flex-1">
        <div className="w-[300px] bg-slate-700 border-t border-t-slate-800 flex flex-col">
          <Link href="/overview">OVERVIEW</Link>
          <Link href="/settings">SETTINGS</Link>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}
