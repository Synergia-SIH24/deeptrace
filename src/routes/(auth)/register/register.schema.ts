import { z } from "zod";

/**
 * Schema of the register form.
 */
export const registerSchema = z.object({
  email: z.string(),
  password: z.string(),
  confirmPassword: z.string()
});
