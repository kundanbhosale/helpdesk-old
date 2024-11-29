/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { z, ZodObject } from "zod"

import { ROLES } from "../constants/roles"

type ActionHandler<T extends ZodObject<any>> = {
  schema: { role: ROLES[]; validate: T }
  data: z.infer<T>
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint, @typescript-eslint/no-explicit-any
export function createActionHandler<T extends ZodObject<any>>(
  { schema, data }: ActionHandler<T>,
  cb: (parsed: { user: any; data: z.infer<T> }) => void
) {
  let parsed = data as z.infer<T>
  if (schema.validate) {
    parsed = schema.validate.parse(data)
  }

  const user = { name: "Kundan", id: 1 }
  return cb({
    user,
    data: parsed,
  })
}
