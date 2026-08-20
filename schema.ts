import { uuid, text, pgTable } from "drizzle-orm/pg-core"

export const usersTable = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  firstName: text().notNull(),
  lastName: text().notNull(),
  email: text().notNull(),
})
