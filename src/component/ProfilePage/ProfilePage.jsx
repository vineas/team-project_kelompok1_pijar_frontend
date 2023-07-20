import React from 'react'
import ModalUpdateProfile from '../../component/ModalUpdateProfile/ModalUpdateProfile';
const profileImg = require('../../assets/img/profile/profile.png')
const recipe1 = require('../../assets/img/profile/recipe1.png')

const ProfilePage = () => {
  return (
    <>
      <style>
        <>
          .image-recipe-profile{"{"}
          width: 100%;
          margin-right: 30px;
          margin-top: 30px
          {"}"}

          .title_menu {"{"}
          font-weight: 500; font-size: 25px; position: absolute; bottom: 0; left:
          20px; color: white;
          {"}"}

          @media screen and (max-width: 480px){"{"}
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
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className=""
                    src={profileImg}
                    alt=""
                    style={{
                      width: "30%",
                      flexDirection: "row",
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
              style={{ paddingBottom: 90 }}
            >

              <div className="tab-pane fade show active" id="nav-home">
                <div className='row'>
                  <div className="col-md-4 col-6" >
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <div className='row'>
                  <div className="col-md-4 col-6" >
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div
                className="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className='row'>
                  <div className="col-md-4 col-6" >
                    <div className="menu">
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-6">
                    <div className="menu" style={{ position: "relative" }}>
                      {/* <img style={{ width: "100%" }} src={recipe1)} /> */}
                      <img
                        className='image-recipe-profile'
                        src={recipe1}
                        alt=""
                      />
                      <p className="title_menu">
                        Chiken <br />
                        Kare
                      </p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfilePage