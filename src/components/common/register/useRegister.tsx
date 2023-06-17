import { addUser } from "@/services/userService";
import { useMutation } from "@tanstack/react-query";

export default function useRegister() {
  const {
    isLoading: isRegisterLoading,
    isError: isRegisterError,
    isSuccess: isRegisterSuccess,
    mutate: registerMutate,
  } = useMutation({
    mutationFn: addUser,
  });

  return {
    isRegisterLoading,
    isRegisterError,
    isRegisterSuccess,
    registerMutate,
  };
}
