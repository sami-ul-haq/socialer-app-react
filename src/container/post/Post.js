import React, { useContext } from "react";
import CommentInput from "../../components/comment-input/CommentInput";
import Comment from "../../components/comment/Comment";
import { userContext } from "../../context/userContext";
import { db, storage } from "../../firebase";
import "./Post.css";

const Post = ({ userPhotoUrl, username, photoUrl, caption, comments, id }) => {
  const [user] = useContext(userContext).user;

  const deletePost = () => {
    // delete image from firebase first
    // get ref to the image we want to remove
    let imageUrl = storage.refFromURL(photoUrl);
    imageUrl
      .delete()
      .then(() => {
        console.log("Deleted...");
      })
      .catch((error) => {
        console.log(error.message);
      });

    //   delete post from firestore
    db.collection("posts")
      .doc(id)
      .delete()
      .then(() => {
        console.log("Deleted... Post");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-author">
          <img src={userPhotoUrl} alt="not-found" />
          <p>{username}</p>
        </div>
        <button className="post-delete-btn" onClick={deletePost}>
          Delete
        </button>
      </div>

      <div className="post-image">
        <img src={photoUrl} className="post-center-img" alt="not-found" />
      </div>

      <div>
        <p>
          <span className="author-name">{username}</span> {caption}
        </p>
      </div>

      {comments
        ? comments.map((comment) => (
            <Comment username={comment.username} caption={comment.comment} />
          ))
        : ""}
      {user ? <CommentInput id={id} comments={comments} /> : <></>}
    </div>
  );
};

export default Post;
