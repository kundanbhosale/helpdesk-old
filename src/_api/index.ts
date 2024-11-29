// index.ts
import { Hono } from "hono"

import authRoute from "./routes/auth"
import shopifyRoute from "./routes/shopify"
import webhooksRoute from "./routes/webhooks"

const app = new Hono().basePath("/api")
// app.basePath("/api")
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// app.use(async (c) => {
//   console.log(c.req.path)
// })
const routes = app
  .route("/webhook", webhooksRoute)
  .route("/auth", authRoute)
  .route("/shopify", shopifyRoute)

export default app
export type AppType = typeof routes
