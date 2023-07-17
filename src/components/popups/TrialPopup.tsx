"use client";

import { Dialog, DialogContent } from "@/components/ui/Dialog";
import { LucideProps } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function TrialButton(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 1209 317"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_31_1221)">
        <path
          d="M1036.43 43.8101H144.33C88.8309 43.8101 43.84 88.801 43.84 144.3C43.84 199.799 88.8309 244.79 144.33 244.79H1036.43C1091.93 244.79 1136.92 199.799 1136.92 144.3C1136.92 88.801 1091.93 43.8101 1036.43 43.8101Z"
          fill="#FF7710"
        />
        <path
          d="M148.5 148.07V138.7H185.98V148.07H148.5ZM156.74 174.27V113.54H184.33C190.92 113.54 196.74 114.8 201.77 117.31C206.8 119.83 210.73 123.35 213.57 127.89C216.4 132.43 217.82 137.77 217.82 143.9C217.82 150.03 216.4 155.37 213.57 159.91C210.74 164.45 206.8 167.98 201.77 170.49C196.74 173.01 190.93 174.26 184.33 174.26H156.74V174.27ZM170.88 162.82H183.63C187.68 162.82 191.19 162.05 194.17 160.52C197.15 158.99 199.46 156.79 201.11 153.93C202.76 151.07 203.58 147.73 203.58 143.91C203.58 140.09 202.76 136.68 201.11 133.85C199.46 131.02 197.15 128.83 194.17 127.3C191.19 125.77 187.68 125 183.63 125H170.88V162.83V162.82Z"
          fill="white"
        />
        <path
          d="M223.89 174.27L250.87 113.54H264.75L291.99 174.27H277.24L254.94 120.66H260.58L238.28 174.27H223.88H223.89ZM237.51 161.26L241.07 150.59H272.48L276.12 161.26H237.51ZM257.9 109.29C253.39 109.29 249.64 108.11 246.66 105.73C243.68 103.36 242.08 100.15 241.85 96.1001H250.35C250.47 97.9501 251.25 99.4401 252.69 100.57C254.14 101.7 255.87 102.26 257.9 102.26C259.93 102.26 261.73 101.7 263.15 100.57C264.57 99.4401 265.33 97.9501 265.45 96.1001H273.95C273.72 100.15 272.11 103.36 269.14 105.73C266.16 108.1 262.42 109.29 257.91 109.29H257.9Z"
          fill="white"
        />
        <path
          d="M302.66 174.27V113.54H314.29L350.12 157.26H344.48V113.54H358.36V174.27H346.74L310.91 130.55H316.55V174.27H302.67H302.66Z"
          fill="white"
        />
        <path
          d="M406.42 175.31C401.62 175.31 397.19 174.54 393.15 173.01C389.1 171.48 385.6 169.29 382.65 166.46C379.7 163.63 377.4 160.3 375.75 156.48C374.1 152.66 373.28 148.47 373.28 143.9C373.28 139.33 374.1 135.14 375.75 131.32C377.4 127.5 379.73 124.18 382.73 121.34C385.74 118.51 389.27 116.32 393.31 114.79C397.36 113.26 401.81 112.49 406.67 112.49C412.05 112.49 416.89 113.39 421.2 115.18C425.51 116.97 429.14 119.58 432.09 122.99L423.15 131.32C420.89 128.95 418.47 127.2 415.86 126.07C413.26 124.94 410.39 124.38 407.27 124.38C404.38 124.38 401.72 124.86 399.29 125.81C396.86 126.76 394.76 128.11 393 129.84C391.24 131.57 389.88 133.63 388.92 136C387.96 138.37 387.49 141 387.49 143.89C387.49 146.78 387.97 149.26 388.92 151.65C389.87 154.05 391.23 156.12 393 157.85C394.76 159.59 396.85 160.94 399.25 161.93C401.65 162.91 404.3 163.4 407.19 163.4C410.08 163.4 412.67 162.94 415.3 162.01C417.93 161.09 420.49 159.55 422.98 157.41L430.96 167.56C427.61 170.1 423.76 172.03 419.42 173.33C415.08 174.63 410.74 175.28 406.41 175.28L406.42 175.31ZM418.13 165.77V142.95H430.97V167.59L418.13 165.77Z"
          fill="white"
        />
        <path
          d="M477.21 174.27V113.54H491.18V174.27H477.21ZM489.7 160.39L489.01 144.17L518.07 113.55H533.69L507.58 141.75L499.6 150.08L489.71 160.4L489.7 160.39ZM518.76 174.27L497.16 147.9L506.36 137.84L535.25 174.28H518.77L518.76 174.27Z"
          fill="white"
        />
        <path
          d="M556.41 174.27V149.46L559.62 157.96L532.81 113.54H547.82L568.29 147.55H559.7L580.26 113.54H593.97L567.34 157.96L570.55 149.46V174.27H556.41ZM555.54 108.6L567.25 96.1101H581.74L566.12 108.6H555.54Z"
          fill="white"
        />
        <path
          d="M633.19 174.27V113.54H644.82L680.65 157.26H675.01V113.54H688.89V174.27H677.27L641.44 130.55H647.08V174.27H633.2H633.19Z"
          fill="white"
        />
        <path
          d="M736.95 175.31C732.15 175.31 727.72 174.54 723.68 173.01C719.63 171.48 716.13 169.29 713.18 166.46C710.23 163.63 707.93 160.3 706.28 156.48C704.63 152.66 703.81 148.47 703.81 143.9C703.81 139.33 704.63 135.14 706.28 131.32C707.93 127.5 710.26 124.18 713.26 121.34C716.27 118.51 719.8 116.32 723.84 114.79C727.89 113.26 732.34 112.49 737.2 112.49C742.58 112.49 747.42 113.39 751.73 115.18C756.04 116.97 759.67 119.58 762.62 122.99L753.68 131.32C751.42 128.95 749 127.2 746.39 126.07C743.79 124.94 740.92 124.38 737.8 124.38C734.91 124.38 732.25 124.86 729.82 125.81C727.39 126.76 725.29 128.11 723.53 129.84C721.77 131.57 720.41 133.63 719.45 136C718.49 138.37 718.02 141 718.02 143.89C718.02 146.78 718.5 149.26 719.45 151.65C720.4 154.05 721.76 156.12 723.53 157.85C725.29 159.59 727.38 160.94 729.78 161.93C732.18 162.91 734.83 163.4 737.72 163.4C740.61 163.4 743.2 162.94 745.83 162.01C748.46 161.09 751.02 159.55 753.51 157.41L761.49 167.56C758.14 170.1 754.29 172.03 749.95 173.33C745.61 174.63 741.27 175.28 736.94 175.28L736.95 175.31ZM748.66 165.77V142.95H761.5V167.59L748.66 165.77Z"
          fill="white"
        />
        <path
          d="M770.87 174.27L797.85 113.54H811.73L838.97 174.27H824.22L801.92 120.66H807.56L785.26 174.27H770.86H770.87ZM784.49 161.26L788.05 150.59H819.46L823.1 161.26H784.49Z"
          fill="white"
        />
        <path
          d="M861.01 174.27V149.46L864.22 157.96L837.41 113.54H852.42L872.89 147.55H864.3L884.86 113.54H898.57L871.94 157.96L875.15 149.46V174.27H861.01Z"
          fill="white"
        />
        <path
          d="M1040.63 221.66C1083.35 221.66 1117.99 187.025 1117.99 144.3C1117.99 101.575 1083.35 66.9401 1040.63 66.9401C997.905 66.9401 963.27 101.575 963.27 144.3C963.27 187.025 997.905 221.66 1040.63 221.66Z"
          fill="white"
        />
        <path
          d="M1061.5 139.04L1038.42 115.96C1035.52 113.07 1030.81 113.07 1027.91 115.96C1025.02 118.86 1025.02 123.57 1027.91 126.47L1045.74 144.3L1027.91 162.13C1026.51 163.53 1025.73 165.4 1025.73 167.38C1025.73 169.36 1026.5 171.23 1027.91 172.63C1029.31 174.03 1031.18 174.8 1033.16 174.8C1035.14 174.8 1037.01 174.03 1038.41 172.62L1061.48 149.55C1061.68 149.36 1061.85 149.14 1062.02 148.93L1059.62 146.95L1062.04 148.91C1062.18 148.76 1062.3 148.6 1062.44 148.4C1062.63 148.12 1062.78 147.82 1062.87 147.63L1063.12 147.13C1063.25 146.8 1063.36 146.47 1063.45 146.11L1063.54 145.75C1063.64 145.27 1063.68 144.78 1063.68 144.29C1063.68 142.31 1062.91 140.44 1061.5 139.04Z"
          fill="#FF7710"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_31_1221"
          x="0.779967"
          y="0.75006"
          width="1207.92"
          height="315.82"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="14.36" dy="14.36" />
          <feGaussianBlur stdDeviation="28.71" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.101961 0 0 0 0 0.109804 0 0 0 0 0.2 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_31_1221"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_31_1221"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function TrialPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="mt-12 sm:mt-0">
        <Link
          href="/blogs/buoi-hoc-thu-mien-phi-trai-nghiem-lap-trinh-web"
          onClick={() => setOpen(false)}
        >
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1688553519/popup/hoc-thu/Popup_ho%CC%A3c_thu%CC%9B%CC%89_flpnwv.png"
            className="object-contain w-full"
            height={1000}
            width={1000}
            priority
            alt="Buổi học thử miễn phí | LIKELION"
          />

          <TrialButton className="w-full max-w-xs mx-auto mt-4" />
        </Link>
      </DialogContent>
    </Dialog>
  );
}