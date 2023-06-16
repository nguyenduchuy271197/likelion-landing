"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { RegisterContext } from "@/context/RegisterProvider";
import registerFormSchema, { RegisterForm } from "@/schema/registerFormSchema";
import { addUser } from "@/services/userService";
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
import { Button } from "@/components/ui/Button";

interface RegisterFormProps {
  onSubmitUser: (user: RegisterForm) => void;
}

const courses = [
  {
    id: "6482a08d232bf6c1513a1111",
    title: "Fullstack Web Development Bootcamp",
  },
  {
    id: "64883a8ab6a3fddba741f55e",
    title: "Khoá học Java",
  },
  {
    id: "64883aacb6a3fddba741f55f",
    title: "Khoá học Data Science - Python",
  },
];

export function RegisterForm({ onSubmitUser }: RegisterFormProps) {
  const { register } = useContext(RegisterContext);

  const form = useForm<RegisterForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: register,
  });

  async function onSubmit(values: RegisterForm) {
    onSubmitUser(values);
    await addUser(values);
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
          name="phone"
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
          name="courseId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Khoá học bạn đang quan tâm?</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value || undefined}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn khoá học lập trình" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem value={course.id} key={course.id}>
                      {course.title}
                    </SelectItem>
                  ))}
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
