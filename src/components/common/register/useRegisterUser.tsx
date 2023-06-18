import { addUser } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";

export default function useRegisterUser() {
  const {
    isLoading: isRegisterLoading,
    isError: isRegisterError,
    isSuccess: isRegisterSuccess,
    mutate: registerUser,
  } = useMutation({
    mutationFn: addUser,
  });

  return {
    isRegisterLoading,
    isRegisterError,
    isRegisterSuccess,
    registerUser,
  };
}
