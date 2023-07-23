import React from "react";
import "../Auth.css";

const ForgotPassword = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="background col-6 col-md-6">
            <div className="icon-1">
              <img
                src={require("../../../assets/img/Login/icon.png")}
                alt="grup-icon"
              />
              <p>Mama Recipe.</p>
            </div>
          </div>
          <div className={` inputku col-6 col-md-6`}>
            <div className="inputloginforgot">
              <h2>Forgot Password?</h2>
              <dir className="paragraf">
                <p>
                  We just need your registered e-mail address to send your
                  password resend
                </p>
              </dir>

              <div className="formforgot">
                <div className="form-1">
                  <label>E-mail</label>
                  <input type="text" placeholder="examplexxx@gmail.com" />
                </div>
                <button>Log in</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
