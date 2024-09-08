import * as schema from "./schema";
import { env } from "$env/dynamic/private";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

/**
 * A Postgres connection pool.
 */
export const pool = new Pool({
  connectionString: env.DATABASE_URL
});

/**
 * The database instance.
 */
export const db = drizzle(pool, { schema });
