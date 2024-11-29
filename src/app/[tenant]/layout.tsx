import React, { ReactNode } from "react"

import PrimaryNav from "@/components/navs/primary"
import Tertiary from "@/components/navs/tertiary"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen overflow-hidden">
      <PrimaryNav />
      {children}
      <Tertiary />
    </main>
  )
}
