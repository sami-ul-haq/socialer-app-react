import React, { useContext, useState } from "react";
import { userContext } from "../../context/userContext";
import { db } from "../../firebase";
import "./CommentInput.css";

const CommentInput = ({ comments, id }) => {
  const [user] = useContext(userContext).user;
  const [comment, setComment] = useState("");

  const [commentArray] = useState(comments ? comments : []);

  const handleComment = () => {
    //   add comment to the post info
    if (comment !== "") {
      commentArray.push({
        comment: comment,
        username: user.email.replace("@gmail.com", "").toLowerCase(),
      });

      db.collection("posts")
        .doc(id)
        .update({
          comments: commentArray,
        })
        .then(() => {
          setComment("");
          console.log("Comment Added");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <div className="comment-input">
      <textarea
        rows="1"
        className="comment-input-textarea"
        placeholder="Write a Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="comment-post-btn" onClick={handleComment}>
        Post
      </button>
    </div>
  );
};

export default CommentInput;
