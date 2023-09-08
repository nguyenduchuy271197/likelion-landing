import { formatNumber } from "@/lib/utils";

interface promotionCodes {
  [x: string]: {
    label: string;
    discountBy: number;
  };
}

export const promotionCodes: promotionCodes = {
  HOCNHOM20: {
    label: "Voucher học nhóm",
    discountBy: 200000,
  },
  LIKELIONVN: {
    label: "Voucher Likelion dành cho cá nhân",
    discountBy: 300000,
  },
};

export function calcTotalBill(
  origin: number,
  discount?: number,
  code?: string
) {
  let total = origin;
  if (discount) {
    total = discount;
  }

  if (code && promotionCodes[code]) {
    total -= promotionCodes[code].discountBy;
  }

  return formatNumber(total);
}
