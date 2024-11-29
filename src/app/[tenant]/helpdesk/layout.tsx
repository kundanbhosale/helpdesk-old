import React, { Fragment, ReactNode } from "react"
import { formatRelative } from "date-fns"
import { Settings2 } from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import SecondaryNav from "@/components/navs/secondary"

const messages = [
  {
    name: "Kundan Bhosale",
    message: "Hello! How are you today?",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    timestamp: "2024-09-26T09:00:00Z",
    unread: 2,
  },
  {
    name: "Anjali Desai",
    message: "Looking forward to our meeting!",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    timestamp: "2024-09-26T09:15:00Z",
    unread: 1,
  },
  {
    name: "Rajesh Kumar",
    message: "Can you send me the report?",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    timestamp: "2024-09-26T09:30:00Z",
  },
  {
    name: "Sita Verma",
    message: "Let's catch up over coffee soon!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    timestamp: "2024-09-26T09:45:00Z",
    unread: 5,
  },
  {
    name: "Vikram Singh",
    message: "Great job on the presentation!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    timestamp: "2024-09-26T10:00:00Z",
  },
  {
    name: "Pooja Mehta",
    message: "Happy birthday! Hope you have a wonderful day!",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    timestamp: "2024-09-26T10:15:00Z",
  },
  {
    name: "Ravi Patel",
    message: "Thanks for your help with the project!",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    timestamp: "2024-09-26T10:30:00Z",
  },
  {
    name: "Neha Sharma",
    message: "Excited for the weekend trip!",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    timestamp: "2024-09-26T10:45:00Z",
  },
  {
    name: "Arjun Reddy",
    message: "Could you review my latest draft?",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    timestamp: "2024-09-26T11:00:00Z",
  },
  {
    name: "Sneha Joshi",
    message: "Let’s collaborate on this task!",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    timestamp: "2024-09-26T11:15:00Z",
  },
]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <SecondaryNav title="Ticketing">
        <div className="grid gap-4">
          <div className="px-4 flex justify-end gap-2">
            <Input placeholder="Search Customers..." className="flex-1" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"outline"}>
                  <Settings2 className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                // checked={showStatusBar}
                // onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  // checked={showActivityBar}
                  // onCheckedChange={setShowActivityBar}
                  disabled
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                // checked={showPanel}
                // onCheckedChange={setShowPanel}
                >
                  Panel
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex-1 p-1 px-2">
            {messages.map((v, i) => (
              <Fragment key={i}>
                <div
                  key={i}
                  className={cn(
                    "flex items-center hover:bg-muted/50 px-2 py-2 gap-3 cursor-pointer rounded-md",
                    i === 1 && "bg-background ring-1 ring-muted shadow-sm"
                  )}
                >
                  <span className="relative">
                    <Avatar className="size-8 text-xs brightness-90 shadow-sm">
                      <AvatarImage src={v.image} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </span>
                  <div className="text-sm flex-1">
                    <div className="flex gap-1 justify-between items-center">
                      <p className="block font-medium leading-tight line-clamp-1 flex-1">
                        {v.name}
                      </p>
                    </div>
                    <div className="flex gap-1 justify-between text-muted-foreground items-center text-xs">
                      <p className="line-clamp-1 flex-1">{v.message}</p>

                      {v.unread ? (
                        <Badge size={"sm"} className="shadow-lg">
                          {v.unread}
                        </Badge>
                      ) : (
                        <span>{formatRelative(new Date(), v.timestamp)}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </SecondaryNav>
      <div className="flex-1 flex flex-col overflow-y-auto">{children}</div>
    </>
  )
}
