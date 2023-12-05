import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Notion Hack - 20 tuổi và $1000 đầu tiên trong đời",
  description:
    "Quản lý tự động mọi vấn đề trong cuộc sống, mượt mà & hiệu quả gấp 5 lần trước đây!!!",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
