import { Request, Response } from "express";
import { connect } from "../../db/connect.db";
import mongoose from "mongoose";
import FileSchema from "./files.schema.db";
import { fileAdapter } from "./file.dapter";

interface FileRequired extends File {
  id: string;
}

export const uploadFiles = async (req: Request, res: Response) => {
  connect();
  try {
    const id = req.file! as any;
    const data = fileAdapter(req.headers, id.id ?? "");
    const save = new FileSchema(data);

    save.save();

    res.status(200).json({
      message: "File saved",
    });
  } catch (error) {
    if (error instanceof mongoose.Error)
      return res.status(500).json({
        message: "Error with the Database",
      });

    return res.status(500).json({
      message: "Error in the Network",
    });
  }
};
