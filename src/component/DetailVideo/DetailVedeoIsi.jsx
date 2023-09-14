import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./DetailVodei.Model.css";
import { getDetailRecepe } from "../../config/redux/actions/recipeAction";
import ReactPlayer from "react-player";

const DetailVedeoIsi = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let [recipe, setRecipe] = useState("");
  console.log(id);
  useEffect(() => {
    dispatch(getDetailRecepe(setRecipe, id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9  mt-3 p-2  ">
              <div className={`video ${style.video}`}>
                <ReactPlayer url={recipe.recipes_video} className={`video`} />
              </div>
              <div className={`${style.titleku} titleku`}>
                <h3>{recipe.recipes_title}</h3>
                <p>3 month ago</p>
              </div>
            </div>
            <div className="col-12 col-md-3  mt-3  p-2">
              <h4>Next </h4>
              <div className={`${style.video1} video1`}>
                <img className={`${style.video_stap} mt-4 video_stap`} src={require("../../assets/img/DetailVedeo/Rectangle 90.png")} alt="" />
                <h6>Beef Steak with Curry Sauce-[Step5] Saute condiments together until turn brown</h6>
                <p>HanaLohana - 3 month ago</p>
              </div>
              <div className={`${style.video1} video1 pt-3`}>
                <img className={`${style.video_stap} video_stap`} src={require("../../assets/img/DetailVedeo/steak.png")} alt="" />
                <h6>Beef Steak with Curry Sauce-[Step5] Saute condiments together until turn brown</h6>
                <p>HanaLohana - 3 month ago</p>
              </div>
              <div className={`${style.video1} video1  pt-3`}>
                <img className={`${style.video_stap} video_stap`} src={require("../../assets/img/DetailVedeo/steak.png")} alt="" />
                <h6>Beef Steak with Curry Sauce-[Step5] Saute condiments together until turn brown</h6>
                <p>HanaLohana - 3 month ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailVedeoIsi;
