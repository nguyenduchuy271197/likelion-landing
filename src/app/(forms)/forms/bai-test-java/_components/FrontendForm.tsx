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
  useFormField,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import axios from "axios";
import { Textarea } from "@/components/ui/Textarea";
import Image from "next/image";

export const applyFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Phone must be at least 2 characters.",
  }),
  email: z.string().email(),
});

export default function FrontendForm() {
  const form = useForm<z.infer<typeof applyFormSchema>>({
    resolver: zodResolver(applyFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  // const { mutate: mutateSendEmail } = useMutation({
  //   mutationFn: (data: Email) => axios.post("/api/apply/send-email", data),
  //   onMutate: () => {
  //     form.reset();
  //     toast.success("Form submitted!");
  //   },
  // });

  function onSubmit(data: z.infer<typeof applyFormSchema>) {}

  return (
    <div className="relative bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1699332702/forms/thu-thach-java/Frame_t9voai.png')] bg-cover bg-center w-[350px] sm:w-[600px] md:w-[800px] lg:w-[1000px] bg-no-repeat aspect-[1933/1117]">
      <div className="hidden lg:block">
        <div className="absolute bottom-0 right-0 translate-x-1/3 ">
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1699332702/forms/thu-thach-java/Lion2_kv42il.png"
            alt=""
            width={350}
            height={700}
            className="animate-float"
          />
        </div>

        <div className="absolute bottom-0 left-0 -translate-x-1/3">
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1699332702/forms/thu-thach-java/Lion1_ryy9ib.png"
            alt=""
            width={350}
            height={700}
            className="animate-float"
          />
        </div>
      </div>
      <div className="w-full px-[18%] sm:px-[20%] md:px-[25%] pt-12 sm:pt-24 md:pt-28 lg:pt-36">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4 sm:gap-6 lg:gap-12"
          >
            <div className="space-y-0.5 md:space-y-2 lg:space-y-6">
              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-8 text-primary-foreground">
                    <FormLabel className="text-xs sm:text-xl font-bold uppercase shrink-0 w-[80px] sm:w-[150px]">
                      Bạn tên là?
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-8 text-xs sm:text-xl sm:py-6 bg-background text-foreground"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-8 text-primary-foreground">
                    <FormLabel className="text-xs sm:text-xl font-bold uppercase shrink-0 w-[80px] sm:w-[150px]">
                      Số điện thoại
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-8 text-xs sm:text-xl sm:py-6 bg-background text-foreground"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-8 text-primary-foreground">
                    <FormLabel className="text-xs sm:text-xl font-bold uppercase shrink-0 w-[80px] sm:w-[150px]">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="h-8 text-xs sm:text-xl sm:py-6 bg-background text-foreground"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="flex items-center justify-center mt-auto">
              <Button
                type="submit"
                size="lg"
                className="bg-[url('https://res.cloudinary.com/dbscqlwl7/image/upload/v1699332702/forms/thu-thach-java/Button_ei8ik8.png')] bg-cover bg-no-repeat sm:text-3xl font-bold text-foreground aspect-[469/146] sm:h-24 bg-transparent hover:bg-transparent active:scale-95 pb-2 h-10"
              >
                Bắt đầu
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
