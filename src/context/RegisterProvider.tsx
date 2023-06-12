"use client";

import { IUser } from "@/types";
import { Course, RegisterForm } from "@/validations/registerFormSchema";
import { ReactNode, createContext, useState } from "react";

interface RegisterContext {
  register: RegisterForm;
  onUpdateCourse: (course: Course) => void;
  onResetCourse: () => void;
  onRegisterForm: (_register: RegisterForm) => void;
}

export const RegisterContext = createContext<RegisterContext>({
  register: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  onUpdateCourse: () => {},
  onResetCourse: () => {},
  onRegisterForm: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [register, setRegister] = useState<RegisterForm>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  function handleUpdateCourse(course: Course) {
    setRegister({ ...register, course: course });
  }

  function handleResetCourse() {
    setRegister({ ...register, course: undefined });
  }

  function handleRegisterForm(_register: RegisterForm) {
    setRegister(_register);
  }

  return (
    <RegisterContext.Provider
      value={{
        register,
        onUpdateCourse: handleUpdateCourse,
        onResetCourse: handleResetCourse,
        onRegisterForm: handleRegisterForm,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}
