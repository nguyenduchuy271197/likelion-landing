import { z } from "zod";

export const checkoutSchema = z.object({
  name: z.string().nonempty("Họ và tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string({ required_error: "Số điện thoại không được để trống" })
    .min(10, "Số điện thoại phải có ít nhất 10 ký tự")
    .max(15, "Số điện thoại không được vượt quá 15 ký tự")
    .regex(/^\+?\d+$/, "Số điện thoại không hợp lệ"),
  address: z.string().nonempty("Địa chỉ không được để trống"),
  province: z.string().nonempty("Tỉnh/thành phố không được để trống"),
  district: z.string().nonempty("Quận/huyện không được để trống"),
  ward: z.string().nonempty("Phường/xã không được để trống"),
  tuition_option: z.string(),
  couponCode: z.string(),
});

export const checkoutUserForm = z.object({
  name: z.string().nonempty("Họ và tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string({ required_error: "Số điện thoại không được để trống" })
    .min(10, "Số điện thoại phải có ít nhất 10 ký tự")
    .max(15, "Số điện thoại không được vượt quá 15 ký tự")
    .regex(/^\+?\d+$/, "Số điện thoại không hợp lệ"),
  address: z.string().nonempty("Địa chỉ không được để trống"),
  province: z.string().nonempty("Tỉnh/thành phố không được để trống"),
  district: z.string().nonempty("Quận/huyện không được để trống"),
  ward: z.string().nonempty("Phường/xã không được để trống"),
  tuition_option: z.string(),
});

export type CheckoutType = z.infer<typeof checkoutSchema>;
export type CheckoutUserFormType = z.infer<typeof checkoutUserForm>;
