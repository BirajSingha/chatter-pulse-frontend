import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import useAccVerifyMutation from "./api/query/useAccVerifyMutation";
import useReqAccVerifyMutation from "./api/query/useReqAccVerifyMutation";

const OTPVerify = () => {
  const router = useRouter();
  const { accessToken } = router.query;

  const [verificationCode, setVerificationCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [errorMessage]);

  const accVerifyMutation = useAccVerifyMutation(setErrorMessage, accessToken);
  const resendCodeMutation = useReqAccVerifyMutation(setErrorMessage);

  const handleVerification = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!verificationCode) {
      setErrorMessage("Verification code is required!");
      return;
    }
    if (verificationCode && verificationCode.length !== 4) {
      setErrorMessage("Verification code should be 4 digits!");
      return;
    }

    accVerifyMutation.mutate({ accessToken, verificationCode });
  };

  const handleResendCode = () => {
    setVerificationCode("");
    resendCodeMutation.mutate({ accessToken });
  };

  return (
    <div
      className={`h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900`}
    >
      {errorMessage && (
        <div className="absolute top-10 right-2 w-80 p-5 rounded-md bg-white animate-pulse">
          <p className="text-red-500">{errorMessage}</p>
        </div>
      )}
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Verify your account
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
          Please enter the 4-digit verification code sent to your email.
        </p>

        <form onSubmit={handleVerification} className="w-full">
          <input
            type="text"
            placeholder="Enter your verification code"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />

          <button
            disabled={accVerifyMutation.isPending}
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg mb-4 disabled:cursor-not-allowed"
          >
            {accVerifyMutation.isPending ? "Verifying..." : "Verify"}
          </button>
        </form>
        <div className="text-center flex gap-2">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Forgot your code?{" "}
            <a
              href="#"
              onClick={handleResendCode}
              className="text-blue-500 dark:text-blue-400"
            >
              {resendCodeMutation.isPending ? "Resending..." : "Resend code"}
            </a>
          </p>
          {resendCodeMutation.isPending ? (
            <TailSpin
              visible={true}
              height="20"
              width="20"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default OTPVerify;
