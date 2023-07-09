import { IFile, IFileAdapter } from "./files.schema";

export const fileAdapter = (
  data: any,
  id_file: string
): Omit<IFileAdapter, "report"> => {
  return {
    id_user: data.id_user ?? "",
    name: data.name ?? "",
    category: data.category ?? "",
    subcategory: data.subcategory ?? "",
    id_file: id_file ?? "",
  };
};
