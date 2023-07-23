import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              height: "auto",
            }}
          >
            <section>
              <div
                className="linkTo"
                style={{
                  alignItems: "center",
                  height: "100%",
                  display: "flex",
                }}
              >
                <div>
                  <Link to="/home">
                    <p
                      style={{
                        margin: 0,
                        width: "80px",
                        borderRadius: "10px",
                        color: "#2E266F",
                      }}
                    >
                      Home
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/addrecipe">
                    <p
                      style={{
                        margin: 0,
                        width: "115px",
                        borderRadius: "10px",
                        color: "#2E266F",
                      }}
                    >
                      Add Recipe
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to="/profile/:id">
                    <p
                      style={{
                        margin: 0,
                        width: "60px",
                        borderRadius: "10px",
                        color: "#2E266F",
                      }}
                    >
                      Profile
                    </p>
                  </Link>
                </div>
              </div>
            </section>
            <section style={{ justifyContent: "center" }}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  margin: "10px 0",
                }}
                src={require("../../assets/img/home/profile-icon.png")}
              />
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
