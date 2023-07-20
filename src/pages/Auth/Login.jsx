import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <>
      <section className="hero">
        <div className="row">
          <div className="background col-12 col-md-6">
            <div className="icon-1">
              <img src={require("../../assets/img/Login/icon.png")} alt="grup-icon" />
              <p>Mama Recipe.</p>
            </div>
          </div>
          <div className={` inputku col-12 col-md-6`}>
            <div className="inputlogin">
              <h2>Welcome</h2>
              <p>Log in into your exiting account</p>
              <div className="form">
                <div className="form-1">
                  <label>E-mail</label>
                  <input type="text" placeholder="examplexxx@gmail.com" />
                </div>
                <div className="form-2">
                  <label>Password</label>
                  <input type="password" placeholder="*****" />
                </div>
                <div className="cekbox">
                  <input id="cb-1" type="checkbox" defaultChecked="checked" />
                  <label>I agree to terms &amp; conditions</label>
                </div>
                <button>Log in</button>
                <h6>Forgot Password ?</h6>
                <p id="foot">
                  Don’t have an account? <span>Sign Up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
