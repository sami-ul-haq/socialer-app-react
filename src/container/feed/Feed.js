import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import Post from "../post/Post";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, []);

  return (
    <div className="feed">
      {posts.map(({ id, post }) => (
        <Post
          key={id}
          id={id}
          userPhotoUrl={post.userPhotoUrl}
          username={post.username}
          photoUrl={post.photoUrl}
          caption={post.caption}
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default Feed;
