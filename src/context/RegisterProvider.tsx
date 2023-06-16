"use client";

import { RegisterForm } from "@/schema/registerFormSchema";
import { ReactNode, createContext, useState } from "react";

interface RegisterContext {
  register: RegisterForm;
  onUpdateCourse: (course: RegisterForm["courseId"]) => void;
  onResetCourse: () => void;
  onRegisterForm: (_register: RegisterForm) => void;
}

export const RegisterContext = createContext<RegisterContext>({
  register: {
    name: "",
    email: "",
    phone: "",
    courseId: "",
  },
  onUpdateCourse: () => {},
  onResetCourse: () => {},
  onRegisterForm: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [register, setRegister] = useState<RegisterForm>({
    name: "",
    email: "",
    phone: "",
    courseId: "",
  });

  function handleUpdateCourse(courseId: RegisterForm["courseId"]) {
    setRegister({ ...register, courseId: courseId });
  }

  function handleResetCourse() {
    setRegister({ ...register, courseId: "" });
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
