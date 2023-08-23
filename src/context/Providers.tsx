import { ReactNode } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import RegisterProvider from "./RegisterProvider";
import RegisterDialogProvider from "./RegisterDialogProvider";
import { TooltipProvider } from "@/components/ui/Tooltip";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <RegisterProvider>
        <RegisterDialogProvider>
          <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
        </RegisterDialogProvider>
      </RegisterProvider>
    </ReactQueryProvider>
  );
}
