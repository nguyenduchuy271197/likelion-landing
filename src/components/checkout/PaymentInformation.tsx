import PaymentAccountRow from "./PaymentAccountRow";
import PaymentActions from "./PaymentActions";

const paymentAccount = [
  {
    label: "Số tài khoản",
    value: "700 016 242465",
  },
  {
    label: "Tên tài khoản",
    value: "CÔNG TY TNHH LIKE LION",
  },
  {
    label: "Nội dung",
    value: "SĐT_HọTên",
  },
  {
    label: "Chi nhánh",
    value: "Shinhan - Chi nhánh Sài Gòn",
  },
];

export default function PaymentInformation() {
  return (
    <div className="px-8 py-12 space-y-6 border">
      <h1 className="text-3xl font-medium">Thông tin thanh toán</h1>
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Chuyển khoản bằng QR Code</h2>
          <div className="grid grid-cols-[200px_1fr] gap-8">
            <div className="">
              <div className="aspect-[1/1] bg-muted"></div>
            </div>
            <div>
              <ol className="space-y-2">
                <li>Bước 1: Lorem ipsum dolor sit amet.</li>
                <li>Bước 2: Lorem ipsum dolor sit amet.</li>
                <li>Bước 3: Lorem ipsum dolor sit amet.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Chuyển khoản qua STK</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <PaymentAccountRow
              label="Số tài khoản"
              value="700 016 242465"
              clipboard
              space={false}
            />
            <PaymentAccountRow
              label="Tên tài khoản"
              value="CÔNG TY TNHH LIKE LION"
            />
            <PaymentAccountRow label="Nội dung" value="SĐT_HọTên" clipboard />
            <PaymentAccountRow
              label="Chi nhánh"
              value="Shinhan - Chi nhánh Sài Gòn"
            />
          </div>
        </div>
      </div>

      {/* Payment Actions */}
      <PaymentActions />
    </div>
  );
}
