import bcrypt from "bcrypt";

export const hash = async (password: string): Promise<string> => {
  return await bcrypt.hashSync(password, 10);
};

export const compare = async (password: string, comparePassword: string) => {
  return await bcrypt.compareSync(password, comparePassword);
};
