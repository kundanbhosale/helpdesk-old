import { create } from "zustand"

export const ticketDetailsTab = {
  general: {
    name: "General",
    aria_label: "Toggle Ticket General Information",
  },
  notes: {
    name: "Notes",
    aria_label: "Toggle Ticket Notes",
  },
  stats: {
    name: "Stats",
    aria_label: "Toggle Ticket Stats",
  },
  activity: {
    name: "Activity",
    aria_label: "Toggle Ticket Activity",
  },
}

export const ticketDetailsTabKeys = Object.keys(
  ticketDetailsTab
) as unknown as Array<keyof typeof ticketDetailsTab>

interface TicketingStore {
  detailsTab: keyof typeof ticketDetailsTab
  customer?: {
    name: string
    phone: string
    email: string
    id: string
    address: string
  }
  assignee?: {
    name: string
    phone: string
    email: string
    id: string
  }
  ticket: {
    id: string
    subject: string
    assignee: string
    customer: string
    team: string
    starred: boolean
    status: string
    created_at: string
  }
}

interface TicketMessagesStore {
  messages: Array<{
    sender: {
      id: string
      name: string
      picture: string
    }
    receiver: {
      id: string
      name: string
      picture: string
    }
    content: {
      type: string
      text: string
      attachments: string[]
      reaction: string
    }
    sent_at: string
  }>
}

interface RecentCustomerListStore {
  customers: Array<{
    name: string
    id: string
    picture: string
    unread_count: number
    last_message: string
  }>
}

export type StateStore<T> = T & {
  update: (data: Partial<T>) => void
  reset?: () => void
}

const defaultData = {
  detailsTab: ticketDetailsTabKeys[0],
  assignee: undefined,
  customer: undefined,
  ticket: {
    id: "",
    subject: "",
    assignee: "",
    customer: "",
    team: "",
    starred: false,
    status: "",
    created_at: "",
  },
}

const customersData = {
  customers: [],
}

const messagesData = {
  messages: [],
}

export const useTicketingStore = create<StateStore<TicketingStore>>((set) => ({
  ...defaultData,
  update: (data) => set(data),
  reset: () => set(defaultData),
}))

export const useTicketMessagesStore = create<StateStore<TicketMessagesStore>>(
  (set) => ({
    ...messagesData,
    update: (data) => set(data),
    reset: () => set(messagesData),
  })
)

export const useRecentCustomerListStore = create<
  StateStore<RecentCustomerListStore>
>((set) => ({
  ...customersData,
  update: (data) => set(data),
  reset: () => set(customersData),
}))
