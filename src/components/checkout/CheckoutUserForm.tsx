"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { CheckoutUserFormType, checkoutUserForm } from "@/schema/checkout";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutUserAddressForm from "./CheckoutUserAddressForm";

export default function CheckoutUserForm() {
  const form = useForm<CheckoutUserFormType>({
    resolver: zodResolver(checkoutUserForm),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(data: CheckoutUserFormType) {}

  return (
    <div className="p-8 space-y-6 border">
      <h1 className="text-3xl font-medium">Thông tin của bạn</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Họ và tên</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-[1fr_200px] gap-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <CheckoutUserAddressForm
            control={form.control}
            setValue={form.setValue}
          />

          <Button type="submit" size="lg">
            Tiếp tục đến phương thức thanh toán
          </Button>
        </form>
      </Form>
    </div>
  );
}
