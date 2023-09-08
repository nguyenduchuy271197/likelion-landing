"use client";

import { calcTotalBill, promotionCodes } from "@/app/checkout/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { formatNumber } from "@/lib/utils";
import { getCourseBySlug } from "@/services/courseService";
import useCheckoutStore from "@/stores/useCheckoutStore";
import CheckoutCoupon from "./CheckoutCoupon";

export default function CheckoutBill() {
  const courseSlug = useCheckoutStore((state) => state.courseSlug);
  const tuitionOption = useCheckoutStore((state) => state.tuitionOption);
  const couponCode = useCheckoutStore((state) => state.couponCode);

  if (courseSlug === null) return null;

  const course = getCourseBySlug(courseSlug);

  const { payment_methods: payment } = course;

  return (
    <div className="px-8 py-12 space-y-6 bg-muted">
      <h2 className="text-xl font-bold">{course.title}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead className="text-right">Discount</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-0">
            <TableCell className="capitalize ">Giá gốc</TableCell>
            <TableCell className="text-lg font-medium text-right text-destructive"></TableCell>
            <TableCell className="text-xl font-bold text-right">
              {payment && (
                <div className="space-x-2">
                  <span className="text-sm">VND</span>
                  <span>{formatNumber(payment[tuitionOption].origin)}</span>
                </div>
              )}
            </TableCell>
          </TableRow>
          <TableRow className="border-0">
            <TableCell className="capitalize">Giá giảm</TableCell>
            <TableCell className="text-lg font-medium text-right text-destructive">
              -10%
            </TableCell>
            <TableCell className="text-xl font-bold text-right">
              {payment && (
                <div className="space-x-2">
                  <span className="text-sm">- VND</span>
                  <span>{formatNumber(payment[tuitionOption].origin)}</span>
                </div>
              )}
            </TableCell>
          </TableRow>
          {promotionCodes[couponCode] && (
            <TableRow className="border-0">
              <TableCell className="text-lg capitalize"></TableCell>
              <TableCell className="text-lg font-medium text-right uppercase text-destructive">
                {couponCode}
              </TableCell>
              <TableCell className="text-xl font-bold text-right">
                <div className="space-x-2">
                  <span>-</span>
                  <span className="text-sm">VND</span>
                  <span>
                    {formatNumber(promotionCodes[couponCode].discountBy)}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell className="text-xl capitalize">Tổng</TableCell>
            <TableCell className="text-lg text-right text-destructive"></TableCell>
            <TableCell className="text-2xl font-bold text-right">
              {payment && (
                <>
                  $
                  {calcTotalBill(
                    payment[tuitionOption].origin,
                    undefined,
                    couponCode
                  )}
                </>
              )}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <CheckoutCoupon />
    </div>
  );
}
