import { uuid, text, pgTable } from "drizzle-orm/pg-core"

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  email: text().notNull(),
  password: text().notNull()
})
