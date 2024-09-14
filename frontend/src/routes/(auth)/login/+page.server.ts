import { db } from "$lib/server/db";
import { auth } from "$lib/server/auth";
import { Argon2id } from "oslo/password";
import { fail, redirect } from "@sveltejs/kit";
import { zod } from "sveltekit-superforms/adapters";
import { loginSchema } from "./login.schema";
import { superValidate } from "sveltekit-superforms/server";

export async function load({ locals }) {
  if (locals.user) {
    redirect(307, "/dashboard");
  }

  const form = await superValidate(zod(loginSchema));
  return { form };
}

export const actions = {
  default: async ({ request, cookies }) => {
    const form = await superValidate(request, zod(loginSchema));

    if (!form.valid) {
      form.errors.email = ["Invalid form submission."];
      return fail(400, { form });
    }

    try {
      const user = await db.query.users.findFirst({
        where: (table, { eq }) => eq(table.email, form.data.email)
      });

      if (!user) {
        form.errors.email = ["Invalid username or password."];
        return fail(400, { form });
      }

      const isValidPassword = await new Argon2id().verify(user.password, form.data.password);

      if (!isValidPassword) {
        form.errors.email = ["Invalid username or password."];
        return fail(400, { form });
      }

      const session = await auth.createSession(user.id, {});
      const sessionCookie = auth.createSessionCookie(session.id);

      cookies.set(sessionCookie.name, sessionCookie.value, {
        path: ".",
        ...sessionCookie.attributes
      });
    } catch (e) {
      console.error(e);
      form.errors.email = ["Something went wrong..."];
      return fail(500, { form });
    }

    redirect(302, "/dashboard");
  }
};
