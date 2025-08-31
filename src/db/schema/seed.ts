import { reset, seed } from 'drizzle-seed'
import { db, sql } from '../connection.ts'
import { schema } from './index.ts'

async function main() {
  await reset(db, schema)
  
  await seed(db, schema).refine((f) => {
    return {
      users: {
        count: 10,
        columns: {
          name: f.fullName(),
          email: f.email(),
        },
      },
    }
  })
  
  await sql.end()
  
  // biome-ignore lint/suspicious/noConsole: only used in dev
  console.log('Database seeded')

}

main()