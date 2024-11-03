import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(3).max(128),
  password: z.string().min(3).max(32),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
