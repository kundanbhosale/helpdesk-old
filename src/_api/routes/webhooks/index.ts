import { Hono } from "hono"

const app = new Hono()

app.post("/shopify", (c) => {
  return c.json("null", 200)
})

export default app
