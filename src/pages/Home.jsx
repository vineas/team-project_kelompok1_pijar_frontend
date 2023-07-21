import React from "react";
import Nav from "../component/navbar/Nav";
import HomePage from "../component/homepage/HomePage";
import Footer from "../component/footer/footer";
import Chatbox from "../component/chatbox/chatbox";
import NavLog from "../component/navbar login/NavLog";

const Home = () => {
  const login = localStorage.getItem("token");
  if (login) {
    return (
      <>
        <Nav />
        <HomePage />
        <Footer />
        {/* <Chatbox /> */}
      </>
    );
  } else {
    return (
      <>
        <NavLog/>
        <HomePage />
        <Footer />
      </>
    );
  }
};

export default Home;
