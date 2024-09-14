import { a as auth } from "../../../../chunks/auth.js";
import { r as redirect } from "../../../../chunks/index.js";
const GET = async ({ locals }) => {
  if (!locals.user) {
    redirect(302, "/login");
  }
  await auth.invalidateSession(locals.session.id);
  locals.session = null;
  redirect(302, "/login");
};
export {
  GET
};
