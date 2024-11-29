"use client"

// import { SlackChat } from "@/components/chat/editor";
import React from "react"
import dynamic from "next/dynamic"

const Editor = dynamic(() => import("@/components/editors/notes"), {
  ssr: false,
})

const Page: React.FC = () => {
  return (
    <div className="p-8 flex-1">
      <div></div>
      <div>
        <Editor />
      </div>
    </div>
  )
}

export default Page
