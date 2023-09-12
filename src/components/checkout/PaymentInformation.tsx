import { Copy } from "lucide-react";
import { Button } from "../ui/Button";

function PaymentAccountRow({
  label,
  value,
  clipboard = false,
}: {
  label: string;
  value: string;
  clipboard?: boolean;
}) {
  return (
    <div className="relative p-4 space-y-2 rounded-lg bg-primary text-primary-foreground">
      <h5 className="text-sm">{label}</h5>
      <p className="text-lg font-medium">{value}</p>
      {clipboard && (
        <div className="absolute bottom-2 right-2">
          <Button variant="ghost">
            <Copy />
          </Button>
        </div>
      )}
    </div>
  );
}

export default function PaymentInformation() {
  return (
    <div className="px-8 py-12 space-y-6 border">
      <h1 className="text-3xl font-medium">Thông tin thanh toán</h1>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Chuyển khoản bằng QR Code</h2>
          <div className="grid grid-cols-[200px_1fr] gap-4">
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
        <div className="space-y-2">
          <h2 className="text-lg font-medium">Chuyển khoản qua STK</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <PaymentAccountRow
              label="Số tài khoản"
              value="700 016 242465"
              clipboard
            />
            <PaymentAccountRow
              label="Tên tài khoản"
              value="CÔNGTYTNHH LIKE LION"
            />
            <PaymentAccountRow label="Nội dung" value="SĐT_HọTên" clipboard />
            <PaymentAccountRow
              label="Chi nhánh"
              value="Shinhan - Chi nhánh Sài Gòn"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
