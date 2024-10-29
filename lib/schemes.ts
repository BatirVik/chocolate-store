import { z } from "zod";

export const createUserScheme = z.object({
  email: z.string(),
});
