import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";

const Nav = () => {
  const handleOnClick = () => {
    animateScroll.scrollToTop();
  };

  document.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const [users, setUsers] = useState([]);

  const getid = localStorage.getItem("users_id_profile");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/users/profile/${getid}`)
      .then((res) => {
        setUsers(res.data.data[0]);
        localStorage.setItem("users_id", res.data.data[0].users_id);
        // console.log(res.data.data[0]);
      }, [])
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
    window.location.reload();
  };

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
                  height: "70px",
                  display: "flex",
                }}
              >
                <div>
                  <Link to="/home" onClick={handleOnClick}>
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
                  <Link to="/addrecipe" onClick={handleOnClick}>
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
                  <Link to={`/profile/${getid}`} onClick={handleOnClick}>
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
              {/* <ul className="navbar-nav dropdown">
                <li className="nav-item">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        margin: "10px 0",
                      }}
                      src={users.users_photo}
                      alt="profile photo"
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href={`/profile/${getid}`}>
                      Profile
                    </a>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Log Out
                    </button>
                  </div>
                </li>
              </ul> */}
              <div className="btn-group">
                <button type="button" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ backgroundColor: "transparent", border: 0 }}>
                  {!users.users_photo ? (
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        margin: "10px 0",
                      }}
                      src={require("../../assets/img/home/profile-icon.png")}
                      alt="profile photo"
                    />
                  ) : (
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "100%",
                        margin: "10px 0",
                      }}
                      src={users?.users_photo}
                      alt="profile photo"
                    />
                  )}
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  <Link to={`/profile/${getid}`}>
                    <button className="dropdown-item" type="button">
                      Profile
                    </button>
                  </Link>
                  <button className="dropdown-item" type="button" onClick={handleLogout}>
                    Log Out
                  </button>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Nav;
