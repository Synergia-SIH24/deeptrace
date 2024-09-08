import { z } from "zod";

/**
 * Schema of the log in form.
 */
export const loginSchema = z.object({
  email: z.string(),
  password: z.string()
});
