import { z } from "zod";
import { authSchema } from "./auth.schema";

export const adapterLogin = (data: any): z.infer<typeof authSchema> => {
  return {
    user: data.user ?? "",
    email: data.email ?? "",
    password: data.password ?? "",
  };
};
