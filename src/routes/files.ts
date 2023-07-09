import { Router } from "express";
import { filesSchema } from "../controllers/files/files.schema";
import { verified, verifiedFile } from "../middleware/verified";
import { uploadFiles } from "../controllers/files/files.controller";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

const storage = new GridFsStorage({
  url: process.env.DB ?? "",
});

const upload = multer({
  storage: storage,
});

const route = Router();

route.post(
  "/upload-file",
  verifiedFile(filesSchema, upload.single("file")),
  uploadFiles
);

export default route;
