"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import registerFormSchema from "@/schema/registerFormSchema";
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
import { ContactForm } from "@/schema/contactFormSchema";
import { Textarea } from "@/components/ui/Textarea";
import Image from "next/image";
import { addUser } from "@/services/userService";

export default function ContactForm() {
  const form = useForm<ContactForm>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      content: "",
    },
  });

  async function onSubmit(values: ContactForm) {
    const { firstName, lastName, email, phone, content } = values;

    const newUser = {
      name: firstName + " " + lastName,
      email,
      phone,
      content,
    };

    await addUser(newUser);
  }
  return (
    <div>
      <div className="container">
        <div className="grid gap-8 py-14 sm:py-28 md:grid-cols-2">
          <div>
            <div className="max-w-md mb-8">
              <h2 className="max-w-sm pb-2 mb-2 text-3xl font-medium transition-colors scroll-m-20 first:mt-0">
                Bạn cần tìm khoá học lập trình?
              </h2>
              <p className="text-muted-foreground">
                Vui lòng điền vào biểu mẫu sau và chúng tôi sẽ liên hệ lại với
                bạn nhanh nhất có thể.
              </p>
            </div>
            <div className="hidden md:block relative aspect-[4/3]">
              <Image
                src="/img/illustrations/register/1.svg"
                fill
                alt="Kanban"
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
                          <Input placeholder="Nguyễn" {...field} />
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
                          <Input placeholder="Văn A" {...field} />
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
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nội dung</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Nội dung cần tư vấn..."
                          className="resize-none"
                          rows={8}
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
