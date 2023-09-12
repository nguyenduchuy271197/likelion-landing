import CheckoutBill from "@/components/checkout/CheckoutBill";
import PaymentInformation from "@/components/checkout/PaymentInformation";

export default function Payment() {
  return (
    <div className="grid sm:grid-cols-[1fr_450px] gap-8">
      {/* User Form */}
      <PaymentInformation />

      {/* Bill */}
      <CheckoutBill />
    </div>
  );
}
