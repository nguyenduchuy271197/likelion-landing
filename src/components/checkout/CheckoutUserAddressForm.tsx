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
import { Control, UseFormSetValue, useWatch } from "react-hook-form";
import { CheckoutUserFormType } from "@/schema/checkout";
import { ScrollArea } from "../ui/ScrollArea";

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
        .then((res) => res.data as IAddress[]),
  });

  const { data: districts } = useQuery({
    queryKey: ["districts", province],
    queryFn: async () =>
      await axios
        .get(`https://provinces.open-api.vn/api/p/${province}?depth=2`)
        .then((res) => res.data.districts as IAddress[]),
    enabled: !!province,
  });

  const { data: wards } = useQuery({
    queryKey: ["wards", district],
    queryFn: async () =>
      await axios
        .get(`https://provinces.open-api.vn/api/d/${district}?depth=2`)
        .then((res) => res.data.wards as IAddress[]),
    enabled: !!district,
  });

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="address"
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
              <FormLabel>Tỉnh/thành</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setValue("district", "");
                  setValue("ward", "");
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn tỉnh/thành" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-72">
                    <SelectItem value="" disabled>
                      Chọn tỉnh/thành
                    </SelectItem>
                    {provinces?.map((province) => (
                      <SelectItem
                        value={province.code.toString()}
                        key={province.code}
                      >
                        {province.name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
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
              <FormLabel>Quận/huyện</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  setValue("ward", "");
                }}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn quận/huyện" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-72">
                    <SelectItem value="" disabled>
                      Chọn quận/huyện
                    </SelectItem>
                    {districts?.map((district) => (
                      <SelectItem
                        value={district.code.toString()}
                        key={district.code}
                      >
                        {district.name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
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
              <FormLabel>Phường/xã</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Chọn phường/xã" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <ScrollArea className="h-72">
                    <SelectItem value="" disabled>
                      Chọn phường/xã
                    </SelectItem>
                    {wards?.map((ward) => (
                      <SelectItem value={ward.code.toString()} key={ward.code}>
                        {ward.name}
                      </SelectItem>
                    ))}
                  </ScrollArea>
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
