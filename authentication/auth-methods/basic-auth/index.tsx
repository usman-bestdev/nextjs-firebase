import { useState } from "react";
import { POST } from "../../../services/httpClient";
import { useRouter } from "next/router";

export const useProvideAuth = () => {
  const router = useRouter();
  const [authUser, setAuthUser] = useState(false);
  const [signInErrors, setSignInErrors] = useState({
    isValid: false,
    message: "",
  });
  const [signupErrors, setSignupErrors] = useState({
    isValid: false,
    message: "",
  });

  const userLogin = async (identifier: string, password: string) => {
    const response = await POST("/auth/local", { identifier, password });
    if (!response.error) {
      setAuthUser(response.user);
      router.push("/home");
    } else {
      setSignInErrors({
        isValid: true,
        message: response.error.response.data.error.message,
      });
    }
  };

  const userSignUp = async (
    username: string,
    email: string,
    password: string
  ) => {
    const response = await POST("auth/local/register", {
      username,
      email,
      password,
    });
    if (!response.error) {
      setAuthUser(response.user);
      router.push("/home");
    } else {
      setSignupErrors({
        isValid: true,
        message: response.error.response.data.error.message,
      });
    }
  };

  // Return the user object and auth methods
  return {
    authUser,
    setAuthUser,
    userLogin,
    userSignUp,
    signInErrors,
    signupErrors,
    setSignupErrors,
    setSignInErrors,
  };
};
