import { db } from "./db";
import { Lucia, TimeSpan } from "lucia";
import { users, sessions } from "./schema";
import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";

/**
 * Drizzle adapter for Lucia.
 */
// @ts-expect-error - It's fine really.
const adapter = new DrizzlePostgreSQLAdapter(db, sessions, users);

/**
 * An authentication middleware.
 */
export const auth = new Lucia(adapter, {
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

/**
 * Type signature of the authentication middleware.
 */
export type Auth = typeof auth;
