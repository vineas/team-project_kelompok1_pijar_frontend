import React from "react";

const HomePage = () => {
  return (
    <>
      <style>
        .discover {"{"}
        font-size: 52px; font-weight: 500; line-height: 50px; color: #2e266f;
        {"}"}
        .search_input {"{"}
        width: 80%; height: 70px; background-color: #efefef; border-radius:
        15px; color: #b6b6b6; padding: 0 50px; border: 0;
        {"}"}
        .colstrip {"{"}
        margin: 50px 0; width: 20px; height: 100px; background-color: #efc81a;
        {"}"}
        .part {"{"}
        font-weight: 500; font-size: 38px; color: #3f3a3a; margin-left: 20px;
        {"}"}
        .healthy {"{"}
        color: #3f3a3a; font-weight: 500; font-size: 40px; line-height: 72.91px;
        width: fit-content;
        {"}"}
        .strip {"{"}
        height: 3px; background-color: #6f6a40; width: 100px; margin: 15px 0;
        {"}"}
        .quick {"{"}
        color: #3f3a3a; font-size: 20px; line-height: 32px; margin: 35px 0;
        {"}"}
        .learnbtn {"{"}
        width: 40%; height: 54px; border-radius: 8px; background-color: #efc81a;
        border: 0;
        {"}"}
        .title_menu {"{"}
        font-weight: 500; font-size: 25px; position: absolute; bottom: 0; left:
        20px;
        {"}"}
        .popularImg::before{"{"}
        content: ""; border: 3px solid #efc81a; position: absolute; display:
        block; width: 400px; height: 480px; border-radius: 5px; top: 60px; left:
        145px; z-index: -1;
        {"}"}
        .newImg::before{"{"}
        content: ""; background-color: #efc81a; width: 414px; height: 490px;
        position: absolute; display: block; top: -20px; right: 440px; z-index:
        -1;
        {"}"}
        .eggImg::before{"{"}
        content: ""; background-color: #efc81a; position: absolute; display:
        block; width: 400px; height: 780px; top: -90px; left:
        265px; z-index: -1;
        {"}"}
        @media screen and (max-width: 428px) {"{"}
        .text_title {"{"}
        display: flex; flex-direction: column-reverse;
        {"}"}
        .discover {"{"}
        font-size: 32px; line-height: 20px;
        {"}"}
        .search_input {"{"}
        width: 100%; height: 50px; border-radius: 10px; padding: 0 30px;
        {"}"}
        .colstrip {"{"}
        margin: 0; width: 15px; height: 70px; background-color: #efc81a;
        {"}"}
        .part {"{"}
        font-weight: 500; font-size: 25px; color: #3f3a3a; margin-left: 20px;
        {"}"}
        .deskription {"{"}
        padding: 20px 0;
        {"}"}
        .healthy {"{"}
        font-size: 30px; line-height: 32.91px;
        {"}"}
        .strip {"{"}
        height: 2px; width: 50px; margin: 15px 0;
        {"}"}
        .quick {"{"}
        color: #3f3a3a; font-size: 15px; line-height: 22px; margin: 20px 0;
        {"}"}
        .learnbtn {"{"}
        width: 30%; height: 34px; border-radius: 4px; font-size: 10px;
        {"}"}
        .title_menu {"{"}
        font-size: 15px; bottom: 0; left: 10px;
        {"}"}
        .popularImg::before{"{"}width: 240px; height: 280px; border-radius: 3px;
        top: 20px; left: 80px;
        {"}"}
        .newImg::before{"{"}width: 144px; height: 270px; top: -10px; left: 0px;
        {"}"}
        {"}"}
      </style>

      <main className="container">
        <div
          className="row pt-3"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="col-sm-7 text_title">
            <div className="pt-3 discover">
              <p>Discover Recipe</p>
              <p>&amp; Delicious Food</p>
            </div>
            <div className="pt-md-3">
              <input
                className="search_input"
                type="text"
                placeholder="Search Restaurant, Food"
              />
            </div>
          </div>
          <div className="col-sm-5 p-3">
            <div
              className="eggImg"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                style={{ width: "100%" }}
                src={require("../../assets/img/home/telur.png")}
              />
            </div>
          </div>
        </div>
        <div className="row align-items-center p-3">
          <div className="colstrip" />
          <p className="part">Popular For You !</p>
        </div>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-sm-7 p-md-4 popularImg">
            <img
              style={{ width: "80%" }}
              src={require("../../assets/img/home/Rectangle 313.png")}
            />
          </div>
          <div className="col-sm-5">
            <div className="deskription">
              <div>
                <p className="healthy">
                  Healthy Bone Broth
                  <br />
                  Ramen (Quick &amp; Easy)
                </p>
                <div className="strip" />
                <p className="quick">
                  Quick + Easy Chicken Bone Broth Ramen- <br />
                  Healthy chicken ramen in a hurry? That’s right!
                </p>
              </div>
              <button className="learnbtn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="row align-items-center p-3">
          <div className="colstrip" />
          <p className="part">New Recipe</p>
        </div>
        <div className="row" style={{ display: "flex", alignItems: "center" }}>
          <div className="col-sm-7 p-md-4 newImg">
            <img
              style={{ width: "80%" }}
              src={require("../../assets/img/home/burger.png")}
            />
          </div>
          <div className="col-sm-5">
            <div className="deskription">
              <div>
                <p className="healthy">
                  Healthy Bone Broth
                  <br />
                  Ramen (Quick &amp; Easy)
                </p>
                <div className="strip" />
                <p className="quick">
                  Quick + Easy Chicken Bone Broth Ramen- <br />
                  Healthy chicken ramen in a hurry? That’s right!
                </p>
              </div>
              <button className="learnbtn">Learn More</button>
            </div>
          </div>
        </div>
        <div className="row align-items-center p-3">
          <div className="colstrip" />
          <p className="part">Popular Recipe</p>
        </div>
        <div>
          <div className="row">
            <div className="col-md-4 col-6 p-lg-4 p-3">
              <div className="menu" style={{ position: "relative" }}>
                <img
                  style={{ width: "100%" }}
                  src={require("../../assets/img/home/chikenkare.png")}
                />
                <p className="title_menu">
                  Chiken <br />
                  Kare
                </p>
              </div>
            </div>
            <div className="col-md-4 col-6 p-lg-4 p-3">
              <div className="menu" style={{ position: "relative" }}>
                <img
                  style={{ width: "100%" }}
                  src={require("../../assets/img/home/bomchiken.png")}
                />
                <p className="title_menu">
                  Bomb <br />
                  Chicken
                </p>
              </div>
            </div>
            <div className="col-md-4 col-6 p-lg-4 p-3">
              <div className="menu" style={{ position: "relative" }}>
                <img
                  style={{ width: "100%" }}
                  src={require("../../assets/img/home/bananapop.png")}
                />
                <p className="title_menu">
                  Banana <br />
                  othie Pop
                </p>
              </div>
            </div>
            <div className="col-md-4 col-6 p-lg-4 p-3">
              <div className="menu" style={{ position: "relative" }}>
                <img
                  style={{ width: "100%" }}
                  src={require("../../assets/img/home/coffelava.png")}
                />
                <p className="title_menu">
                  Coffe Lava <br />
                  Cake
                </p>
              </div>
            </div>
            <div className="col-md-4 col-6 p-lg-4 p-3">
              <div className="menu" style={{ position: "relative" }}>
                <img
                  style={{ width: "100%" }}
                  src={require("../../assets/img/home/sugarsalmon.png")}
                />
                <p className="title_menu">
                  Sugar <br />
                  Salmon
                </p>
              </div>
            </div>
            <div className="col-md-4 col-6 p-lg-4 p-3">
              <div className="menu" style={{ position: "relative" }}>
                <img
                  style={{ width: "100%" }}
                  src={require("../../assets/img/home/indiansalad.png")}
                />
                <p className="title_menu">
                  Indian <br />
                  Salad
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
