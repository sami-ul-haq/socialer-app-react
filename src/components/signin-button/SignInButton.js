import React, { useContext } from "react";
import { userContext } from "../../context/userContext";
import { signInWithGoogle } from "../../services/auth";
import "./style.css";

const SignInButton = () => {
  const [, setUser] = useContext(userContext).user;

  const signInBtnClick = async () => {
    let userSignIn = await signInWithGoogle();
    if (userSignIn) setUser(userSignIn);
  };
  return (
    <div className="signInBtn" onClick={signInBtnClick}>
      <p>Sign In With Google</p>
    </div>
  );
};

export default SignInButton;
