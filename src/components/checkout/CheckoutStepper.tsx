import { cn } from "@/lib/utils";
import useCheckoutStore from "@/stores/useCheckoutStore";
import { Check, ClipboardCheck, CreditCard, UserSquare } from "lucide-react";

const steppers = [
  {
    label: "Thông tin người dùng",
    icon: UserSquare,
  },
  {
    label: "Thông tin thanh toán",
    icon: CreditCard,
  },
  {
    label: "Xác nhận thành công",
    icon: ClipboardCheck,
  },
];

export default function CheckoutStepper() {
  const currentStep = useCheckoutStore((state) => state.step);

  return (
    <ol className="flex items-center w-full max-w-4xl mb-4 sm:mb-5">
      {steppers.map((stepper, index) => (
        <li
          key={stepper.label}
          className={cn(
            "flex w-full items-center text-blue-600",
            index < steppers.length - 1 &&
              "after:content-[''] after:w-full after:h-1 after:border-b  after:border-4 after:inline-block",
            index < currentStep
              ? "after:border-blue-100"
              : "after:border-gray-100"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-center w-10 h-10  rounded-full lg:h-12 lg:w-12 shrink-0",
              index <= currentStep ? "bg-blue-100" : "bg-gray-100"
            )}
          >
            {index < currentStep ? (
              <Check className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" />
            ) : (
              <stepper.icon className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6" />
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
