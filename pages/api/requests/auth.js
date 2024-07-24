import constants from "@/constants";
import axios from "axios";

export const signupFnc = async ({ name, email, password, phone, address }) => {
  const response = await axios.post(`${constants.BASE_URL}/auth/signUp`, {
    username: name.trim(),
    email: email.toLowerCase().trim(),
    password,
    phone: phone.trim(),
    address: address.trim(),
  });
  return response.data;
};

export const signinFnc = async ({ email, password }) => {
  const response = await axios.post(`${constants.BASE_URL}/auth/signIn`, {
    email: email.toLowerCase().trim(),
    password,
  });
  return response.data;
};

export const resendVerificationCodeFnc = async ({ accessToken }) => {
  const response = await axios.get(
    `${constants.BASE_URL}/auth/reqVerifyAccount`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export const accVerifyFnc = async ({ accessToken, verificationCode }) => {
  const response = await axios.post(
    `${constants.BASE_URL}/auth/verifyAccount`,
    {
      verificationCode,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export const fetchProfileFnc = async ({ accessToken }) => {
  const response = await axios.get(`${constants.BASE_URL}/auth/profile`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
