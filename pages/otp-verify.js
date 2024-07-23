import { useRouter } from "next/router";
import React, { useState } from "react";

const OTPVerify = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleVerification = () => {};

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
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg mb-4"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default OTPVerify;
