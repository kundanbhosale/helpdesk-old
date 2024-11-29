import React from "react"

import MessageList from "@/components/ticketing/message.list"
import TickerSidebar from "@/components/ticketing/sidebar"

export default function Page() {
  return (
    <>
      <div className="flex flex-1 text-sm">
        <MessageList />
        <div className="w-80">
          <TickerSidebar />
        </div>
      </div>
    </>
  )
}
