import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile";
import Home from "../../pages/Home";
import DetailRecipe from "../../pages/DetailRecipe";
import AddRecipe from "../../pages/AddRecipe";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import ForgotPassword from "../../pages/Auth/ForgotPassword/ForgotPassword";
import Reset from "../../pages/Auth/ForgotPassword/Reset";
import DetailVideo from "../../pages/Auth/DetailVideo";

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true"></Navigate>} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/detailrecipe/:id" element={<DetailRecipe />} />
          <Route path="/detailvideo/:id" element={<DetailVideo />} />
          <Route path="/addrecipe" element={<AddRecipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default index;
