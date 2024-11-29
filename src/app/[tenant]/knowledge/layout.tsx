import React, { Fragment, ReactNode } from "react"
import { formatRelative } from "date-fns"
import { ArrowRight, File, Pin, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import SecondaryNav from "@/components/navs/secondary"

const list = [
  {
    name: "Refund Policy docs",
    timestamp: "2024-09-26T09:00:00Z",
    pinned: true,
  },
  {
    name: "Getting Started Guide",
    timestamp: "2024-09-15T10:30:00Z",
    pinned: false,
  },
  {
    name: "Pricing and Billing FAQ",
    timestamp: "2024-09-20T14:00:00Z",
    pinned: true,
  },
  {
    name: "Account Management",
    timestamp: "2024-09-18T12:00:00Z",
    pinned: false,
  },
  {
    name: "Troubleshooting Common Issues",
    timestamp: "2024-09-22T08:15:00Z",
    pinned: true,
  },
]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SecondaryNav title="Notes">
        <div className="grid gap-4">
          <div className="px-4 flex justify-end gap-2">
            <Input placeholder="Search Customers..." className="flex-1" />
            <Button size={"icon"} variant={"outline"}>
              <Search />
            </Button>
          </div>
          <div className="flex-1 p-1 px-2">
            {list.map((v, i) => (
              <Fragment key={i}>
                <div
                  key={i}
                  className={cn(
                    "flex items-center px-2 py-2 gap-3 cursor-pointer rounded-md",
                    i === 1
                      ? "bg-primary/20 ring-1 ring-muted shadow-sm"
                      : "hover:bg-muted"
                  )}
                >
                  <span className="relative">
                    <div className="flex justify-center items-center">
                      <File className="size-4 stroke-muted-foreground" />
                    </div>
                  </span>
                  <div className="text-sm flex-1 flex">
                    <div className="flex-1">
                      <p className="font-medium leading-tight line-clamp-1">
                        {v.name}
                      </p>
                    </div>
                    <div className="flex gap-1 justify-between text-muted-foreground items-center text-xs">
                      {/* 
                      {v.unread ? (
                        <Badge size={"sm"} className="shadow-lg">
                          {v.unread}
                        </Badge>
                      ) : (
                        <span>{formatRelative(new Date(), v.timestamp)}</span>
                      )} */}
                      <Button variant={"ghost"} className="p-0 h-fit">
                        <Pin className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </SecondaryNav>
      <div className="flex-1 flex flex-col overflow-y-auto h-screen">
        {children}
      </div>
    </>
  )
}
