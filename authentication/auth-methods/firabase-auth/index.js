import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { StringConstants } from "../../../components/StringConstants";
import auth from "./config";

export const useProvideAuth = () => {
  const [signInErrors, setSignInErrors] = useState({
    isValid: false,
    message: "",
  });
  const [signupErrors, setSignupErrors] = useState({
    isValid: false,
    message: "",
  });
  const [forgotPasswordErrors, setForgotPasswordErrors] = useState({
    isValid: false,
    message: "",
  });

  const router = useRouter();
  const [authUser, setAuthUser] = useState(null);
  const [resetPasswordEmail, setResetPasswordEmail] = useState(false);
  const [loading, setLoading] = useState(true);

  const userLogin = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        setAuthUser(response.user);
        router.push("/home");
      })
      .catch(async (error) => {
        const message = await getFirebaseErrorMessage(error.message);
        setSignInErrors({
          isValid: true,
          message,
        });
      });
  };

  const userSignup = async (username, email, password) => {
    console.log(username, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (response) => {
        setAuthUser(response.user);
        router.push("/home");
      })
      .catch(async (error) => {
        const message = await getFirebaseErrorMessage(error.message);
        setSignupErrors({
          isValid: true,
          message,
        });
      });
  };

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
        router.push("/signin");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  async function getFirebaseErrorMessage(firebaseError) {
    let message;
    if (firebaseError === "Firebase: Error (auth/wrong-password).") {
      message = StringConstants.INVALID_PASSWORD;
    } else if (firebaseError === "Firebase: Error (auth/user-not-found).") {
      message = StringConstants.INVALID_EMAIL;
    } else if (firebaseError === "Firebase: Error (auth/too-many-requests).") {
      message = StringConstants.RESET_PASSWORD_LIMIT;
    } else {
      message = firebaseError;
    }
    return message;
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(false);
      }
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // Return the user object and auth methods
  return {
    authUser,
    setAuthUser,
    userLogin,
    userSignup,
    userSignOut,
    signInErrors,
    signupErrors,
    setSignupErrors,
    setSignInErrors,
    forgotPasswordErrors,
    setForgotPasswordErrors,
    setResetPasswordEmail,
    resetPasswordEmail,
    loading,
  };
};
