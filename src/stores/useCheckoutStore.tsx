import { create } from "zustand";

export type TuitionOptionType = "once" | "monthly";

interface CheckoutState {
  step: number;
  courseSlug: string | null;
  tuitionOption: TuitionOptionType;
  couponCode: string;
}

interface CheckoutAction {
  startCheckout: (courseSlug: string, tuitionOption: TuitionOptionType) => void;
  changeTuitionOption: (tuitionOption: TuitionOptionType) => void;
  changeCouponCode: (code: string) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const useCheckoutStore = create<CheckoutState & CheckoutAction>((set) => ({
  step: 0,
  courseSlug: "khoa-hoc-python-cho-data-analysis",
  tuitionOption: "once",
  couponCode: "",
  startCheckout: (courseSlug, tuitionOption) =>
    set(() => ({ courseSlug, tuitionOption })),
  changeTuitionOption: (tuitionOption) => set(() => ({ tuitionOption })),
  changeCouponCode: (couponCode: string) =>
    set(() => ({ couponCode: couponCode.toUpperCase() })),
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () =>
    set((state) => ({ step: state.step === 0 ? state.step : state.step - 1 })),
}));

export default useCheckoutStore;
