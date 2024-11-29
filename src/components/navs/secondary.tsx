import React, { ReactNode } from "react"

export default function SecondaryNav({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <aside className="w-full bg-muted/40 max-w-64 border-r" style={{}}>
      <div className="px-4 flex flex-col h-14 overflow-hidden border-b justify-center">
        <div className="flex items-center space-x-1 text-xs">
          <span>Lipy AI </span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <nav className="py-4">{children}</nav>
    </aside>
  )
}

// const nav = [
//   {
//     name: "My Inbox",
//     url: "/tickets?assignee=me",
//     // icon: Inbox,
//   },
//   {
//     name: "All Tickets",
//     url: "/tickets",
//     // icon: Users,
//   },
//   {
//     name: "Unassigned",
//     url: "/tickets",
//     // icon: Hourglass,
//   },
// ]
