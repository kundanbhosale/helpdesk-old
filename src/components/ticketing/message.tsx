import React, { ReactNode } from "react"
import Image from "next/image"
import { MoreHorizontal, Plus, Reply, Smile } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { IMessage } from "./message.list"
import MessageMail from "./message.mail"
import MessageNotification from "./message.notify"

const MessageContext = React.createContext<IMessage>({} as IMessage)

function MessageHead() {
  const { sender, timestamp } = useMessage()
  return (
    <div className="flex items-center gap-1 font-medium">
      <Avatar className="size-6 border text-xs rounded-full">
        <AvatarImage src={sender.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="space-x-2">
        <span>{sender.name}</span>
        <span className="text-xs font-normal text-muted-foreground">
          {timestamp}
        </span>
      </div>
    </div>
  )
}

function MessageReference() {
  const { sender } = useMessage()

  return (
    <div className="bg-accent border p-1 rounded-md relative cursor-pointer hover:text-primary hover:bg-muted text-muted-foreground">
      <div className="border-y-2 border-l-2 h-9 w-2 rounded-l-lg absolute -left-2 -top-5 -z-1" />{" "}
      <p className="space-x-2 truncate flex-1 relative z-1">
        {" "}
        <span className="font-medium text-primary">{sender.name}</span>
        <span className="">
          This message is in reference to the old message I sent to you!
        </span>
      </p>
    </div>
  )
}

function MessageAttachments() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
      <div className="bg-accent border p-1 space-y-2 rounded-md hover:text-primary hover:bg-muted cursor-pointer object-contain">
        <div style={{ height: "200px" }}>
          <Image
            src="/assets/icons/file.png"
            alt=""
            width={250}
            height={250}
            className="object-contain w-full h-full"
          />
        </div>
        <Separator />
        <div className="px-2">
          <p className="font-medium break-all truncate">
            Lipys-secret-roadmap.png
          </p>
          <p className="text-xs text-muted-foreground">200kb</p>
        </div>
      </div>
      <div className="bg-accent border p-1 space-y-2 rounded-md hover:text-primary hover:bg-muted cursor-pointer">
        <div style={{ height: "200px" }}>
          <Image
            src="/img.webp"
            alt=""
            width={200}
            height={200}
            className="object-contain w-full h-full"
          />{" "}
        </div>
        <Separator />
        <div className="px-2">
          <p className="font-medium break-all truncate">
            Lipys-secret-roadmap.png
          </p>
          <p className="text-xs text-muted-foreground">200kb</p>
        </div>
      </div>
    </div>
  )
}

function MessageAction() {
  return (
    <div
      className="inline-flex border rounded-md gap-2 absolute -top-4 -right-2 transition-all ease-in-out duration-150 invisible group-hover:visible bg-background scale-0 group-hover:scale-100 p-1"
      style={{ transformOrigin: "right" }}
    >
      <Button size={"icon"} variant={"ghost"} className="size-6">
        <Reply />
      </Button>
      <Button size={"icon"} variant={"ghost"} className="size-6">
        <Smile />
      </Button>
      <Button size={"icon"} variant={"ghost"} className="size-6">
        <MoreHorizontal />
      </Button>
    </div>
  )
}

function MessageReaction() {
  return (
    <div className="relative h-2 z-1">
      <div className="inline-flex gap-1 group absolute top-0">
        <span className="bg-accent border rounded-md size-6 text-center text-base">
          😀
        </span>
        <span className="bg-accent border rounded-md size-6 justify-center text-center items-center flex opacity-0 group-hover:opacity-100">
          <Plus className="size-4" />
        </span>
      </div>
    </div>
  )
}

export function useMessage() {
  return React.useContext(MessageContext)
}

export function MessageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-1.5 group hover:bg-accent px-4 py-2 relative -z-1">
      <MessageHead />
      <MessageAction />
      {/* <MessageReference /> */}
      {children}
      {/* <MessageAttachments /> */}
      {/* <MessageReaction /> */}
    </div>
  )
}

export function Message(props: IMessage) {
  let renderer = null

  switch (props.type) {
    case "message":
      renderer = (
        <MessageWrapper>
          <MessageReference />
          <div className="">{props.content.text}</div> <MessageAttachments />
          <MessageReaction />
        </MessageWrapper>
      )
      break

    case "notification":
      renderer = <MessageNotification />
      break

    case "email":
      renderer = (
        <MessageWrapper>
          <MessageMail />
        </MessageWrapper>
      )
      break

    default:
      break
  }

  return (
    <MessageContext.Provider value={props}>{renderer}</MessageContext.Provider>
  )
}
