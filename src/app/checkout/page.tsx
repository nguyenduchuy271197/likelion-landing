import CheckoutBill from "@/components/checkout/CheckoutBill";
import CheckoutUserForm from "@/components/checkout/CheckoutUserForm";

export default function Checkout() {
  return (
    <div className="grid sm:grid-cols-[1fr_450px] gap-8">
      {/* User Form */}
      <CheckoutUserForm />

      {/* Bill */}
      <CheckoutBill />
    </div>
  );
}
