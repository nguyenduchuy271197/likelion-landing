import { Button } from "../ui/Button";

export default function CourseCTA() {
  return (
    <div className="h-80 rounded-3xl text-white bg-[url('/img/cta/fullstack.png')] bg-cover bg-center overflow-hidden mb-12">
      <div className="w-full h-full bg-gradient-to-r from-[#FF8F3B]/10 from-[0%] sm:from-[20%] via-[#FF8F3B] to-[#FF8F3B] flex justify-end items-center py-6 px-6 md:px-12">
        <div className="flex flex-col items-start max-w-[230px] sm:max-w-xs">
          <h3 className="mb-4 text-2xl font-medium md:text-3xl">
            Bạn cần tư vấn về khoá học Fullstack?
          </h3>
          <Button
            variant="secondary"
            className="sm:px-8 sm:py-6 sm:text-lg text-[#FF7100] rounded-xl px-6 py-6 w-full"
          >
            Liên hệ tư vấn 1 : 1
          </Button>
        </div>
      </div>
    </div>
  );
}
