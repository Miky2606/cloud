import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email().nonempty(),
  user: z.string().nonempty(),
  password: z.string().nonempty(),
});

export const authSchemaLogin = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
});

export type IUser = z.infer<typeof authSchema>;
