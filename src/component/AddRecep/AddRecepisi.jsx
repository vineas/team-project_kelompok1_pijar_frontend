import React from "react";

import style from "./AddReceo.Model.css";

const AddRecepisi = () => {
  return (
    <div>
      <section>
        <div className="container pt-4">
          <div className={` container ${style.addfile} addfile `}>
            <img src={require("../../assets/img/AddRecep/image.png")} alt="" />
            <input id="" type="file" placeholder="Title" accept=".jpg,.gif,.png" multiple />
          </div>
          <div className={`  ${style.title} title pt-4 `}>
            <input className="p-4" type="text" placeholder="Title" />
          </div>
          <div className={`  ${style.Ingredients} Ingredients pt-4 `}>
            <textarea className="p-4" type="text" placeholder="Ingredients" />
          </div>
          <div className={`  ${style.video} video pt-4 `}>
            <input className="p-4" type="text" placeholder="video" />
          </div>
          <div className={`  ${style.buttoninput} buttoninput pt-4 `}>
            <div className="">
              <button> Post</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddRecepisi;
