import { jsonb, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  email: text().notNull(),
  password: text().notNull(),
  booksRead: jsonb('books_read').default([]),
  favoriteBooks: jsonb('favorite_books').default([]),
  mostReadGenres: jsonb('most_read_genres').default([]),
})
