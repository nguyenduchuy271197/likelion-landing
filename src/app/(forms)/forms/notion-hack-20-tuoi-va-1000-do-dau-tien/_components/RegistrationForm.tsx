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
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/Textarea";
import { ArrowRightCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import Image from "next/image";
import ButtonWrapper from "./ButtonWrapper";

export const registrationFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  company: z.string().optional(),
  content: z.string().optional(),
});

export default function RegistrationForm() {
  const form = useForm<z.infer<typeof registrationFormSchema>>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      content: "",
    },
  });

  const { mutate: mutateRegister, isLoading: isRegistering } = useMutation({
    mutationFn: (user: z.infer<typeof registrationFormSchema>) =>
      axios.post("/api/form/notion", user),
    onMutate: () => {
      toast.success("Bạn đã đăng ký thành công!");
      form.reset();
    },
  });

  async function onSubmit(data: z.infer<typeof registrationFormSchema>) {
    mutateRegister(data);
  }

  return (
    <div className="relative z-10 w-full max-w-xl px-8 py-[5vh] bg-white rounded-lg lg:px-12">
      <div className="mb-6 space-y-2 text-center">
        <p className="text-xl lg:text-2xl">Tham gia Master Class</p>
        <h1 className="text-4xl font-bold lg:text-5xl text-[#ff7100]">
          Notion Hack
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid gap-4 lg:gap-2">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex flex-col lg:gap-4 lg:items-center lg:flex-row">
                  <FormLabel className="w-32 text-base shrink-0">
                    Họ và Tên
                    <span className="text-[#ff7100]"> *</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col lg:gap-4 lg:items-center lg:flex-row">
                  <FormLabel className="w-32 text-base shrink-0">
                    Số điện thoại
                    <span className="text-[#ff7100]"> *</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col lg:gap-4 lg:items-center lg:flex-row">
                  <FormLabel className="w-32 text-base shrink-0">
                    Email
                    <span className="text-[#ff7100]"> *</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="flex flex-col lg:gap-4 lg:items-center lg:flex-row">
                  <FormLabel className="w-32 text-base shrink-0">
                    Trường/Công ty
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem className="mt-2 col-span-full">
                  <FormLabel className="w-32 text-base shrink-0">
                    Câu hỏi dành cho diễn giả
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Đặt câu hỏi của bạn tại đây..."
                      className="h-32 resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-sm text-muted-foreground">
              <span className="text-[#ff7100]">* </span>
              Số lượng đăng ký có hạn để đảm bảo chất lượng Workshop
            </p>
          </div>

          <Button
            type="submit"
            size="lg"
            className="flex items-center w-full gap-2 uppercase group"
          >
            Đăng ký ngay
            <ArrowRightCircle className="transition group-hover:translate-x-1" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
