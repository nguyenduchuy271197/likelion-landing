import { LucideProps } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

function PhoneCallIcon(props: LucideProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_568_16)">
        <path
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.2813 14.9584C19.196 14.8162 18.9684 14.7308 18.6253 14.5584C18.284 14.3877 16.6022 13.561 16.2893 13.4473C15.9764 13.3335 15.7489 13.2766 15.5196 13.6179C15.292 13.9593 14.636 14.729 14.4369 14.9584C14.2378 15.1859 14.0387 15.2144 13.6956 15.0437C13.3542 14.873 12.252 14.5122 10.9471 13.3477C9.93022 12.441 9.244 11.3228 9.04489 10.9797C8.84578 10.6384 9.02355 10.4535 9.19422 10.2828C9.34889 10.1299 9.53555 9.88282 9.70622 9.68371C9.87689 9.4846 9.93378 9.34237 10.0476 9.11304C10.1613 8.88548 10.1044 8.6846 10.0191 8.51393C9.93378 8.34326 9.24933 6.66148 8.96489 5.97704C8.68755 5.31037 8.40489 5.40104 8.19511 5.39037C7.996 5.37971 7.76844 5.37793 7.53911 5.37793C7.30978 5.37793 6.94 5.46326 6.62711 5.80637C6.31422 6.14771 5.43066 6.97615 5.43066 8.65793C5.43066 10.3397 6.65555 11.9646 6.82622 12.1939C6.99689 12.4233 9.23689 15.8739 12.6662 17.3548C13.4822 17.7068 14.1187 17.9166 14.6147 18.0748C15.4342 18.3344 16.1791 18.2988 16.7676 18.2099C17.4236 18.1122 18.7907 17.3833 19.0751 16.585C19.3596 15.7868 19.3596 15.1024 19.2742 14.9602L19.2813 14.9584Z"
          fill="#FF7100"
        />
      </g>
      <defs>
        <clipPath id="clip0_568_16">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function PhoneCall() {
  return (
    <div className="fixed z-[9999] right-6 bottom-20">
      <a
        href="tel:+84867133779"
        className="group px-4 py-2 rounded-3xl bg-[#ff7100] text-muted flex items-center gap-2 font-bold text-lg"
      >
        <PhoneCallIcon />
        Gọi
        <span className="max-w-0 group-hover:max-w-[200px] whitespace-nowrap overflow-hidden transition-all duration-300">
          (+84) 86 713 3779
        </span>
      </a>
    </div>
  );
}
