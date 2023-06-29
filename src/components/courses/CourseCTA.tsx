import { Button } from "../ui/Button";

export default function CourseCTA() {
  return (
    <div className="relative h-60 bg-gradient-to-br from-[#FF7100] to-[#FF9B52] rounded-3xl text-white text-center flex justify-end items-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-10 px-4 sm:px-8">
        <h3 className="text-2xl font-medium sm:text-2xl lg:text-3xl">
          Bạn cần tư vấn về khoá học Fullstack?
        </h3>
        <div className="flex flex-col gap-3">
          <Button
            variant="secondary"
            className="sm:px-12 sm:py-8 sm:text-lg text-[#FF7100] rounded-xl px-6 py-6"
          >
            Liên hệ tư vấn 1 : 1
          </Button>
        </div>
      </div>
    </div>
  );
}
