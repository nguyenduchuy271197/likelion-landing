"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";

import { Button } from "@/components/ui/Button";
import contactFormSchema, { ContactFormType } from "@/schema/contactFormSchema";
import { Textarea } from "@/components/ui/Textarea";
import Image from "next/image";
import useRegisterUser from "../register/useRegisterUser";
import { useToast } from "@/hooks/useToast";

export default function ContactForm() {
  const {
    isRegisterLoading,
    isRegisterError,
    isRegisterSuccess,
    registerUser,
  } = useRegisterUser();

  const { toast } = useToast();

  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      content: "",
    },
  });

  async function onSubmit(values: ContactFormType) {
    const { firstName, lastName, email, phone, content } = values;

    const newUser = {
      name: firstName + " " + lastName,
      email,
      phone,
      // content,
    };

    registerUser(newUser, {
      onSuccess: () => {
        toast({
          title: "Registration Success",
          description: "Your registration has been registered!",
        });

        form.reset();
      },
    });
  }
  return (
    <div>
      <div className="container">
        <div className="grid gap-8 py-14 sm:py-20 md:grid-cols-2">
          <div className="max-w-md">
            <div>
              <h2 className="pb-2 mb-2 text-3xl font-medium transition-colors scroll-m-20 first:mt-0">
                Bạn cần tìm khoá học lập trình?
              </h2>
              <p className="text-muted-foreground">
                Vui lòng điền vào biểu mẫu sau và chúng tôi sẽ liên hệ lại với
                bạn nhanh nhất có thể.
              </p>
            </div>
            <div className="relative hidden md:block aspect-[1/1]">
              <Image
                src="/img/contact/form.png"
                fill
                alt="Kanban"
                className="object-contain"
              />
            </div>
          </div>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="flex [&>*]:flex-1 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Họ</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Nguyễn"
                            disabled={isRegisterLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tên</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Văn A"
                            disabled={isRegisterLoading}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="nguyenvana@gmail.com"
                          disabled={isRegisterLoading}
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
                          placeholder="+084 111 111 111"
                          disabled={isRegisterLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nội dung</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nội dung cần tư vấn..."
                          className="resize-none"
                          rows={8}
                          disabled={isRegisterLoading}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Gửi
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
