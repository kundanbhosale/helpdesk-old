import { createActionHandler } from "../helpers/factory"
import { noteValidationSchema } from "../schema/notes"

export const updateNote = createActionHandler(
  {
    schema: noteValidationSchema.update,
    data: {
      id: "",
    },
  },
  (cb) => {
    console.log(cb.data.id)
  }
)
