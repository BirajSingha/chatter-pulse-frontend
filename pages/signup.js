import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Signup = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
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

  const handleSignup = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    if (!name) {
      setErrorMessage("Please enter your name!");
      return;
    }
    if (!email) {
      setErrorMessage("Please enter your email!");
      return;
    }
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address!");
      return;
    }
    if (!phone) {
      setErrorMessage("Please enter your phone number!");
      return;
    }
    if (!address) {
      setErrorMessage("Please enter your address!");
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

    signinMutation.mutate({ name, email, phone, address, password });
  };

  const signupFnc = async () => {
    const response = await axios.post("http://localhost:3000/auth/signUp", {
      username: name,
      email,
      password,
      phone,
      address,
    });
    return response.data;
  };

  const signinMutation = useMutation({
    mutationFn: signupFnc,
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      Cookies.set("accessToken", data.accessToken);
      router.push("/otp-verify");
    },
    onError: (error) => {
      console.error("Signup failed:", error);
      setErrorMessage("Signup failed. Please try again.");
    },
  });

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
          Sign Up
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Please enter your details to create an account.
        </p>

        <form onSubmit={handleSignup} className="w-full">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg mb-4"
          >
            Sign Up
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
          <a href="/login" className="text-blue-500 dark:text-blue-400">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
