import "server-only"

import z from "zod"

import { roleGroups } from "../constants/roles"

const update = z.object({
  id: z.string().uuid(),
})

export const noteValidationSchema = {
  update: {
    role: roleGroups.editor,
    validate: update,
  },
  delete: {
    role: roleGroups.editor,
    validate: update,
  },
}
