import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <style>
        header {"{"}
        top: 0; position: sticky; background-color: transparent; transition: background-color 0.2s ease-in-out; z-index: 10;
        {"}"}
        header.scrolled {"{"}
        background-color: #efc81a; opacity: 0.98;
        {"}"}
        .icon {"{"}
        height: 50px; width: 50px; position: relative; background-color: transparent;
        {"}"}
        .icon::after {"{"}
        content: ""; width: 15px; height: 15px; background-color: #31a24c; position: absolute; border-radius: 100%; right: 0px; top: 0px;
        {"}"}
        {/* div {"{"}
        border: 1px solid;
        {"}"} */}
      </style>

      <header>
        <nav className="container">
          <div className="row" style={{ justifyContent: "space-between", padding: "10px" }}>
            <section className="col-md-4 col-9">
              <div className="row linkTo" style={{ alignItems: "center", height: "100%", textAlign: "center" }}>
                <div className="col-md-4 col-3">
                  <Link to="/home">
                    <p style={{ margin: 0 }}>Home</p>
                  </Link>
                </div>
                <div className="col-md-4 col-6">
                  <Link to="/AddRecep">
                    <p style={{ margin: 0 }}>Add Recipe</p>
                  </Link>
                </div>
                <div className="col-md-4 col-3">
                  <Link to="/Profile">
                    <p style={{ margin: 0 }}>Profile</p>
                  </Link>
                </div>
              </div>
            </section>

            <div className="col-md-1 col-3 row" style={{ justifyContent: "center" }}>
              <div className="icon">
                <Link to="/Login">
                  <img style={{ width: "100%", height: "100%", borderRadius: "100%" }} src={require("../../assets/img/home/profile-icon.png")} />
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
