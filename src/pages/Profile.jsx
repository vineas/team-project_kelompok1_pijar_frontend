// import styles from '../profile.module.css'
import React from 'react';
import ModalUpdateProfile from '../component/ModalUpdateProfile';
const profileImg = require('../assets/img/profile/profile.png')
const recipe1 = require('../assets/img/profile/recipe1.png')
// const recipe2 = require('../assets/img/profile/recipe2.png')
// const edit = require('../assets/img/profile/edit.png')


const Profile = () => {

  return (
    <>
      <style>
        <>
          .image-recipe-profile{"{"}
          width: 30%;
          {/* height: 250px;  */}
          margin-right: 30px;
          margin-top: 30px
          {"}"}

          @media screen and (max-width: 576px){"{"}
          .image-recipe-profile {"{"}
          width: 85%;
          {"}"}
          {"}"}


        </>
      </style>

      <div className="container" style={{ marginTop: 90 }}>
        <div className="row">
          <div className="col-md-12 ">
            <div className="row">
              <div className="col-md-4 " />
              <div className="col-md-4 ">
                <div
                  className=""
                  style={{ display: "flex", justifyContent: "center", }}
                >
                  <img
                    className=""
                    src={profileImg}
                    alt=""
                    style={{
                      width: "30%",
                      flexDirection: "row",
                      justifyContent: "center",
                      borderRadius: 60
                    }}
                  />
                </div>
                <div
                  className=""
                  style={{ display: "flex", justifyContent: "center", marginTop: 10 }}
                >
                  <h5>Your Name</h5>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <ModalUpdateProfile />
                </div>

              </div>
              <div className="col-md-4 " />
            </div>
          </div>
          <div className="col-md-12" style={{ marginTop: 50 }}>
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  data-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  My Recipe
                </button>
                <button
                  className="nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  data-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Saved Recipe
                </button>
                <button
                  className="nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  data-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Liked Recipe
                </button>
              </div>
            </nav>
            <div
              className="tab-content"
              id="nav-tabContent"
              style={{ marginTop: 20, paddingBottom: 60, paddingLeft: 48 }}
            >
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                style={{ justifyContent: 'center' }}
              >
                <img
                  className='image-recipe-profile'
                  src={recipe1}
                  alt=""
                />
                <img
                  className='image-recipe-profile'
                  src={recipe1}
                  alt=""
                />
                <img
                  className='image-recipe-profile'
                  src={recipe1}
                  alt=""
                />

              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <img
                  className='image-recipe-profile'
                  src={recipe1}
                  alt=""
                />
              </div>
              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <img
                  className='image-recipe-profile'
                  src={recipe1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Profile