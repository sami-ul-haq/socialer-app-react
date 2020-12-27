import React from "react";
import CreatePost from "../../container/create-post/CreatePost";
import Navbar from "../../container/navbar/Navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <CreatePost />
    </div>
  );
};

export default Home;
