// import React from "react";
import style from "./DetailResep.Model.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getDetailRecepe } from "../../config/redux/actions/recipeAction";
import axios from "axios";
// import axios from "axios";
const DetailResepIsi = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let [recipe, setRecipe] = useState("");

  useEffect(() => {
    dispatch(getDetailRecepe(setRecipe, id));
  }, [id]);

  let [comments, setCommet] = useState([]);

  const recipes_id = localStorage.getItem("recipes_id");
  const users_id = localStorage.getItem("users_id");

  useEffect(() => {
    axios
      .get(`https://glorious-blue-drill.cyclic.app/comments/${recipes_id}`)
      .then((res) => {
        setCommet(res.data.data);
        // console.log(res.data.data[0].comment_text);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  let [data, setData] = useState({
    comment_text: "",
    users_id: users_id,
    recipes_id: recipes_id,
  });

  let hendelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  let hendelSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://glorious-blue-drill.cyclic.app/comments", data, {})
      .then((res) => {
        console.log(res);
        alert("Commet");

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section>
        <div className="container">
          <div className={`  container ${style.title} title   mt-5`}>
            <h1 className="mb-5">{recipe.recipes_title}</h1>
            <img className={`img1 ${style.img1}`} src={recipe.recipes_photo} alt="" />
            <div className={` ${style.icons} icons row`}>
              <div className={`${style.book}  book mr-3`}>
                <button>
                  <img className={`imgbook ${style.imgbook}`} src="" crossOrigin="Anonymous" alt="" />
                </button>
              </div>
              <div className={`${style.vector} vector`}>
                <img className={`imgku ${style.imgku}`} src={require("../../assets/img/DetailResep/Vector.png")} alt="" />
              </div>
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
                <button>
                  <Link to={`detailvideo/${recipe.recipes_id}`}>
                    <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </Link>
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
          <form onSubmit={hendelSubmit}>
            <div className={`container ${style.comment}  comment mt-5`}>
              <textarea className={`teksarea ${style.textarea} textarea `} name="comment_text" id="" cols="30" rows="10" placeholder="Comment :" value={data.comment_text} onChange={hendelChange}></textarea>
              <div className="mt-3">
                <button className={`${style.btnku} btnku`} type="submit">
                  Send
                </button>
              </div>
            </div>
          </form>
          <div className={`container ${style.title_2} title_2 `}>
            <h3 className="mb-4">Comment</h3>
            {comments.map((index) => (
              <div className="row mt-2">
                <img src={require("../../assets/img/DetailResep/iconcommen.png")} alt="" />
                <div className="ml-3">
                  <h6>{index.users_name}</h6>
                  <p>{index.comment_text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailResepIsi;
