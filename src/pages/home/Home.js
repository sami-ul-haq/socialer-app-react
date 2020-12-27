import React from "react";
import CreatePost from "../../container/create-post/CreatePost";
import Feed from "../../container/feed/Feed";
import Navbar from "../../container/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CreatePost />
      <Feed />
    </div>
  );
};

export default Home;
