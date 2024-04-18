import { z } from "zod";

export const userAuthSchema = z.object({
  email: z
    .string({ required_error: "Поле обязательно" })
    .email({ message: "Некорректный адрес электронной почты" }),
  password: z.string({ required_error: "Поле обязательно" }),
});
export type UserAuthSchema = z.infer<typeof userAuthSchema>;
