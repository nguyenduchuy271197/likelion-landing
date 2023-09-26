"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import { RegisterContext } from "@/context/RegisterProvider";
import registerFormSchema, {
  RegisterFormType,
} from "@/schema/registerFormSchema";
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
import { UseMutateFunction } from "@tanstack/react-query";

interface RegisterFormProps {
  initialCourse: string;
  registerUser: UseMutateFunction<void, unknown, RegisterFormType, unknown>;
  isSubmitting: boolean;
  courses: {
    id: string;
    title: string;
    slug: string;
  }[];
}

export function RegisterForm({
  initialCourse,
  registerUser,
  isSubmitting,
  courses,
}: RegisterFormProps) {
  const { register, onRegisterForm } = useContext(RegisterContext);

  const courseId = courses.find((course) => initialCourse === course.slug)?.id;

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: register,
  });

  function onSubmit(values: RegisterFormType) {
    onRegisterForm(values);
    registerUser(values);
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
                <Input
                  placeholder="Nguyễn Văn A"
                  {...field}
                  disabled={isSubmitting}
                />
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
                <Input
                  placeholder="nguyenvana@gmail.com"
                  disabled={isSubmitting}
                  {...field}
                />
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
                <Input
                  placeholder="09xxxxxxx"
                  disabled={isSubmitting}
                  {...field}
                />
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
                defaultValue={courseId || undefined}
                disabled={isSubmitting}
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
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Đăng ký tư vấn
        </Button>
      </form>
    </Form>
  );
}
