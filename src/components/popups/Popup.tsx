import { ReactNode, useEffect, useState } from "react";
import { Dialog, DialogContent } from "../ui/Dialog";

export default function Popup({
  delay = 2000,
  children,
}: {
  delay?: number;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onPageLoad = () => {
      setTimeout(() => {
        setOpen(true);
      }, delay);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [delay]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {open && (
        <DialogContent className="p-0 mt-12 sm:mt-0">{children}</DialogContent>
      )}
    </Dialog>
  );
}
