import React from "react";
import style from "./DetailResep.Model.css";

const DetailResepIsi = () => {
  return (
    <>
      <section>
        <div>
          <div className={`  container ${style.title} title   mt-5`}>
            <h1 className="mb-5">Loream Sandwich</h1>
            <img className={`img1 ${style.img1}`} src={require("../../assets/img/DetailResep/Image1.png")} alt="" />
            <div className={` ${style.icons} icons row`}>
              <div className={`${style.book}  book mr-3`}>
                <img className={`imgbook ${style.imgbook}`} src={require("../../assets/img/DetailResep/bookmark.png")} alt="" />
              </div>
              <div className={`${style.vector} vector`}>
                <img className={`imgku ${style.imgku}`} src={require("../../assets/img/DetailResep/Vector.png")} alt="" />
              </div>
            </div>
          </div>
          <div className={`  container ${style.title_2} title_2 mt-5  `}>
            <h3>Ingredients</h3>
            <ul>
              <li>2 eggs</li>
              <li>2 tbsp mayonnaise</li>
              <li>3 slices bread</li>
              <li>a little butter</li>
              <li>⅓ carton of cress</li>
              <li>2-3 slices of tomato or a lettuce leaf and a slice of ham or cheese</li>
              <li>crisps , to serve</li>
            </ul>
          </div>
          <div className={`container ${style.title_2} title_2 `}>
            <h3>Video Step</h3>
            <div>
              <div className={`${style.button2} button2 mt-4`}>
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
                <button>
                  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28223 2.72049L23.6727 13.8819L3.28223 25.0434V2.72049Z" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className={`container ${style.comment}  comment mt-5`}>
            <textarea className={`teksarea ${style.textarea} textarea `} name="" id="" cols="30" rows="10" placeholder="Comment :"></textarea>
            <div className="mt-3">
              <button className={`${style.btnku} btnku`}>Send</button>
            </div>
          </div>
          <div className={`container ${style.title_2} title_2 `}>
            <h3 className="mb-4">Comment</h3>
            <div className="row">
              <img src={require("../../assets/img/DetailResep/iconcommen.png")} alt="" />
              <div className="ml-3">
                <h6>Ayudia</h6>
                <p>Nice recipe. simple and delicious, thankyou</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailResepIsi;
