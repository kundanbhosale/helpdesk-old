"use client"

import React, { Fragment, useEffect, useRef, useState } from "react"

import { Message } from "./message"
import MessageBox from "./message.box"

export type IMessage = {
  type: "message" | "notification" | "email"
  sender: {
    id: string
    name: string
    image: string
  }
  content: {
    text?: string
    email?: {
      to: string
      from: string
      reply_to?: string
      url: string
    }
  }
  tts?: boolean
  attachments?: Array<{
    id: string
    filename: string
    content_type: string
    url: string
    size: number
  }>
  reactions?: [{ emoji: string; user: string }]
  message_reference?: string
  timestamp: string
  edited_timestamp?: string
}

export default function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([
    // {
    //   sender: {
    //     name: "Kundan Bhosale",
    //     image: "https://github.com/shadcn.png",
    //     id: "id",
    //   },
    //   type: "email",
    //   content: {
    //     email: {
    //       to: "abc@xyz.com",
    //       from: "kundan@gmail.com",
    //       url: "/html/email1.html",
    //     },
    //   },
    //   timestamp: "2024-04-11T10:27:18.490Z",
    // },
    {
      sender: {
        name: "Kundan Bhosale",
        image: "https://github.com/shadcn.png",
        id: "id",
      },
      type: "message",
      content: {
        text: "Hello, I am trying to install you app and its too buggy, UI block are really not in place and are going outside screen. Ihave attached some photos.",
      },
      timestamp: "2024-09-11T10:27:18.490Z",
      // reaction: "😀",
    },
  ])

  const messagesContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight
    }
  }, [messages])

  const onSend = (m: IMessage) => {
    setMessages((p) => [...p, m])
  }

  return (
    <div
      className="flex flex-1 border-r h-screen flex-col overflow-y-auto"
      ref={messagesContainerRef}
    >
      <div className="p-4 flex flex-col justify-end flex-1 space-y-8">
        {messages.length > 0 ? (
          messages.map((m, i) => (
            <Fragment key={i}>
              <Message {...m} />
            </Fragment>
          ))
        ) : (
          <div>
            <p>No Messages Found...</p>
          </div>
        )}
      </div>
      <MessageBox onSend={onSend} />
    </div>
  )
}
