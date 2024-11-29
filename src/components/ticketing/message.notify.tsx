import { InstagramLogoIcon } from "@radix-ui/react-icons"

import { useMessage } from "./message"

export default function MessageNotification() {
  const { content } = useMessage()
  return (
    <div className="flex items-center text-sm py-6">
      <div className="h-px w-max bg-border flex-1" />
      <div className="px-4 flex gap-1 items-center">
        <InstagramLogoIcon />
        <span>{content.text}</span>
      </div>
      <div className="h-px  w-max bg-border flex-1" />
    </div>
  )
}
