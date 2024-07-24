import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { accVerifyFnc } from "../requests/auth";

const useAccVerifyMutation = (setErrorMessage, accessToken) => {
  const router = useRouter();

  return useMutation({
    mutationFn: accVerifyFnc,
    onSuccess: (data) => {
      console.log(data);
      setErrorMessage("Account verified successfully!");
      Cookies.set("accessToken", accessToken);
      router.push("/");
    },
    onError: (error) => {
      setErrorMessage(
        "Account verification failed! " + error.response.data.message
      );
    },
  });
};

export default useAccVerifyMutation;
