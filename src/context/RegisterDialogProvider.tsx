"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const RegisterDialogContext = createContext<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  open: false,
  setOpen: () => {},
});

export default function RegisterDialogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <RegisterDialogContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      {children}
    </RegisterDialogContext.Provider>
  );
}
