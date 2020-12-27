import React from "react";

const myStyle = {
  fontWeight: "bold",
  marginRight: "15px",
};

const Comment = ({ username, caption }) => {
  return (
    <div className="comment">
      <p>
        <span className="author-name" style={myStyle}>
          {username}
        </span>
        {caption}
      </p>
    </div>
  );
};

export default Comment;
