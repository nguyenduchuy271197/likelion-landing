import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string().nonempty("Họ không được để trống"),
  lastName: z.string().nonempty("Tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string({ required_error: "Số điện thoại không được để trống" })
    .min(10, "Số điện thoại phải có ít nhất 10 ký tự")
    .max(15, "Số điện thoại không được vượt quá 15 ký tự")
    .regex(/^\+?\d+$/, "Số điện thoại không hợp lệ"),
  content: z.string(),
});

export type ContactForm = z.infer<typeof contactFormSchema>;

export default contactFormSchema;
