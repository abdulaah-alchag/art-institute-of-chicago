import { z } from "zod";

export const ArtSchema = z.object({
  api_link: z.url(),
  api_model: z.string(),
  id: z.number().int(),
  is_boosted: z.boolean(),
  thumbnail: z.object({
    alt_text: z.string(),
    height: z.number(),
    lqip: z.url(),
    width: z.number(),
  }),
  timestamp: z.string(),
  title: z.string().min(1),
  _score: z.number(),
});

export type Art = z.infer<typeof ArtSchema>;
