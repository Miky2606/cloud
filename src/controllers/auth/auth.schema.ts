import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email().nonempty(),
  user: z.string().nonempty(),
  password: z.string().nonempty(),
});
