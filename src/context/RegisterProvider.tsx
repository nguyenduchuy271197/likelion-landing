"use client";

import { RegisterFormType } from "@/schema/registerFormSchema";
import { ReactNode, createContext, useState } from "react";

interface RegisterContext {
  register: RegisterFormType;
  onUpdateCourse: (course: RegisterFormType["courseId"]) => void;
  onResetCourse: () => void;
  onRegisterForm: (_register: RegisterFormType) => void;
}

const initialRegister = {
  name: "",
  email: "",
  phone: "",
  // courseId: "",
};

export const RegisterContext = createContext<RegisterContext>({
  register: initialRegister,
  onUpdateCourse: () => {},
  onResetCourse: () => {},
  onRegisterForm: () => {},
});

export default function UserProvider({ children }: { children: ReactNode }) {
  const [register, setRegister] = useState<RegisterFormType>(initialRegister);

  function handleUpdateCourse(courseId: RegisterFormType["courseId"]) {
    setRegister({ ...register, courseId: courseId });
  }

  function handleResetCourse() {
    setRegister(initialRegister);
  }

  function handleRegisterForm(_register: RegisterFormType) {
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
