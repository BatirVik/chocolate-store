import { z } from "zod";

export const CreateUserScheme = z.object({
  email: z.string(),
});

export const ReadProductScheme = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  priceCents: z.number(),
});

export const ReadManyProductsScheme = z.array(ReadProductScheme);
