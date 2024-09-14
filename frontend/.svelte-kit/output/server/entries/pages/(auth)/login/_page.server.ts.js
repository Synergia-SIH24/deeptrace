import { d as db, a as auth } from "../../../../chunks/auth.js";
import { verify } from "argon2";
import { r as redirect, f as fail } from "../../../../chunks/index.js";
import { i as parseRequest, j as mergeDefaults, m as mapErrors, r as replaceInvalidDefaults, k as zod, l as loginSchema } from "../../../../chunks/zod.js";
async function superValidate(data, adapter, options) {
  if (data && "superFormValidationLibrary" in data) {
    options = adapter;
    adapter = data;
    data = void 0;
  }
  const validator = adapter;
  const defaults = options?.defaults ?? validator.defaults;
  const jsonSchema = validator.jsonSchema;
  const parsed = await parseRequest(data, jsonSchema, options);
  const addErrors = options?.errors ?? (options?.strict ? true : !!parsed.data);
  const parsedData = options?.strict ? parsed.data ?? {} : mergeDefaults(parsed.data, defaults);
  let status;
  if (!!parsed.data || addErrors) {
    status = await /* @__PURE__ */ validator.validate(parsedData);
  } else {
    status = { success: false, issues: [] };
  }
  const valid = status.success;
  const errors = valid || !addErrors ? {} : mapErrors(status.issues, validator.shape);
  const dataWithDefaults = valid ? status.data : replaceInvalidDefaults(options?.strict ? mergeDefaults(parsedData, defaults) : parsedData, defaults, jsonSchema, status.issues, options?.preprocessed);
  let outputData;
  if (jsonSchema.additionalProperties === false) {
    outputData = {};
    for (const key of Object.keys(jsonSchema.properties ?? {})) {
      if (key in dataWithDefaults)
        outputData[key] = dataWithDefaults[key];
    }
  } else {
    outputData = dataWithDefaults;
  }
  const output = {
    id: parsed.id ?? options?.id ?? validator.id,
    valid,
    posted: parsed.posted,
    errors,
    data: outputData
  };
  if (!parsed.posted) {
    output.constraints = validator.constraints;
    if (Object.keys(validator.shape).length) {
      output.shape = validator.shape;
    }
  }
  return output;
}
async function load({ locals }) {
  if (locals.user) {
    redirect(307, "/dashboard");
  }
  const form = await superValidate(zod(loginSchema));
  return { form };
}
const actions = {
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
      const isValidPassword = await verify(form.data.password, user.password);
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
export {
  actions,
  load
};
