import { z } from "zod";

const userSchema = z.object({
  name: z.string().nonempty("Họ và tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phoneNumber: z
    .string({ required_error: "Số điện thoại không được để trống" })
    .min(10, "Số điện thoại phải có ít nhất 10 ký tự")
    .max(15, "Số điện thoại không được vượt quá 15 ký tự")
    .regex(/^\+?\d+$/, "Số điện thoại không hợp lệ"),
});

export type IUser = z.infer<typeof userSchema>;

export default userSchema;
