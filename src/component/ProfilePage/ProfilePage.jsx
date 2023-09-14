import React, { useEffect, useState } from "react";
import ModalUpdateProfile from "../../component/ModalUpdateProfile/ModalUpdateProfile";
import axios from "axios";
// import { useParams } from "react-router-dom";
import ModalUpdateRecipe from "../ModalUpdateRecipe/ModalUpdateRecipe";
// import ModalDeleteRecipes from "../ModalDeleteRecipes.jsx/ModalDeleteRecipes";
import Swal from "sweetalert";
// const profileImg = require('../../assets/img/profile/profile.png')
const recipe1 = require("../../assets/img/profile/recipe1.png");

const ProfilePage = () => {
  // let { id, recipes_id } = useParams();
  let [users, setUsers] = useState([]);
  // let [resep, setResep] = useState([]);
  let [recipes, setRecipes] = useState([]);
  let [likeds, setLikeds] = useState([]);
  let [bookmarks, setBookmarks] = useState([]);

  const getid = localStorage.getItem("users_id_profile");

  const [search, setSearch] = useState("");

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

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/recipes/users/${getid}`)
      .then((res) => {
        setRecipes(res.data.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (recipes_id) => {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/recipes/${recipes_id}`)
      .then((res) => {
        Swal({
          title: "Apakah Anda yakin?",
          text: "Resep akan dihapus dan tidak dapat dikembalikan!",
          icon: "warning",
          buttons: ["Batal", "Ya, hapus"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            setRecipes((prevRecipes) =>
              prevRecipes.filter((recipe) => recipe.recipes_id !== recipes_id)
            );
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/likeds/${getid}`)
      .then((res) => {
        setLikeds(res.data.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteLike = (likeds_id) => {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/likeds/${likeds_id}`)
      .then((res) => {
        Swal({
          title: "Apakah Anda yakin?",
          text: "Resep akan diunlike",
          icon: "warning",
          buttons: ["Batal", "Ya, unlike"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            setLikeds((prevLikes) =>
              prevLikes.filter((like) => like.likeds_id !== likeds_id)
            );
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/bookmarks/${getid}`)
      .then((res) => {
        setBookmarks(res.data.data);
      }, [])
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDeleteBookmarks = (bookmarks_id) => {
    axios
      .delete(`${process.env.REACT_APP_API_KEY}/bookmarks/${bookmarks_id}`)
      .then((res) => {
        Swal({
          title: "Apakah Anda yakin?",
          text: "Resep akan diunbookmark",
          icon: "warning",
          buttons: ["Batal", "Ya, unbookmark"],
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            setLikeds((prevBookmarks) =>
              prevBookmarks.filter(
                (bookmark) => bookmark.bookmarks_id !== bookmarks_id
              )
            );
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <style>
        <>
          .image-recipe-profile{"{"}
          width: 100%; height: 236px; margin-right: 30px; margin-top: 30px;
          border-radius: 10px; object-fit: cover;
          {"}"}
          .title_menu {"{"}
          font-weight: 500; font-size: 25px; position: absolute; bottom: 0;
          left: 20px; color: white; margin-left: 10px;
          {"}"}
          @media screen and (max-width: 480px){"{"}
          .image-recipe-profile {"{"}
          width: 85%;
          {"}"}
          {"}"}
        </>
      </style>

      <div className="container" style={{ marginTop: 90 }}>
        <div className="row">
          <div className="col-md-12 ">
            {/* {users.map((item) => ( */}
            <div className="row">
              <div className="col-md-4 " />
              <div className="col-md-4 ">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {users.users_photo ? (
                    <img
                      src={users.users_photo}
                      alt="photo"
                      style={{
                        width: "30%",
                        // flexDirection: "row",
                        borderRadius: "100%",
                      }}
                    />
                  ) : (
                    <img
                      src={require("../../assets/img/home/profile-icon.png")}
                      alt="photo"
                      style={{
                        width: "30%",
                        // flexDirection: "row",
                        borderRadius: "100%",
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 10,
                  }}
                >
                  <h5>{users.users_name}</h5>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <ModalUpdateProfile
                    users_id={users.users_id}
                    users_name={users.users_name}
                    users_phone={users.users_phone}
                    users_photo={users.users_photo}
                  />
                </div>
              </div>
              <div className="col-md-4 " />
            </div>
            {/* ))} */}
          </div>
          <div className="col-md-12" style={{ marginTop: 50 }}>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  data-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  My Recipe
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  data-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Saved Recipe
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  data-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Liked Recipe
                </button>
              </div>
            </nav>
            <div
              className="tab-content"
              id="nav-tabContent"
              style={{ paddingBottom: 90 }}
            >
              <div className="tab-pane fade show active" id="nav-home">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  style={{ borderRadius: 94, marginTop: 30, width: "33%" }}
                />

                <div className="row">
                  {recipes
                    .filter((recipe) => {
                      return search.toLowerCase() === ""
                        ? recipe
                        : recipe.recipes_title.toLowerCase().includes(search);
                    })
                    .map((recipe) => (
                      <div className="col-md-4 col-12">
                        <div className="menu">
                          {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                          <img
                            className="image-recipe-profile"
                            src={recipe.recipes_photo}
                            alt=""
                          />
                          <p className="title_menu">
                            {recipe.recipes_title}

                            {/* {recipes.map((recipe) => ( */}
                              <div
                                className="col-md-4 col-6"
                                key={recipe.recipes_id}
                              >
                                <div
                                  className="menu"
                                  style={{ position: "relative" }}
                                >
                                  <div
                                    className="menu-content"
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      height: "100%",
                                    }}
                                  >
                                    <div
                                      className="menu-left"
                                      style={{
                                        flex: 1,
                                      }}
                                    >
                                      <ModalUpdateRecipe
                                        recipes_id={recipe.recipes_id}
                                        recipes_title={recipe.recipes_title}
                                        recipes_ingredients={
                                          recipe.recipes_ingredients
                                        }
                                        recipes_photo={recipe.recipes_photo}
                                        recipes_video={recipe.recipes_video}
                                      />
                                    </div>

                                    <div
                                      className="menu-right"
                                      style={{ flex: 0, marginLeft: 10 }}>
                                      <button
                                        className="btn-danger"
                                        onClick={() =>
                                          handleDelete(recipe.recipes_id)
                                        }
                                        style={{ borderRadius: 10 }}
                                      >
                                        <i className="bi bi-trash3"></i>
                                      </button>
                                    </div>
                                  </div>

                                  {/* ... */}
                                  <p className="title_menu"></p>
                                </div>
                              </div>
                            {/* ))} */}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* bookmark */}
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row">
                  {bookmarks.map((bookmark) => (
                    <div
                      className="col-md-4 col-12"
                      key={bookmark.bookmarks_id}
                    >
                      <div className="menu">
                        <img
                          className="image-recipe-profile"
                          src={bookmark.recipes_photo}
                          alt=""
                        />
                        <p className="title_menu">
                          {bookmark.recipes_title}

                          <div
                            className="col-md-4 col-12"
                            key={bookmark.bookmarks_id}
                          >
                            <div className="menu">
                              <p className="title_menu">
                                <button
                                  className="btn-success"
                                  style={{
                                    marginLeft: 5,
                                    borderRadius: 10,
                                    marginTop: 5,
                                    marginBottom: 140,
                                  }}
                                  onClick={() =>
                                    handleDeleteBookmarks(bookmark.bookmarks_id)
                                  } // Panggil fungsi deleteRecipe saat tombol di klik
                                >
                                  <i class="bi bi-bookmark"></i>
                                </button>
                              </p>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* likeds */}
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="row">
                  {likeds.map((like) => (
                    <div className="col-md-4 col-12" key={like.likeds_id}>
                      <div className="menu">
                        <img
                          className="image-recipe-profile"
                          src={like.recipes_photo}
                          alt=""
                        />
                        <p className="title_menu">
                          {like.recipes_title}

                          {/* {likeds.map((like) => ( */}
                          <div className="col-md-4 col-12" key={like.likeds_id}>
                            <div className="menu">
                              <p className="title_menu">
                                <button
                                  className="btn-danger"
                                  style={{
                                    marginLeft: 5,
                                    borderRadius: 10,
                                    marginTop: 5,
                                    color: "pink",
                                    marginBottom: 140,
                                  }}
                                  onClick={() =>
                                    handleDeleteLike(like.likeds_id)
                                  } // Panggil fungsi deleteRecipe saat tombol di klik
                                >
                                  <i class="bi bi-heart"></i>
                                </button>
                              </p>
                            </div>
                          </div>
                          {/* ))} */}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
