import React from "react";
import Nav from "../component/navbar/Nav";
import HomePage from "../component/homepage/HomePage";
import Footer from "../component/footer/footer";
// import Chatbox from "../component/chatbox/chatbox";
import NavLog from "../component/navbar login/NavLog";

const Home = () => {
  const login = localStorage.getItem("token");

  return (
    <>
      {!login ? <NavLog /> : <Nav />}
        <HomePage />
        <Footer />
      {/* <main>
      </main> */}
    </>
  );
};

export default Home;
