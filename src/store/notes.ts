import { create } from "zustand"

interface NotesStore {
  open: boolean
  data?: {
    id: string
    name: string
    content: string
    owner: string
    created_at: string
    updated_at: string
  }
}

interface Actions {
  reset: () => void
}

const defaultData = {
  open: false,
  data: undefined,
}
export const usePersonalNotesStore = create<NotesStore & Actions>((set) => ({
  ...defaultData,
  reset: () => set({ data: undefined }),
}))
