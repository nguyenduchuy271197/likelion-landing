"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

import useCheckoutStore from "@/stores/useCheckoutStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { promotionCodes } from "@/app/checkout/utils";

const checkoutCouponFormSchema = z.object({
  code: z.string(),
});

type CheckoutCouponFormType = z.infer<typeof checkoutCouponFormSchema>;

export default function CheckoutCoupon() {
  const changeCouponCode = useCheckoutStore((state) => state.changeCouponCode);
  const form = useForm<CheckoutCouponFormType>({
    resolver: zodResolver(checkoutCouponFormSchema),
    defaultValues: {
      code: "",
    },
  });

  function onSubmit(data: CheckoutCouponFormType) {
    if (Object.keys(promotionCodes).includes(data.code.toUpperCase())) {
      changeCouponCode(data.code);
      form.reset({
        code: "",
      });
    } else {
      form.setError("code", {
        type: "validate",
        message: "Mã không hợp lệ",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-2">
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem className="grow">
              <FormControl>
                <Input placeholder="Mã giảm giá" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Áp dụng</Button>
      </form>
    </Form>
  );
}
