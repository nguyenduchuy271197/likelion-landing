"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";

import { Input } from "@/components/ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";

export const registerFormSchema = z.object({
  fullName: z.string().nonempty("Họ và tên không được để trống"),
  email: z.string().email("Email không hợp lệ"),
  phoneNumber: z
    .string({ required_error: "Số điện thoại không được để trống" })
    .min(10, "Số điện thoại phải có ít nhất 10 ký tự")
    .max(15, "Số điện thoại không được vượt quá 15 ký tự")
    .regex(/^\+?\d+$/, "Số điện thoại không hợp lệ"),
  course: z.enum(
    [
      "Fullstack Web Development Bootcamp",
      "Khoá học Java",
      "Khoá học Data Science - Python",
    ],
    { required_error: "Chọn khoá học" }
  ),
});

interface RegisterFormProps {
  onSubmitUser: (user: z.infer<typeof registerFormSchema>) => void;
}

export function RegisterForm({ onSubmitUser }: RegisterFormProps) {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    onSubmitUser(values);
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên</FormLabel>
              <FormControl>
                <Input placeholder="Nguyễn Văn A" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="nguyenvana@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại</FormLabel>
              <FormControl>
                <Input placeholder="+084 111 111 111" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Khoá học bạn đang quan tâm?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khoá học lập trình" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Fullstack Web Development Bootcamp">
                    Fullstack Web Development Bootcamp
                  </SelectItem>
                  <SelectItem value="Khoá học Java">Khoá học Java</SelectItem>
                  <SelectItem value="Khoá học Data Science - Python">
                    Khoá học Data Science - Python
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Đăng ký tư vấn
        </Button>
      </form>
    </Form>
  );
}
