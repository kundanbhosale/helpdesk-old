import React from "react"
import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex flex-1 text-sm p-8">
      <Link href={"/id/helpdesk"} className={buttonVariants({})}>
        Help Desk
      </Link>
    </div>
  )
}
