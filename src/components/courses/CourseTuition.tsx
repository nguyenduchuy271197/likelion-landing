import { Button } from "../ui/Button";

function CourseTuitionRow() {
  return (
    <div className="grid grid-cols-[1fr_200px_100px] px-6 py-8 border rounded-lg gap-8 bg-muted">
      <div className="space-y-1">
        <h5 className="text-lg font-medium">Giảm 1 tháng học phí</h5>
        <p className="text-sm text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolorum!
        </p>
      </div>
      <div className="space-y-1">
        <div className="text-sm line-through text-muted-foreground">
          42,000,000 VND
        </div>
        <div className="flex items-start space-x-2">
          <div className="text-xl font-bold">35,000,000 VND</div>
          <div className="text-sm font-medium text-destructive">-17%</div>
        </div>
      </div>
      <div>
        <Button variant="destructive">Đăng ký</Button>
      </div>
    </div>
  );
}

export default function CourseTuition() {
  return (
    <section className="mt-12">
      <h2 className="mb-6 text-2xl font-medium">Phuơng thức thanh toán</h2>
      <div className="space-y-4">
        <CourseTuitionRow />
        <CourseTuitionRow />
      </div>
    </section>
  );
}
