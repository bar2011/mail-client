import * as vercelDrizzle from "drizzle-orm/vercel-postgres";
import * as postgresDrizzle from "drizzle-orm/postgres-js";
import { sql } from "@vercel/postgres";
import postgres from "postgres";

import * as schema from "./schema.ts";
import { env } from "~/env.js";

let db:
  | postgresDrizzle.PostgresJsDatabase<typeof schema>
  | vercelDrizzle.VercelPgDatabase<typeof schema>;

if (env.DB_TYPE === "vercel-postgres") {
  // Use this object to send drizzle queries to your DB
  db = vercelDrizzle.drizzle(sql, { schema });
} else {
  /**
   * Cache the database connection in development. This avoids creating a new connection on every HMR
   * update.
   */
  const globalForDb = globalThis as unknown as {
    conn: postgres.Sql | undefined;
  };

  const conn = globalForDb.conn ?? postgres(env.POSTGRES_URL);
  if (env.NODE_ENV !== "production") globalForDb.conn = conn;

  db = postgresDrizzle.drizzle(conn, { schema });
}

export { db };
