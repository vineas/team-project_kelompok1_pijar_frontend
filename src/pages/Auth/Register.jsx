import React from "react";

import "./Auth.css";

const Register = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="background col-6 col-md-6">
            <div className="icon-1">
              <img src={require("../../assets/img/Login/icon.png")} alt="grup-icon" />
              <p>Mama Recipe.</p>
            </div>
          </div>
          <div className={` inputku col-6 col-md-6`}>
            <div className="inputlogin">
              <h2>Let’s Get Started !</h2>
              <p>Create new account to access all features</p>
              <div className="form">
                <div className="form-1">
                  <label>Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-2 pt-3">
                  <label>Email address</label>
                  <input type="password" placeholder="*****" />
                </div>
                <div className="form-2">
                  <label>Phone Number</label>
                  <input type="password" placeholder="08xxxxxxxxxx" />
                </div>
                <div className="form-2">
                  <label>Create New Password</label>
                  <input type="password" placeholder="Create New Password" />
                </div>
                <div className="form-2">
                  <label>New Password</label>
                  <input type="password" placeholder="New Password" />
                </div>
                <div className="cekbox">
                  <input id="cb-1" type="checkbox" defaultChecked="checked" />
                  <label>I agree to terms &amp; conditions</label>
                </div>
                <button>Log in</button>
                <h6>Forgot Password ?</h6>
                <p id="foot">
                  Already have account? <span>Log in Here </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;