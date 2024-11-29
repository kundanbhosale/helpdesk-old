"use client"

import React, { useLayoutEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Separator } from "@radix-ui/react-separator"

import { NavLink, navs } from "./"

export default function PrimaryNav() {
  const path = usePathname()
  const [currentPath, setCurrentPath] = useState("/")

  useLayoutEffect(() => {
    const list = navs("id")
    Object.keys(list).forEach((a) => {
      Object.keys(list[a]).forEach((b) => {
        const r = list[a][b]
        if (r) {
          r.forEach((c) => {
            return path.includes(c.url) && setCurrentPath(c.url)
          })
        }
      })
    })
  }, [path])

  return (
    <aside className="flex flex-col overflow-y-auto bg-muted/90 border-r h-screen w-12 py-4">
      <div className="space-y-2 flex flex-col items-center">
        {navs("id").primary.default.map((n, i) => (
          <NavLink key={i} {...n} active={currentPath === n.url} />
        ))}
      </div>

      <div className="space-y-2 mt-auto flex flex-col items-center">
        <Separator />
        {navs("id").primary.foot.map((n, i) => (
          <NavLink key={i} {...n} active={currentPath === n.url} />
        ))}
      </div>
    </aside>
  )
}
