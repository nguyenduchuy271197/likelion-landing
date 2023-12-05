"use client";

import { Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";
import Link from "next/link";
import UrlClipboard from "@/components/UrlClipboard";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
} from "react-share";
import { ReactSVG } from "react-svg";
export default function ShareButton() {
  const shareUrl =
    "https://www.likelion.edu.vn/forms/notion-hack-20-tuoi-va-1000-do-dau-tien";
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex items-center justify-center w-16 h-16 transition bg-white border rounded-full shadow-lg hover:opacity-90">
          <Share2 className="w-6 h-6" />
        </button>
      </DialogTrigger>
      <DialogContent className="space-y-2">
        <h2 className="text-3xl font-bold text-center">
          Share this class with your friends
        </h2>

        <div className="flex items-center justify-center gap-4">
          <FacebookShareButton
            url={shareUrl}
            className="transition hover:opacity-90"
          >
            <ReactSVG src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701770435/forms/notion-webinar/Facebook_nq3mok.svg" />
          </FacebookShareButton>
          <FacebookMessengerShareButton
            appId=""
            url={shareUrl}
            className="transition hover:opacity-90"
          >
            <ReactSVG src="https://res.cloudinary.com/dbscqlwl7/image/upload/v1701770435/forms/notion-webinar/Messenger_nhk5xl.svg" />
          </FacebookMessengerShareButton>
        </div>

        <UrlClipboard url={shareUrl} />
      </DialogContent>
    </Dialog>
  );
}
