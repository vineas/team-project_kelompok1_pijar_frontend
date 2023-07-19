import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../../pages/Profile";
import Home from "../../pages/Home";
import DetailResep from "../../pages/DetailResep";
import AddRecep from "../../pages/AddRecep";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default index;
