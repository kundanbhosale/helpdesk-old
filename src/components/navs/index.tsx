import { JSX, ReactNode } from "react"
import Link from "next/link"
import { BookText, Home, InboxIcon, LucideIcon, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type NavLinkType = {
  url: string
  icon?: LucideIcon | (() => JSX.Element)
  name: string
  active?: boolean
  expanded?: boolean
  badge?: ReactNode
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function NavLink(n: NavLinkType) {
  const Ico = n.icon

  return (
    <div>
      <Link
        className={cn(
          "flex gap-2 items-center justify-between font-medium text-foreground/70 [&_svg]:size-4 text-sm",
          n.active ? "bg-primary text-primary-foreground" : "hover:bg-accent",
          n.expanded && "px-4 w-full py-1"
        )}
        href={n.url}
      >
        <span className="flex items-center justify-start gap-1 truncate flex-1">
          {n.icon && (
            <span
              className={cn(
                "inline-flex items-center justify-center",
                `h-8 ${n.expanded ? "w-fit mr-1" : "w-8"}`
              )}
            >
              {Ico ? <Ico strokeWidth={2} /> : null}
            </span>
          )}
          {n.expanded && <span>{n.name}</span>}
        </span>
        {n.badge && (
          <span className="text-xs bg-accent border border-muted p-0.5">
            {n.badge}
          </span>
        )}
      </Link>
    </div>
  )
}

export const navs = (
  id: string
): Record<string, Record<string, Array<NavLinkType>>> => {
  return {
    primary: {
      default: [
        {
          name: "Dashboard",
          url: `/${id}`,
          icon: Home,
          active: false,
        },
        {
          name: "Help Desk",
          url: `/${id}/helpdesk`,
          icon: InboxIcon,
        },
        {
          name: "Knowledge Base",
          url: `/${id}/knowledge`,
          icon: BookText,
        },
      ],
      foot: [
        {
          name: "Settings",
          url: `/${id}/settings`,
          icon: Settings,
        },
        {
          name: "Profile",
          url: `/${id}/settings`,
          icon: Ava,
        },
      ],
    },
  }
}
function Ava() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}
