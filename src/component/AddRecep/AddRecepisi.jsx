import React, { useState } from "react";

import style from "./AddReceo.Model.css";
import { useDispatch } from "react-redux";
import { createRecipe } from "../../config/redux/actions/recipeAction";

const AddRecepisi = () => {
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const user = localStorage.getItem("users_id_profile");

  const [data, setData] = useState({
    recipes_title: "",
    recipes_ingredients: "",
    recipes_video: "",
    users_id: user,
  });
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState(null);

  let hendelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const handleUpload = (e) => {
    setPhoto(e.target.files[0]);
  };

  let hendelSubmit = (e) => {
    e.preventDefault();

    dispatch(createRecipe(data, photo));
  };

  return (
    <div>
      <section>
        <div className="container pt-4">
          <form onSubmit={hendelSubmit}>
            <div className={` container ${style.addfile} addfile `}>
              <img src={require("../../assets/img/AddRecep/image.png")} alt="" />
              <input id="" type="file" placeholder="Title" accept=".jpg,.gif,.png" value={data.recipes_photo} name="recipes_photo" multiple onChange={handleUpload} />
            </div>
            <div className={`  ${style.title}  title pt-4 `}>
              <input className="p-4" type="text" placeholder="Title" name="recipes_title" value={data.recipes_title} onChange={hendelChange} />
            </div>
            <div className={`  ${style.Ingredients} Ingredients pt-4`}>
              <textarea className="p-4" type="text" placeholder="Ingredients" name="recipes_ingredients" value={data.recipes_ingredients} onChange={hendelChange} />
            </div>
            <div className={`  ${style.video} video pt-4 `}>
              <input className="p-4" type="text" placeholder="video" name="recipes_video" value={data.recipes_video} onChange={hendelChange} />
            </div>
            <div className={`  ${style.buttoninput} buttoninput pt-4 `}>
              <div className="">
                <button type="submit"> Post</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddRecepisi;
