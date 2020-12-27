import React, { useContext } from "react";
import SignInButton from "../../components/signin-button/SignInButton";
import { userContext } from "../../context/userContext";
import "./CreatePost.css";

const CreatePost = () => {
  const [user, setUser] = useContext(userContext).user;
  return (
    <div className="createPost">
      {user ? (
        <p> Create Post </p>
      ) : (
        <div className="not-logged-in">
          <SignInButton />
          <p className="post-comment">to Post & Comment</p>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
