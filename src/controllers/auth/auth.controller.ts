import { Request, Response } from "express";
import { adapterLogin } from "./auth.adapter";

export const authLogin = (req: Request, res: Response) => {
  const request = adapterLogin(req.body);

  res.json({ user: request });
};
