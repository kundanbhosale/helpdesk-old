"use client"

import React, { useEffect, useRef, useState } from "react"
import { ChevronUp, Paperclip } from "lucide-react"

import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { IMessage } from "./message.list"

const MessageBox = ({ onSend }: { onSend: (v: IMessage) => void }) => {
  const [text, setText] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = text || "Write your message..."
  }, [text])
  return (
    <div
      className="w-full sticky bottom-0 bg-background border-t p-4 flex flex-col"
      style={{ maxHeight: "500px" }}
    >
      <div
        ref={ref}
        contentEditable
        className="flex-1 overflow-auto min-h-10 outline-none"
        onInput={(e) => {
          setText(e.currentTarget.textContent || "")
        }}
      ></div>
      <div className="bg-muted p-1 rounded-md flex justify-between items-center">
        <Button variant="outline" size="icon-sm">
          <Paperclip />
        </Button>
        <div>
          <div className="overflow-hidden rounded-md flex items-center">
            <Button
              size="sm"
              className="px-2 rounded-none"
              disabled={!!text}
              onClick={() => {
                if (!text) return
                onSend({
                  sender: {
                    name: "Kundan Bhosale",
                    image: "https://github.com/shadcn.png",
                    id: "id",
                  },
                  type: "message",
                  content: text,
                  timestamp: new Date().toISOString(),
                  // reaction: "😀",
                })
                setText("")
              }}
            >
              Send Email
            </Button>
            <Separator orientation="vertical" />
            <Button size="sm" className="px-2 rounded-none">
              <ChevronUp />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageBox
