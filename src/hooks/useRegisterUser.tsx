"use client";

import registerFormSchema from "@/validations/registerFormSchema";
import { useState } from "react";
import { z } from "zod";

export default function useRegisterUser() {
  const [user, setUser] = useState<z.infer<typeof registerFormSchema> | null>(
    null
  );

  function handleRegisterUser(user: z.infer<typeof registerFormSchema>) {
    setUser(user);
  }
  return {
    user,
    onRegisterUser: handleRegisterUser,
  };
}
