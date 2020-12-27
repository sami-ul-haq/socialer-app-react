import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SignInButton from "../../components/signin-button/SignInButton";
import { userContext } from "../../context/userContext";
import "./Navbar.css";

const Navbar = () => {
  const [user] = useContext(userContext).user;
  return (
    <div className="navbar">
      <Link to="/" className="logo-title">
        MySocialApp
      </Link>

      {user ? (
        <img src={user.photoURL} className="navbar-img" />
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Navbar;
