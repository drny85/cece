import { z } from "zod";
export enum ItemSizes {
  XS = "SX",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}
export const ItemSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  category: z.string(),
  tag: z.string(),
  description: z.string(),
  price: z.number().positive(),
  image: z.string(),
  available: z.boolean(),
  colors: z.array(z.string()),
  images: z.array(z.string()),
  sizes: z.array(z.nativeEnum(ItemSizes)),
});

export type Item = z.infer<typeof ItemSchema>;
