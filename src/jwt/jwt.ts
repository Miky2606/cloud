import jwt from "jsonwebtoken";

const secret = process.env.SECRET ?? "";
export const createToken = async (
  data: string,
  time: number | string
): Promise<string> => {
  const token = await jwt.sign({ id: data }, secret, {
    expiresIn: time,
  });

  return token;
};

export const verifyToken = async (token: string) => {
  const id = (await jwt.decode(token)) as jwt.JwtPayload;
  return id;
};
