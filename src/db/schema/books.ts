import { boolean, date, jsonb, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const books = pgTable('books', {
  id: uuid().primaryKey().defaultRandom(),
  title: text().notNull(),
  author: text().notNull(),
  year: date(),
  sinopse: text(),
  genres: jsonb('genres').notNull(),
  comments: jsonb('comments').default([]),
  available: boolean().default(true),
  achievements: jsonb('achievements').default([]),
})

