import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import useSigninMutation from "./api/query/useSigninMutation";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //EMAIL REGEX
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // PASSWORD REGEX
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  }, [errorMessage]);

  useEffect(() => {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) return;
    router.replace("/");
  }, []);

  const signinMutation = useSigninMutation(setErrorMessage);

  const handleLogin = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!email) {
      setErrorMessage("Please enter your email!");
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address!");
      return;
    }
    if (!password) {
      setErrorMessage("Please enter your password!");
      return;
    }
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must contain at least 8 characters, including uppercase and lowercase letters, numbers, and special characters!"
      );
      return;
    }

    signinMutation.mutate({ email, password });
  };

  return (
    <div
      className={`h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900`}
    >
      {errorMessage && (
        <div className="absolute top-10 right-2 w-80 p-5 rounded-md bg-gray-500 animate-pulse">
          <p className="text-red-400">{errorMessage}</p>
        </div>
      )}
      <div className="max-w-md w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome back
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Please enter your details.
        </p>

        <form onSubmit={handleLogin} className="w-full">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <button
            disabled={signinMutation.isPending}
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg mb-4 disabled:cursor-not-allowed"
          >
            {signinMutation.isPending ? "Loging in..." : "Log in"}
          </button>
        </form>

        <div className="w-full flex items-center justify-center mb-4">
          <div className="border-t border-gray-300 flex-grow dark:border-gray-600"></div>
          <span className="px-2 text-gray-600 dark:text-gray-400">OR</span>
          <div className="border-t border-gray-300 flex-grow dark:border-gray-600"></div>
        </div>
        <button className="w-full p-3 bg-white border border-gray-300 text-gray-700 rounded-lg mb-2 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <img src="/google.png" alt="Google" className="w-6 h-6 mr-2" />
          Continue with Google
        </button>

        <p className="text-gray-600 dark:text-gray-400 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 dark:text-blue-400">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
