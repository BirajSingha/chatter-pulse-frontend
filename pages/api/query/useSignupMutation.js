import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { signupFnc } from "../requests/auth";

const useSignupMutation = (setErrorMessage) => {
  const router = useRouter();

  return useMutation({
    mutationFn: signupFnc,
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      router.push({
        pathname: "/otp-verify",
        query: {
          accessToken: data.accessToken,
        },
      });
    },
    onError: (error) => {
      setErrorMessage("Signup failed! " + error.response.data.message);
    },
  });
};

export default useSignupMutation;
