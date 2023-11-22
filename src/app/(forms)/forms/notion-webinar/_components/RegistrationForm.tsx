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
import notion from "@/lib/notion";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export const registrationFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  company: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
  field: z.string().min(2, {
    message: "Company must be at least 2 characters.",
  }),
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
      field: "",
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
    <div className="relative z-10 w-full max-w-2xl p-12 space-y-8 bg-white rounded-lg">
      <div className="space-y-2 text-center">
        <p className="text-xl lg:text-3xl">Tham gia Webinar</p>
        <h1 className="text-4xl font-bold lg:text-6xl text-[#ff7100]">
          Notion Hack
        </h1>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-2">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
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
                <FormItem>
                  <FormLabel>
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
                <FormItem>
                  <FormLabel>
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
                <FormItem>
                  <FormLabel>
                    Trường/Công ty
                    <span className="text-[#ff7100]"> *</span>
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Field */}
            <FormField
              control={form.control}
              name="field"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Lĩnh vực
                    <span className="text-[#ff7100]"> *</span>
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
                <FormItem className="col-span-full">
                  <FormLabel>Câu hỏi dành cho diễn giả</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Viết một cái gì đó..."
                      className="resize-none h-44"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="flex items-center w-full gap-2 uppercase group"
          >
            Đăng ký ngay
            <ArrowRightCircle className="group-hover:translate-x-1" />
          </Button>
        </form>
      </Form>
    </div>
  );
}
