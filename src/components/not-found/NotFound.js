import React from "react";
import Navbar from "../../container/navbar/Navbar";

const myStyles = {
  margin: "20px",
  textAlign: "center",
};

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <h1 style={myStyles}>This Page Does'nt Exist !!</h1>
    </div>
  );
};

export default NotFound;
