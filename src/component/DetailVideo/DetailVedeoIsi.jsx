import React from "react";

import style from "./DetailVodei.Model.css";

const DetailVedeoIsi = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-9  mt-3 p-2">
              {/* <img className={`${style.video} video`} src={require("../../assets/img/DetailVedeo/video.png")} alt="" /> */}

              <iframe className={`${style.video} video`} src="https://www.youtube.com/embed/SPA6ik_iHEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              
              <div className={`${style.title} title`}>
                <h3>Beef Stea with Curry Sauce - [Step 4] Cut the condiment and then mix it</h3>
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