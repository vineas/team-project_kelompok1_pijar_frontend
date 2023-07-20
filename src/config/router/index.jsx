import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile";
import Home from "../../pages/Home";
import DetailResep from "../../pages/DetailResep";
import AddRecep from "../../pages/AddRecep";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import Forgot from "../../pages/Auth/ForgotPassword/Forgot.Jsx";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/detailresep" element={<DetailResep />} />
          <Route path="/addrecep" element={<AddRecep />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default index;
