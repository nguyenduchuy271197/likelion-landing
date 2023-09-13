import CheckoutBill from "@/components/checkout/CheckoutBill";
import ConfirmationAlert from "@/components/checkout/ConfirmationAlert";

export default function Confirmation() {
  return (
    <div className="grid sm:grid-cols-[1fr_450px] gap-8">
      {/* User Form */}
      <ConfirmationAlert />

      {/* Bill */}
      <CheckoutBill />
    </div>
  );
}
