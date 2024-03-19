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
  percentageOff: z.number().optional(),
  name: z.string(),
  category: z.string(),
  tags: z.array(z.string()),
  description: z.string(),
  careInstruction: z.string().optional(),
  price: z.number().positive(),
  image: z.string(),
  available: z.boolean(),
  colors: z.array(
    z.object({
      color: z.string(),
      availableSizes: z.array(
        z.object({
          size: z.nativeEnum(ItemSizes),
          quantity: z.number().positive(),
        })
      ),
    })
  ),
  images: z.array(z.string()),
  sizes: z.array(z.nativeEnum(ItemSizes)),
});

export type Item = z.infer<typeof ItemSchema>;
