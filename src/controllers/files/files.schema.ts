import { z } from "zod";

export const filesSchema = z.object({
  id_user: z.string().nonempty(),
  category: z.string().nonempty(),
  subcategory: z.string().nonempty(),
  name: z.string().nonempty(),
});

export type IFile = z.infer<typeof filesSchema>;

export type IFileAdapter = IFile & {
  id_file: string;
  report: number;
};
