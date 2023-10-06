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
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { toast } from "@/hooks/useToast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function CourseCTAForm({ id }: { id: string }) {
  const { onRegisterForm } = useContext(RegisterContext);

  const { isLoading, mutate: registerUser } = useMutation({
    mutationFn: (user: RegisterFormType) => axios.post("/api/user/add", user),
    onSuccess: () => {
      toast({
        title: "Đăng ký thành công!",
        description:
          "Bạn đã đăng kí khoá học thành công, LIKELION sẽ liên hệ tư vấn trong vòng 24h",
      });
      form.reset();
    },
  });

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values: RegisterFormType) {
    onRegisterForm({ courseId: id, ...values });
    registerUser({ courseId: id, ...values });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Họ và tên"
                  className="text-lg border-transparent rounded-none border-b-muted placeholder:text-muted/70 placeholder:text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={isLoading}
                  {...field}
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
              <FormControl>
                <Input
                  placeholder="Email"
                  className="text-lg border-transparent rounded-none border-b-muted placeholder:text-muted/70 placeholder:text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  disabled={isLoading}
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
              <FormControl>
                <Input
                  placeholder="Số điện thoại"
                  disabled={isLoading}
                  className="text-lg border-transparent rounded-none border-b-muted placeholder:text-muted/70 placeholder:text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          size="lg"
          className="w-full text-base md:max-w-xs"
          disabled={isLoading}
        >
          Đăng ký tư vấn miễn phí
        </Button>
      </form>
    </Form>
  );
}
