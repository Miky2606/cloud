import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

export const verified =
  (schema: ZodSchema, cb: (req: Request, res: Response) => void) =>
  (req: Request, res: Response) => {
    const verified = schema.safeParse(req.body);

    if (!verified.success) {
      let message: string[] = [];
      verified.error.issues.map((e) => {
        message.push(`${e.path[0]}: ${e.message}`);
      });
      return res.status(400).json({ message: message });
    } else {
      return cb(req, res);
    }
  };
