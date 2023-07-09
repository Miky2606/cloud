import { IUser } from "./auth.schema";

export const adapterSignin = (data: any): IUser => {
  return {
    user: data.user ?? "",
    email: data.email ?? "",
    password: data.password ?? "",
  };
};

export const adapterLogin = (data: any): Omit<IUser, "user"> => {
  return {
    email: data.email ?? "",
    password: data.password ?? "",
  };
};
