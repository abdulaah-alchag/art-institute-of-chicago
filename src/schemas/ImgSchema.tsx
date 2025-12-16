import { z } from "zod";

export const ImgSchema = z.object({
  id: z.number().int(),
  image_id: z.string(),
  title: z.string(),
});

export type Image = z.infer<typeof ImgSchema>;
