import { create } from "zustand";

export type TuitionOptionType = "once" | "monthly";

interface CheckoutState {
  courseSlug: string | null;
  tuitionOption: TuitionOptionType;
  couponCode: string;
}

interface CheckoutAction {
  startCheckout: (courseSlug: string, tuitionOption: TuitionOptionType) => void;
  changeTuitionOption: (tuitionOption: TuitionOptionType) => void;
  changeCouponCode: (code: string) => void;
}

const useCheckoutStore = create<CheckoutState & CheckoutAction>((set) => ({
  courseSlug: "khoa-hoc-python-cho-data-analysis",
  tuitionOption: "once",
  couponCode: "",
  startCheckout: (courseSlug, tuitionOption) =>
    set(() => ({ courseSlug, tuitionOption })),
  changeTuitionOption: (tuitionOption) => set(() => ({ tuitionOption })),
  changeCouponCode: (couponCode: string) =>
    set(() => ({ couponCode: couponCode.toUpperCase() })),
}));

export default useCheckoutStore;
