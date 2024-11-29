"use client"

import { useEffect } from "react"
import Link from "next/link"
import { StateStore } from "@/store/ticketing"
import { create } from "zustand"

import { formatBytes } from "@/lib/size"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import ChatAssistant from "./chat"

const inital = {
  estimate: {
    quota: 0,
    usage: 0,
  },
}

const useStore = create<StateStore<typeof inital>>((set) => ({
  ...inital,
  update: (data) => set(data),
  reset: () => set(inital),
}))

export default function Home() {
  const { estimate, update } = useStore()

  useEffect(() => {
    navigator.storage.estimate().then((estimate) => {
      update({ estimate } as any)
    })
  }, [])

  return (
    <main className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-8">
      <ChatAssistant />
      {/* <Ws /> */}
      <Card>
        <CardHeader>
          <CardTitle>Links</CardTitle>
        </CardHeader>
        <CardContent>
          <Link href="/id" className="text-primary underline">
            <span>Dashboard</span>
          </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Usable Storage</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Quota: {formatBytes(estimate.quota)}</p>
          <p>Usage: {estimate.usage}%</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Usable Storage</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Quota: {formatBytes(estimate.quota)}</p>
          <p>Usage: {estimate.usage}%</p>
        </CardContent>
      </Card>
    </main>
  )
}
