// import React from "react";
import style from "./DetailResep.Model.css";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetailRecepe } from "../../config/redux/actions/recipeAction";

// import Commet from "../commet/Commet";
import axios from "axios";
import CommetIsi from "../Commet/CommetIsi";
const DetailResepIsi = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let [recipe, setRecipe] = useState("");
  const recipes_id = localStorage.getItem("recipes_id");
  const users_id = localStorage.getItem("users_id_profile");
  const [isLiked, setIsLiked] = useState(false);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    dispatch(getDetailRecepe(setRecipe, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const toggleLike = (liked) => {
    setIsLiked(liked);
  };
  const toggleLike2 = (like) => {
    setIsLike(like);
  };

  const handleLikeClick = () => {
    if (isLiked) {
      alert("Anda sudah menyukai resep ini.");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API_KEY}/likeds/`, { users_id, recipes_id })
      .then(() => {
        toggleLike(true);
        alert("Resep berhasil disukai.");
      })
      .catch((error) => {
        toggleLike(false);
        console.error("Error during like:", error);
      });
  };

  const navigate = useNavigate();

  const hendelClikVideo = () => {
    navigate(`/detailvideo/${recipes_id}`);
  };
  const handleBookmarkClick = () => {
    if (isLike) {
      alert("Resep tersimpan.");
      return;
    }

    axios
      .post(`${process.env.REACT_APP_API_KEY}/bookmarks/`, { users_id, recipes_id })
      .then(() => {
        toggleLike2(true);
        alert("Resep berhasil disimpan.");
      })
      .catch((error) => {
        toggleLike2(false);
        console.error("Error during like:", error);
      });
  };

  return (
    <>
      <section>
        <div className={`container ${style.con} con `}>
          <div className={`  container ${style.title} title   `}>
            <h1 className="mb-5">{recipe.recipes_title}</h1>
            <img className={`img1 ${style.img1}`} src={recipe.recipes_photo} alt="" />
            <div className={` ${style.icons} icons row`}>
              <div>
                <button onClick={handleLikeClick} disabled={isLiked} className="btn-danger">
                  {isLiked ? <i className="bi bi-heart-fill btn-dark"></i> : <i className="bi bi-heart"></i>}
                </button>
              </div>
              <div>
                <button onClick={handleBookmarkClick} disabled={isLike} className="btn-success">
                  {isLike ? <i class="bi bi-bookmark-fill btn-dark" style={{ width: "200%", height: "200%" }}></i> : <i class="bi bi-bookmark" style={{ width: "200%", height: "200%" }}></i>}
                </button>
              </div>
              {/* <div style={{ marginLeft: 30 }}>
                <button className="btn-success" style={{ marginLeft: 10, borderRadius: 10, width: "120%", height: "200%" }}>
                  <i class="bi bi-bookmark-fill" style={{ width: "200%", height: "200%" }}></i>
                </button>
              </div> */}
            </div>
          </div>
          <div className={`   ${style.title_2} title_2 mt-5  `}>
            <h3>Ingredients</h3>
            <ul>
              <p>{recipe.recipes_ingredients}</p>
            </ul>
          </div>
          <div className={`container ${style.title_2} title_2 `}>
            <h3>Video Step</h3>
            <div>
              <div className={`${style.button2} button2 mt-4`}>
                <button onClick={hendelClikVideo}>
                  {/* <Link to={`detailvideo/${recipe.recipes_id}`}> */}
                  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  {/* </Link> */}
                </button>
                <button>
                  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button>
                  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
                <button>
                  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <CommetIsi />
        </div>
      </section>
    </>
  );
};

export default DetailResepIsi;
