import { sql, relations } from "drizzle-orm";
import { pgTable, varchar, text, timestamp } from "drizzle-orm/pg-core";
import { d as private_env } from "./shared-server.js";
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { Lucia, TimeSpan } from "lucia";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
const users = pgTable("users", {
  id: varchar("id", { length: 16 }).notNull().primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  email: varchar("email", { length: 128 }).notNull(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").default(sql`CURRENT_TIMESTAMP`)
});
const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions)
}));
const sessions = pgTable("sessions", {
  id: varchar("id", { length: 128 }).notNull().primaryKey(),
  userId: varchar("user_id", { length: 16 }).notNull().references(() => users.id),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull()
});
const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.userId],
    references: [users.id]
  })
}));
const schema = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  sessions,
  sessionsRelations,
  users,
  usersRelations
}, Symbol.toStringTag, { value: "Module" }));
const pool = new pg.Pool({
  connectionString: private_env.DATABASE_URL
});
const db = drizzle(pool, { schema });
const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);
const auth = new Lucia(adapter, {
  sessionExpiresIn: new TimeSpan(7, "d"),
  sessionCookie: {
    name: "session",
    expires: true,
    attributes: {
      secure: true,
      sameSite: "strict"
    }
  },
  getUserAttributes({ name, email }) {
    return { name, email };
  }
});
export {
  auth as a,
  db as d
};
