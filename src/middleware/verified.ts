import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { connect } from "../db/connect.db";
import User from "../controllers/auth/auth.schema.db";
import mongoose from "mongoose";
import FileSchema from "../controllers/files/files.schema.db";

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

export const verifiedFile =
  (
    schema: ZodSchema,
    cb: (req: Request, res: Response, next: NextFunction) => void
  ) =>
  async (req: Request, res: Response, next: NextFunction) => {
    connect();
    const verified = schema.safeParse(req.headers);

    if (!verified.success) {
      let message: string[] = [];
      verified.error.issues.map((e) => {
        message.push(`${e.path[0]}: ${e.message}`);
      });
      return res.status(400).json({ message: message });
    } else {
      try {
        const find_user = await User.findById(req.headers.id_user);
        const find_file = await FileSchema.findOne({ name: req.headers.name });

        if (find_user === null)
          return res.status(404).json({
            message: "User not Exist",
          });

        if (find_file !== null)
          return res.status(400).json({
            message: "Another File has this Name",
          });

        return cb(req, res, next);
      } catch (error) {
        if (error instanceof mongoose.Error) {
          return res.status(500).json({
            message: "Error in the Database. The problem can be a error id",
          });
        }
        return res.status(500).json({
          message: "Error in the Network",
        });
      }
    }
  };
