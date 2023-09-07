"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";
import {
  Control,
  UseFormSetValue,
  useFormState,
  useWatch,
} from "react-hook-form";
import { CheckoutUserFormType } from "@/schema/checkout";

interface IAddress {
  name: string;
  code: number;
}

interface CheckoutUserAddressFormProps {
  control: Control<CheckoutUserFormType>;
  setValue: UseFormSetValue<CheckoutUserFormType>;
}

export default function CheckoutUserAddressForm({
  control,
  setValue,
}: CheckoutUserAddressFormProps) {
  const province = useWatch({
    control,
    name: "province",
  });
  const district = useWatch({
    control,
    name: "district",
  });

  const { data: provinces } = useQuery({
    queryKey: ["provinces"],
    queryFn: async () =>
      await axios
        .get("https://provinces.open-api.vn/api/p")
        .then((res) => res.data as IAddress[] | undefined),
  });

  const { data: districts } = useQuery({
    queryKey: ["districts"],
    queryFn: async () =>
      await axios
        .get(`https://provinces.open-api.vn/api/p/${province}?depth=2`)
        .then((res) => res.data.districts as IAddress[] | undefined),
    enabled: !!province,
  });

  const { data: wards } = useQuery({
    queryKey: ["wards"],
    queryFn: async () =>
      await axios
        .get(`https://provinces.open-api.vn/api/d/${district}?depth=2`)
        .then((res) => res.data.wards as IAddress[] | undefined),
    enabled: !!district,
  });

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Địa chỉ</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="grid grid-cols-3 gap-2">
        <FormField
          control={control}
          name="province"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn tỉnh/thành" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {provinces?.map((province) => (
                    <SelectItem
                      value={province.code.toString()}
                      key={province.code}
                    >
                      {province.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="district"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn quận/huyện" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {districts?.map((district) => (
                    <SelectItem
                      value={district.code.toString()}
                      key={district.code}
                    >
                      {district.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="ward"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn phường/xã" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {wards?.map((ward) => (
                    <SelectItem value={ward.code.toString()} key={ward.code}>
                      {ward.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
