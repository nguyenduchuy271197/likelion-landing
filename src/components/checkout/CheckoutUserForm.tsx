"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import {
  CheckoutType,
  CheckoutUserFormType,
  checkoutUserForm,
} from "@/schema/checkout";
import { zodResolver } from "@hookform/resolvers/zod";
import CheckoutUserAddressForm from "./CheckoutUserAddressForm";
import useCheckoutStore, { TuitionOptionType } from "@/stores/useCheckoutStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function CheckoutUserForm() {
  const tuitionOption = useCheckoutStore((state) => state.tuitionOption);
  const couponCode = useCheckoutStore((state) => state.couponCode);
  const changeTuitionOption = useCheckoutStore(
    (state) => state.changeTuitionOption
  );
  const router = useRouter();

  const checkoutMutation = useMutation({
    mutationFn: (data: CheckoutType) =>
      axios.post("/api/checkout", {
        data: data,
      }),
    onSuccess: () => {
      router.push("/checkout/payment");
    },
  });

  const form = useForm<CheckoutUserFormType>({
    resolver: zodResolver(checkoutUserForm),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      province: "",
      district: "",
      ward: "",
      tuition_option: tuitionOption,
    },
  });

  function onSubmit(data: CheckoutUserFormType) {
    checkoutMutation.mutate({ ...data, couponCode });
  }

  return (
    <div className="px-8 py-12 space-y-6 border">
      <h1 className="text-3xl font-medium">Thông tin của bạn</h1>
      <Button onClick={() => router.push("payment")}>haha</Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
            </div>

            <CheckoutUserAddressForm
              control={form.control}
              setValue={form.setValue}
            />

            <FormField
              control={form.control}
              name="tuition_option"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Chọn gói thanh toán</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value: TuitionOptionType) => {
                        field.onChange(value);
                        changeTuitionOption(value);
                      }}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="once" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Thanh toán một lần
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="monthly" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Thanh toán theo tháng
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              size="lg"
              disabled={checkoutMutation.isLoading}
            >
              {checkoutMutation.isLoading && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              Tiếp tục đến phương thức thanh toán
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
