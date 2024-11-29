"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    LipyWebchat: (val: unknown) => void
  }
}

const ChatAssistant = () => {
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const existingScript = document.getElementById("lipy-webchat-script")

      if (!existingScript) {
        const script = document.createElement("script")
        script.id = "lipy-webchat-script"
        script.src = "https://cdn.lipy.ai/packages/webchat.js"
        script.async = true

        const initializeChatAssistant = () => {
          window.LipyWebchat({
            apiKey: "jpuOopQ1ioamhrha8U2b8tjv0FrQoD",
            orgId: "9VkIngNwL0YW0irM",
          })
        }

        script.onload = initializeChatAssistant
        document.body.appendChild(script)
      }
    }, 100)
    return () => {
      clearTimeout(debounceTimeout)
      const script = document.getElementById("lipy-webchat-script")
      if (script) {
        script.onload = null
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}

export default ChatAssistant
