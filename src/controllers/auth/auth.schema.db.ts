import { Schema, model } from "mongoose";

import { IUser } from "./auth.schema";

const userSchemaDb = new Schema<IUser>({
  user: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<IUser>("User", userSchemaDb);

export default User;
