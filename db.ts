import { drizzle } from "drizzle-orm/neon-http"
import { relations } from "./relations"

if (!process.env.DATABASE_URL) {
  throw new Error("Missing database url")
}

const db = drizzle(process.env.DATABASE_URL, { relations })

export default db