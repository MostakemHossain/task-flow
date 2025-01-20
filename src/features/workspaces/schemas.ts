import { z } from "zod";
export const createWorkspaceSchema = z.object({
  name: z.string().min(1, "Name is required"),
  image: z.union([
    z.instanceof(File),
    z
      .string()
      .transform((value) => (value === "" ? undefined : value))
      .optional(),
  ]),
});
