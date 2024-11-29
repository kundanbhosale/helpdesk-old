import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "../ui/button"
import { useMessage } from "./message"

export default function MessageMail() {
  const ref = useRef<HTMLIFrameElement>(null)
  const message = useMessage()
  const [expand, setExpand] = useState(false)

  function resizeIFrameToFitContent(target: HTMLIFrameElement) {
    //   el.width = (el.contentWindow?.document.body.scrollWidth || 0) + "px"
    //   el.height = (el.contentWindow?.document.body.scrollHeight || 0) + "px"

    const el = ref.current || target

    const win = el.contentWindow
    const doc = win?.document
    const html = doc?.documentElement
    const body = doc?.body
    const ifrm = el // or win.frameElement

    if (body) {
      body.style.overflowX = "scroll" // scrollbar-jitter fix
      body.style.overflowY = "hidden"
    }
    if (html) {
      html.style.overflowX = "scroll" // scrollbar-jitter fix
      html.style.overflowY = "hidden"
      html.style.margin = "0px"
      var style = win?.getComputedStyle(html)
      ifrm.width = parseInt(style?.getPropertyValue("width") || "0") + "px" // round value
      ifrm.height = parseInt(style?.getPropertyValue("height") || "0") + "px"
    }
  }

  useEffect(() => {
    if (!ref.current) return
    resizeIFrameToFitContent(ref.current)
  }, [expand])

  return (
    <div className="relative space-y-2" style={{ maxWidth: "800px" }}>
      <div
        className="border relative transition-all ease-out duration-1000"
        style={{ overflow: "hidden", height: expand ? "auto" : "300px" }}
      >
        <iframe
          ref={ref}
          id="inlineFrameExample"
          title="Inline Frame Example"
          src="/emails/email1.html"
          className="overflow-hidden"
          style={{ width: "100%" }}
          onLoad={(e) => resizeIFrameToFitContent(e.currentTarget)}
        ></iframe>
      </div>
      <div className="absolute inset-x-0 -bottom-4 flex justify-center items-center">
        <Button
          variant={"outline"}
          size={"sm"}
          className="rounded-full text-sm"
          onClick={() => setExpand((p) => !p)}
        >
          <ChevronsUpDown />
        </Button>
      </div>
    </div>
  )
}
