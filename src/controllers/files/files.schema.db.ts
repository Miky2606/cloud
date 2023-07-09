import { Schema, model } from "mongoose";

import { IFile, IFileAdapter } from "./files.schema";

const fileSchemaDb = new Schema<IFileAdapter>({
  id_user: { type: "string", required: true },
  name: { type: "string", required: true },
  category: { type: "string", required: true },
  subcategory: { type: "string", required: true },
  report: { type: "number", default: 3 },
  id_file: { type: "string", required: true },
});
const FileSchema = model<IFileAdapter>("File", fileSchemaDb);

export default FileSchema;
