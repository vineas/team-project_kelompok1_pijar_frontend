import React from "react";
import { Link } from "react-router-dom";

const NavLog = () => {
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
      {/* <style>
        header {"{"}
        top: 0; position: sticky; background-color: transparent; transition:
        background-color 0.2s ease-in-out; z-index: 10;
        {"}"}
        header.scrolled {"{"}
        background-color: #efc81a; opacity: 0.98;
        {"}"}
      </style> */}

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
                  textAlign: "center",
                  display: "flex",
                }}
              >
                <div>
                  <Link to="/login">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Login
                    </button>
                  </Link>
                </div>
                <div style={{ margin: "0 10px" }}>
                  <Link to="/register">
                    <button
                      style={{
                        height: "40px",
                        width: "100px",
                        borderRadius: "10px",
                        border: 0,
                      }}
                    >
                      Sign Up
                    </button>
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

export default NavLog;
