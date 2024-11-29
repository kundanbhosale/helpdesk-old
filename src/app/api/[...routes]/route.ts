import app from "@/_api"
import { handle } from "hono/vercel"

export const OPTIONS = handle(app)
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
