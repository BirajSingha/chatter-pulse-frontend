import { useMutation } from "@tanstack/react-query";
import { fetchProfileFnc } from "../requests/auth";

const useFetchProfileMutation = (setUser) => {
  return useMutation({
    mutationFn: fetchProfileFnc,
    onSuccess: (data) => {
      console.log("USER DATA: ", data);
      setUser(data);
    },
    onError: (error) => {
      setErrorMessage(
        "Account verification failed! " + error.response.data.message
      );
    },
  });
};

export default useFetchProfileMutation;
