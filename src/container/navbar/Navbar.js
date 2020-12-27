import React, { useContext } from "react";
import SignInButton from "../../components/signin-button/SignInButton";
import { userContext } from "../../context/userContext";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useContext(userContext).user;
  return (
    <div className="navbar">
      <h3>MySocialApp</h3>

      {user ? (
        <img src={user.photoURL} className="navbar-img" />
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Navbar;
