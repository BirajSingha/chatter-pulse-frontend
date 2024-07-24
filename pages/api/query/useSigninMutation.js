import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { signinFnc } from "../requests/auth";

const useSigninMutation = (setErrorMessage) => {
  const router = useRouter();

  return useMutation({
    mutationFn: signinFnc,
    onSuccess: (data) => {
      console.log("LOGGED IN", data);
      if (data?.data?.isVerified === true) {
        Cookies.set("accessToken", data.accessToken);
        setErrorMessage("Logged in successfully!");
        router.push("/");
      }
    },
    onError: (error) => {
      console.log("ERROR: ", error);
      setErrorMessage(error.response.data.message);
      router.push({
        pathname: "/otp-verify",
        query: {
          accessToken: error?.response?.data?.accessToken,
        },
      });
    },
  });
};

export default useSigninMutation;
