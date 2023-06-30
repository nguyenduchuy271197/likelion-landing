import { ReactNode } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import RegisterProvider from "./RegisterProvider";
import RegisterDialogProvider from "./RegisterDialogProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <RegisterProvider>
        <RegisterDialogProvider>{children}</RegisterDialogProvider>
      </RegisterProvider>
    </ReactQueryProvider>
  );
}
