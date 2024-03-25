import { ACCEPTED_IMAGE_TYPES, MAX_FILE_SIZE } from "@/shared/consts";
import { z } from "zod";

export const productFormSchema = z.object({
  name: z
    .string({ required_error: "name field requierd!" })
    .min(2, { message: "name must be at least 2 characters" }),
  description: z.string({ required_error: "description field requierd!" }),
  image: z.instanceof(File),
  categoryId: z
    .number({ required_error: "categoryId field requierd!" })
    .positive({ message: "categoryId cannot be negative " })
    .nullable(),
  properties: z.array(z.object({ propertyId: z.number().nonnegative(), value: z.string() })),
  amount: z.number().nonnegative(),
  price: z.number().nonnegative(),
});
export type ProductFormSchema = z.infer<typeof productFormSchema>;
