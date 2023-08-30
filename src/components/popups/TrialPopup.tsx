"use client";

import Image from "next/image";
import { AspectRatio } from "../ui/AspectRatio";
import Popup from "./Popup";
import { LucideProps } from "lucide-react";
import { useState } from "react";

function TrialButton(props: LucideProps) {
  return (
    <svg
      viewBox="0 0 806 153"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_795_12)">
        <path
          d="M785.65 0H20C8.9543 0 0 8.9543 0 20V132.34C0 143.386 8.9543 152.34 20 152.34H785.65C796.696 152.34 805.65 143.386 805.65 132.34V20C805.65 8.9543 796.696 0 785.65 0Z"
          fill="white"
        />
        <path
          d="M96.8101 55.7194C93 53.8094 88.59 52.8594 83.59 52.8594H62.6801V71.9294H56.4301V79.0294H62.6801V98.8894H83.59C88.59 98.8894 92.9901 97.9394 96.8101 96.0294C100.62 94.1194 103.6 91.4494 105.75 88.0094C107.9 84.5694 108.97 80.5194 108.97 75.8794C108.97 71.2394 107.9 67.1894 105.75 63.7494C103.6 60.3094 100.62 57.6294 96.8101 55.7294V55.7194ZM96.3201 83.4694C95.0701 85.6394 93.32 87.3094 91.0601 88.4694C88.8001 89.6294 86.1401 90.2094 83.0701 90.2094H73.4001V79.0294H84.84V71.9294H73.4001V61.5394H83.0701C86.1401 61.5394 88.8001 62.1194 91.0601 63.2794C93.32 64.4394 95.0701 66.0994 96.3201 68.2394C97.5701 70.3894 98.1901 72.9294 98.1901 75.8694C98.1901 78.8094 97.5701 81.2894 96.3201 83.4594V83.4694Z"
          fill="#FF7710"
        />
        <path
          d="M130.84 46.9396C133.1 48.7396 135.94 49.6396 139.36 49.6396C142.78 49.6396 145.62 48.7396 147.88 46.9396C150.14 45.1396 151.35 42.7096 151.53 39.6396H145.09C145 41.0396 144.42 42.1696 143.35 43.0296C142.28 43.8796 140.95 44.3097 139.37 44.3097C137.79 44.3097 136.52 43.8796 135.42 43.0296C134.32 42.1696 133.73 41.0496 133.64 39.6396H127.2C127.37 42.7096 128.59 45.1396 130.85 46.9396H130.84Z"
          fill="#FF7710"
        />
        <path
          d="M134.03 52.8594L113.58 98.8894H124.5L128.6 89.0294H149.92L154.02 98.8894H165.2L144.55 52.8594H134.03ZM131.96 80.9394L139.26 63.3894L146.56 80.9394H131.97H131.96Z"
          fill="#FF7710"
        />
        <path
          d="M204.98 80.7794L182.1 52.8594H173.29V98.8894H183.81V70.9594L206.69 98.8894H215.51V52.8594H204.98V80.7794Z"
          fill="#FF7710"
        />
        <path
          d="M241.78 65.2193C243.12 63.8993 244.71 62.8893 246.55 62.1593C248.39 61.4393 250.41 61.0793 252.6 61.0793C254.97 61.0793 257.14 61.5093 259.11 62.3593C261.08 63.2093 262.92 64.5393 264.63 66.3393L271.4 60.0293C269.16 57.4393 266.41 55.4693 263.15 54.1093C259.88 52.7493 256.21 52.0693 252.14 52.0693C248.46 52.0693 245.08 52.6493 242.01 53.8093C238.94 54.9693 236.27 56.6293 233.99 58.7693C231.71 60.9193 229.95 63.4393 228.7 66.3293C227.45 69.2193 226.83 72.3993 226.83 75.8693C226.83 79.3393 227.45 82.5093 228.7 85.4093C229.95 88.2993 231.69 90.8293 233.93 92.9693C236.17 95.1193 238.82 96.7693 241.89 97.9293C244.96 99.0893 248.31 99.6693 251.95 99.6693C255.24 99.6693 258.53 99.1793 261.81 98.1893C265.09 97.1993 268.01 95.7493 270.56 93.8193V75.1393H260.83V88.6493C260.12 89.0193 259.41 89.3593 258.69 89.6093C256.69 90.3093 254.65 90.6593 252.54 90.6593C250.43 90.6593 248.34 90.2893 246.52 89.5393C244.7 88.7893 243.12 87.7593 241.79 86.4493C240.45 85.1293 239.42 83.5693 238.7 81.7493C237.98 79.9293 237.62 77.9693 237.62 75.8593C237.62 73.7493 237.98 71.6693 238.7 69.8793C239.42 68.0793 240.45 66.5293 241.79 65.2093L241.78 65.2193Z"
          fill="#FF7710"
        />
        <path
          d="M384.83 39.6396H373.85L364.97 49.1096H373L384.83 39.6396Z"
          fill="#FF7710"
        />
        <path
          d="M383.72 52.8594L371.39 73.2394L359.12 52.8594H348.4H347.75H336.57L316.18 74.3394V52.8594H305.59V98.8894H316.18V87.1994L322.29 80.8194L337.09 98.8894H349.59L329.38 73.3994L348.01 53.2894L365.63 82.4994V98.8894H376.35V82.4694L394.11 52.8594H383.72Z"
          fill="#FF7710"
        />
        <path
          d="M455.52 80.7794L432.64 52.8594H423.83V98.8894H434.35V70.9594L457.23 98.8894H466.05V52.8594H455.52V80.7794Z"
          fill="#FF7710"
        />
        <path
          d="M492.32 65.2193C493.66 63.8993 495.25 62.8893 497.09 62.1593C498.93 61.4393 500.95 61.0793 503.14 61.0793C505.51 61.0793 507.68 61.5093 509.65 62.3593C511.62 63.2093 513.46 64.5393 515.17 66.3393L521.94 60.0293C519.7 57.4393 516.95 55.4693 513.69 54.1093C510.42 52.7493 506.75 52.0693 502.68 52.0693C499 52.0693 495.62 52.6493 492.55 53.8093C489.48 54.9693 486.81 56.6293 484.53 58.7693C482.25 60.9193 480.49 63.4393 479.24 66.3293C477.99 69.2193 477.37 72.3993 477.37 75.8693C477.37 79.3393 477.99 82.5093 479.24 85.4093C480.49 88.2993 482.23 90.8293 484.47 92.9693C486.71 95.1193 489.36 96.7693 492.43 97.9293C495.5 99.0893 498.85 99.6693 502.49 99.6693C505.78 99.6693 509.07 99.1793 512.35 98.1893C515.63 97.1993 518.55 95.7493 521.1 93.8193V75.1393H511.37V88.6493C510.66 89.0193 509.95 89.3593 509.23 89.6093C507.23 90.3093 505.19 90.6593 503.08 90.6593C500.97 90.6593 498.88 90.2893 497.06 89.5393C495.24 88.7893 493.66 87.7593 492.33 86.4493C490.99 85.1293 489.96 83.5693 489.24 81.7493C488.52 79.9293 488.16 77.9693 488.16 75.8593C488.16 73.7493 488.52 71.6693 489.24 69.8793C489.96 68.0793 490.99 66.5293 492.33 65.2093L492.32 65.2193Z"
          fill="#FF7710"
        />
        <path
          d="M548.64 52.8594L528.19 98.8894H539.11L543.21 89.0294H564.53L568.63 98.8894H579.81L559.16 52.8594H548.64ZM546.57 80.9394L553.87 63.3894L561.17 80.9394H546.58H546.57Z"
          fill="#FF7710"
        />
        <path
          d="M624.99 52.8594H614.6L602.27 73.2394L590 52.8594H578.63L596.51 82.4994V98.8894H607.23V82.4694L624.99 52.8594Z"
          fill="#FF7710"
        />
        <path
          d="M770.54 17.54H683.27C674.986 17.54 668.27 24.2558 668.27 32.54V119.81C668.27 128.094 674.986 134.81 683.27 134.81H770.54C778.824 134.81 785.54 128.094 785.54 119.81V32.54C785.54 24.2558 778.824 17.54 770.54 17.54Z"
          fill="#FF7710"
        />
        <path
          d="M739.63 72.1904L722.13 54.6904C719.93 52.5004 716.36 52.5004 714.17 54.6904C711.98 56.8804 711.98 60.4604 714.17 62.6504L727.68 76.1604L714.17 89.6704C713.11 90.7304 712.52 92.1504 712.52 93.6504C712.52 95.1504 713.11 96.5704 714.17 97.6304C715.23 98.6904 716.65 99.2804 718.15 99.2804C719.65 99.2804 721.07 98.6904 722.13 97.6304L739.61 80.1504C739.76 80.0004 739.89 79.8404 740.02 79.6804L738.2 78.1804L740.03 79.6704C740.13 79.5504 740.23 79.4304 740.33 79.2904C740.47 79.0804 740.59 78.8504 740.65 78.7104L740.84 78.3304C740.94 78.0804 741.02 77.8304 741.09 77.5604L741.16 77.2904C741.23 76.9304 741.27 76.5504 741.27 76.1804C741.27 74.6804 740.68 73.2603 739.62 72.2003L739.63 72.1904Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_795_12">
          <rect width="805.65" height="152.34" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function TrialPopup() {
  const [isImageReady, setIsImageReady] = useState<boolean>(false);

  return (
    <Popup delay={3000}>
      <a
        href="https://forms.gle/5c7zkd4Z2QnP3Dqw5"
        target="_blank"
        className="relative"
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1693379749/popup/hoc-thu/Free_Trial_pop_up_hbploi.png"
            alt="Trial Class | LIKELION"
            fill
            onLoad={() => setIsImageReady(true)}
          />
        </AspectRatio>

        {isImageReady && (
          <TrialButton className="absolute w-full bottom-6 right-6 max-w-[150px] xs:max-w-[210px] xs:right-8 xs:bottom-8 animate-pulse-512 rounded" />
        )}
      </a>
    </Popup>
  );
}
