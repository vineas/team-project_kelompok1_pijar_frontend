import React, { useEffect, useState } from "react";
import style from "./commet.module.css";

import { useDispatch } from "react-redux";
import { createComment, getDetailComment } from "../../config/redux/actions/commentAction";

const CommetIsi = () => {
  let [comments, setCommet] = useState([]);
  let dispatch = useDispatch();
  const recipes_id = localStorage.getItem("recipes_id");
  const users_id = localStorage.getItem("users_id_profile");

  useEffect(() => {
    dispatch(getDetailComment(setCommet, recipes_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    // console.log(data);
  };

  let hendelSubmit = (e) => {
    e.preventDefault();
    dispatch(createComment(data, setData));
  };
  return (
    <>
      <section>
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
          {comments.map((index, key) => (
            <div className="row mt-2" key={key.toString()}>
              <img src={require("../../assets/img/DetailResep/iconcommen.png")} alt="" />
              <div className="ml-3">
                <h6>{index.users_name}</h6>
                <p>{index.comment_text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CommetIsi;
