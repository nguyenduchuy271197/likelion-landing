import { ReactNode } from "react";
import ReactQueryProvider from "./ReactQueryProvider";
import UserProvider from "./RegisterProvider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <UserProvider>{children}</UserProvider>
    </ReactQueryProvider>
  );
}
