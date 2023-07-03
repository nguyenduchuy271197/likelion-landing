"use client";

import { RegisterDialogContext } from "@/context/RegisterDialogProvider";
import { ReactNode, useContext } from "react";
import { Button } from "./ui/Button";

export default function DialogButton({ children }: { children: ReactNode }) {
  const { setOpen } = useContext(RegisterDialogContext);

  return <Button onClick={() => setOpen(true)}>{children}</Button>;
}
