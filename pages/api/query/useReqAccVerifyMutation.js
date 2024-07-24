import { useMutation } from "@tanstack/react-query";
import { resendVerificationCodeFnc } from "../requests/auth";

const useReqAccVerifyMutation = (setErrorMessage) => {
  return useMutation({
    mutationFn: resendVerificationCodeFnc,
    onSuccess: (data) => {
      console.log(data);
      setErrorMessage("Account verified code sent successfully!");
    },
    onError: (error) => {
      setErrorMessage(
        "Account verification code sent failed! " + error.response.data.message
      );
    },
  });
};

export default useReqAccVerifyMutation;
