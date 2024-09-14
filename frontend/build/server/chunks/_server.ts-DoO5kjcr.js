import { a as auth } from './auth-C_YzkYgM.js';
import { r as redirect } from './index-CCyR2w2-.js';
import 'pg';

const GET = async ({ locals }) => {
  if (!locals.user) {
    redirect(302, "/login");
  }
  await auth.invalidateSession(locals.session.id);
  locals.session = null;
  redirect(302, "/login");
};

export { GET };
//# sourceMappingURL=_server.ts-DoO5kjcr.js.map
