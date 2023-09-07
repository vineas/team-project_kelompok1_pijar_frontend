import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../config/redux/actions/recipeAction";
import { Link } from "react-router-dom";
// import Pagination from "../pagination/pagination";
import SearchBar from "../searchbar/SearchBar";
import SearchList from "../searchbar/SearchList";
const HomePage = () => {
  let dispatch = useDispatch();
  let [recipe, setRecipe] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [result, setResult] = useState([])

  useEffect(() => {
    dispatch(getRecipe(setRecipe));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = recipe.slice(firstPostIndex, lastPostIndex);
  const page = Math.ceil(recipe.length / postsPerPage)
  const number = [...Array(page + 1).keys()].slice(1)

  const perPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  const changePage = (id) => {
    setCurrentPage(id)
  }
  const nextPage = () => {
    if (currentPage !== page) {
      setCurrentPage(currentPage + 1)
    }
  }

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
        20px; color: white; text-shadow: 2px 2px #00000066;
        {"}"}
        {/* .popularImg::before{"{"}
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
        block; width: 400px; height: 780px; top: -90px; right: -20px; z-index:
        -1;
        {"}"} */}
        {/* div {"{"}
        border: 1px solid;
        {"}"} */}
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
              {/* <input
                className="search_input"
                type="text"
                placeholder="Search Restaurant, Food"
              /> */}
              <SearchBar setResult={setResult} />
              <SearchList result={result} />
            </div>
          </div>
          <div className="col-sm-5 p-3">
            <div
              className="eggImg"
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <img
                style={{ width: "100%" }}
                alt="img"
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
              alt="img"
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
              alt="img"
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
        <div className="row">
          {currentPosts.map((item, index) => (
            <div className="col-md-4 col-6 p-lg-4 p-3">
              <Link
                to={`/DetailRecipe/${item.recipes_id}`}
                key={index.toString()}
                style={{ color: "black" }}
              >
                <div
                  className="menu"
                  style={{
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    height: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={item.recipes_photo}
                    alt="recipes photo"
                  />
                  <p className="title_menu">{item.recipes_title}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <nav className="d-flex justify-content-center">
      </nav>
        <ul className="pagination">
          <li className="page-item">
            <div className="btn page-link" onClick={perPage}>Prev</div>
          </li>
          {
            number.map((n,i) => (
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <div className="btn page-link" onClick={()=>changePage(n)}>{n}</div>
              </li>
            ))
          }
          <li className="page-item">
            <div className="btn page-link" onClick={nextPage}>Next</div>
          </li>
        </ul>
        {/* <Pagination
          totalPosts={recipe.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        /> */}
      </main>
    </>
  );
};

export default HomePage;
