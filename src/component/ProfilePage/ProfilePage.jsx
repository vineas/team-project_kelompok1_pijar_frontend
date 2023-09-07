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

  const getid = localStorage.getItem("users_id_profile");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/users/profile/${getid}`)
      .then((res) => {
        setUsers(res.data.data[0]);
        localStorage.setItem("users_id", res.data.data[0].users_id);
        console.log(res.data.data[0]);
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
                  <img
                    className=""
                    src={users.users_photo}
                    alt=""
                    style={{
                      width: "30%",
                      flexDirection: "row",
                      borderRadius: 60,
                    }}
                  />
                </div>
                <div
                  className=""
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
                <div className="row">
                  {recipes.map((recipe) => (
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

                          {/* <ModalUpdateRecipe
                            recipes_id={recipe.recipes_id}
                            recipes_title={recipe.recipes_title}
                            recipes_ingredients={recipe.recipes_ingredients}
                            recipes_photo={recipe.recipes_photo}
                            recipes_video={recipe.recipes_video}

                          /> */}
                          {/* {resep.map((recipe) => ( */}

                          {/* {resep && (
                            <div key={recipes.recipes_id}>
                              <button className='btn-danger' style={{ marginLeft: 10, borderRadius: 10 }}
                                onClick={handleDelete}>
                                <i class="bi bi-trash3"></i>
                              </button>
                            </div>
                          )} */}

                          {recipes.map((recipe) => (
                            <div
                              className="col-md-4 col-6"
                              key={recipe.recipes_id}
                            >
                              <div className="menu">
                                {/* ... */}
                                <p className="title_menu">
                                  {/* {recipe.recipes_title} */}
                                  <ModalUpdateRecipe
                                    recipes_id={recipe.recipes_id}
                                    recipes_title={recipe.recipes_title}
                                    recipes_ingredients={
                                      recipe.recipes_ingredients
                                    }
                                    recipes_photo={recipe.recipes_photo}
                                    recipes_video={recipe.recipes_video}
                                  />
                                  <button
                                    className="btn-danger"
                                    style={{ marginLeft: 10, borderRadius: 10 }}
                                    onClick={() =>
                                      handleDelete(recipe.recipes_id)
                                    } // Panggil fungsi deleteRecipe saat tombol di klik
                                  >
                                    <i className="bi bi-trash3"></i>
                                  </button>
                                </p>
                              </div>
                            </div>
                          ))}

                          {/* <ModalDeleteRecipes
                            recipes_id={recipe.recipes_id} 
                            recipes_title={recipe.recipes_title}                          
                            /> */}

                          {/* // ))} */}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className="image-recipe-profile"
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                        <button
                          className="btn-success"
                          style={{ marginLeft: 10, borderRadius: 10 }}
                        >
                          <i class="bi bi-bookmark"></i>
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className="image-recipe-profile"
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                        <button
                          className="btn-success"
                          style={{ marginLeft: 10, borderRadius: 10 }}
                        >
                          <i class="bi bi-bookmark"></i>
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className="image-recipe-profile"
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                        <button
                          className="btn-success"
                          style={{ marginLeft: 10, borderRadius: 10 }}
                        >
                          <i class="bi bi-bookmark"></i>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="row">
                  <div className="col-md-4 col-6">
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className="image-recipe-profile"
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                        <button
                          className="btn-info"
                          style={{ marginLeft: 10, borderRadius: 10 }}
                        >
                          <i class="bi bi-heart"></i>
                        </button>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className="image-recipe-profile"
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                        <button
                          className="btn-info"
                          style={{ marginLeft: 10, borderRadius: 10 }}
                        >
                          <i class="bi bi-heart"></i>
                        </button>
                      </p>
                    </div>
                  </div>
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
