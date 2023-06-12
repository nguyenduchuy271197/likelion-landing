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
import { useContext } from "react";
import { RegisterContext } from "@/context/RegisterProvider";
import registerFormSchema, {
  RegisterForm,
} from "@/validations/registerFormSchema";

interface RegisterFormProps {
  onSubmitUser: (user: RegisterForm) => void;
}

export function RegisterForm({ onSubmitUser }: RegisterFormProps) {
  const { register } = useContext(RegisterContext);

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: register,
  });

  function onSubmit(values: z.infer<typeof registerFormSchema>) {
    onSubmitUser(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
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
