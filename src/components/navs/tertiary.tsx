"use client"

import React, { useEffect, useState } from "react"
import { Laptop, MessageSquarePlus, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "../ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group"

export default function Tertiary() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <aside className="flex flex-col items-center overflow-y-auto bg-muted/90 border-l h-screen w-12 py-4 gap-2">
      <div
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        className="space-y-2 flex-1"
      >
        <Button className="w-9 h-auto" variant="outline">
          <p>My Notes</p>
        </Button>

        <Button className="w-9 h-auto" variant="outline">
          <MessageSquarePlus />
        </Button>
      </div>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            {hasMounted && (
              <Button variant="outline" size={"icon"} className="w-9 h-9">
                {resolvedTheme === "dark" ? (
                  <Moon />
                ) : resolvedTheme === "light" ? (
                  <Sun />
                ) : null}
              </Button>
            )}
          </PopoverTrigger>
          <PopoverContent
            className="w-fit flex flex-col items-center p-1 bg-background"
            side="left"
            align="end"
          >
            <ToggleGroup
              type="single"
              value={theme}
              onValueChange={(v) => setTheme(v)}
            >
              <ToggleGroupItem size={"icon"} value="dark" className="size-7">
                <Moon />
              </ToggleGroupItem>
              <ToggleGroupItem size={"icon"} value="light" className="size-7">
                <Sun />
              </ToggleGroupItem>
              <ToggleGroupItem size={"icon"} value="system" className="size-7">
                <Laptop />
              </ToggleGroupItem>
            </ToggleGroup>
          </PopoverContent>
        </Popover>
      </div>
    </aside>
  )
}
