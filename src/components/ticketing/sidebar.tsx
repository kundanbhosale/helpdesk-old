"use client"

import React from "react"
import dynamic from "next/dynamic"
import {
  ticketDetailsTab,
  ticketDetailsTabKeys,
  useTicketingStore,
} from "@/store/ticketing"
import { StarFilledIcon } from "@radix-ui/react-icons"
import { MoreVertical, Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

import { SkeletonBar } from "../ui/loader"

const sidebarData: Record<keyof typeof ticketDetailsTab, any> = {
  general: dynamic(() => import("@/components/ticketing/sidebar.general"), {
    ssr: false,
    loading: () => <SkeletonBar count={5} />,
  }),
  notes: dynamic(() => import("@/components/ticketing/sidebar.notes"), {
    ssr: false,
    loading: () => <SkeletonBar count={5} />,
  }),
  stats: dynamic(() => import("@/components/ticketing/sidebar.stats"), {
    ssr: false,
    loading: () => <SkeletonBar count={5} />,
  }),
  activity: dynamic(() => import("@/components/ticketing/sidebar.activity"), {
    ssr: false,
    loading: () => <SkeletonBar count={5} />,
  }),
}

export default function TickerSidebar() {
  return (
    <div className="h-screen overflow-y-auto">
      <TicketDetailsHead />
      <SideBar />
    </div>
  )
}

function TicketDetailsHead() {
  const { ticket, update } = useTicketingStore()

  return (
    <div className="sticky top-0 border-b py-2 px-4 z-[100] h-14 flex items-center bg-background">
      <div className="flex flex-1 items-center">
        <p className="text-lg font-medium">Details</p>
      </div>
      <div className="flex gap-1 h-8">
        <Toggle
          size={"icon"}
          variant={"default"}
          pressed={ticket.starred}
          onPressedChange={(val: boolean) =>
            update({ ticket: { starred: val } })
          }
        >
          {ticket.starred ? <StarFilledIcon /> : <Star />}
        </Toggle>
        <Button variant={"ghost"} size={"icon"}>
          <MoreVertical />
        </Button>
      </div>
    </div>
  )
}

function SideBar() {
  const { detailsTab, update } = useTicketingStore()

  const CurrComp = sidebarData[detailsTab]
  return (
    <div className="py-4 space-y-4">
      <div className="flex gap-4 items-center px-4">
        <Avatar className="size-9 border">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold line-clamp-1">Kundan Bhosale</p>
          <p className="text-xs line-clamp-1">#2334535</p>
        </div>
        <div className="flex gap-2 items-center"></div>
      </div>
      <div className="px-4">
        <p>Having issues with some ui blocks on android app.</p>
      </div>
      <Separator />
      <ToggleGroup
        type="single"
        className="px-4"
        value={detailsTab}
        onValueChange={(v: typeof detailsTab) => v && update({ detailsTab: v })}
      >
        {ticketDetailsTabKeys.map((key) => {
          const curr = ticketDetailsTab[key]
          return (
            <ToggleGroupItem value={key} aria-label={curr.aria_label} key={key}>
              <span>{curr.name}</span>
            </ToggleGroupItem>
          )
        })}
      </ToggleGroup>
      <Separator />
      {/* <div className="px-4 grid grid-cols-[100px,auto] items-center gap-3 [&_.label]:flex [&_.label]:gap-2 [&_.label>span]:truncate [&_.label]:items-center">
        {data.map((m, i) => (
          <Fragment key={i}>
            <p className="label">
              <span>{m.label}</span>
            </p>
            <div className="flex items-center gap-1">
              {m.value.image && (
                <span>
                  {
                    <div
                      className="size-6 rounded-md"
                      style={{
                        backgroundImage: `url(${m.value.image})`,
                        backgroundSize: "contain",
                      }}
                    />
                  }
                </span>
              )}
              <span>{m.value.text}</span>
            </div>
          </Fragment>
        ))}
      </div> */}
      {<CurrComp />}
    </div>
  )
}
