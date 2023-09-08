import CheckoutBill from "@/components/checkout/CheckoutBill";
import CheckoutUserForm from "@/components/checkout/CheckoutUserForm";

export default function Checkout() {
  return (
    <div>
      <div className="container">
        <div className="py-20">
          {/* Breadcrumbs */}

          {/* Checkout Content */}
          <div className="grid sm:grid-cols-[1fr_450px] gap-8">
            {/* User Form */}
            <CheckoutUserForm />

            {/* Bill */}
            <CheckoutBill />
          </div>
        </div>
      </div>
    </div>
  );
}
