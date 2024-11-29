"use client"

import React from "react"
import dynamic from "next/dynamic"
import { ArrowLeft, Plus, Save, Settings, Share, Star } from "lucide-react"

import { Button } from "@/components/ui/button"

const Editor = dynamic(() => import("@/components/editors/notes"), {
  ssr: false,
})

export default function Page() {
  return (
    <div className="flex-1 border-r">
      <div className="px-8 items-center h-14 border-b sticky top-0 z-50 bg-background flex justify-between">
        <div className="flex gap-2">
          <Button size={"icon-sm"} variant={"outline"}>
            <ArrowLeft />
          </Button>{" "}
          {/* <Input placeholder="Untitled Document" /> */}
        </div>
        <div className="flex items-center">
          <div className="flex gap-2 mr-2">
            <Button size={"sm"}>Edit Mode</Button>
            <Button size={"sm"} variant={"outline"}>
              Training Mode
            </Button>
          </div>
          <Button size="icon" variant={"ghost"}>
            <Save />
          </Button>
          <Button size="icon" variant={"ghost"}>
            <Star />
          </Button>
          <Button size="icon" variant={"ghost"}>
            <Share />
          </Button>
          <Button size="icon" variant={"ghost"}>
            <Settings />
          </Button>
        </div>
      </div>
      <div className="p-8 relative gap-8 grid grid-cols-[auto,250px]">
        <div>
          <div className="w-full">
            <div className="flex gap-4 bg-muted border h-24 group items-center justify-center relative">
              <Button
                variant={"link"}
                className="invisible group-hover:visible"
              >
                <Plus /> <span>Add Cover</span>
              </Button>
              <Button
                variant={"outline"}
                className="absolute -bottom-5 left-5 invisible group-hover:visible h-16 w-16"
              >
                <span>Icon</span>
              </Button>
            </div>
          </div>
          <Editor />
        </div>
        <div className="border rounded-md h-[85vh] sticky top-20">
          <div>Hello</div>
        </div>
      </div>
    </div>
  )
}
