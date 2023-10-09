import { LucideProps, Phone, PhoneCallIcon } from "lucide-react";

export default function PhoneCall() {
  return (
    <div className="fixed z-[9999] right-6 bottom-40">
      <a
        href="tel:+84867133779"
        className="group rounded-full bg-[#ff7100] text-muted flex items-center justify-center w-14 h-14 border-2 group"
      >
        <Phone className="w-6 h-6 transition group-hover:-rotate-12" />
      </a>
    </div>
  );
}
