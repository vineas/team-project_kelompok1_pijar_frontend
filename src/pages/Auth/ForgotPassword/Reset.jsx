import React from "react";
import "../Auth.css";

const Reset = () => {
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
              <div className="formforgot">
                <div className="form-1">
                  <label>Code 6 Digit</label>
                  <input type="text" placeholder="" />
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

export default Reset;
