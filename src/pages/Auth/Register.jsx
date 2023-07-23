import React, { useState } from "react";

import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userRegister } from "../../config/redux/actions/userAction";

const Register = () => {
  let [data, setData] = useState({
    users_name: "",
    users_email: "",
    users_phone: "",
    users_password: "",
    users_confirmpassword: "",
  });

  const navigate = useNavigate();

  let onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(setData);
  };
  const dispatch = useDispatch();
  let onClick = (e) => {
    e.preventDefault();

    dispatch(userRegister(data, navigate));
  };
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
                  <input type="text" placeholder="Name" name="users_name" id="users_name" onChange={onChange} />
                </div>
                <div className="form-2 pt-3">
                  <label>Email address</label>
                  <input type="users_email" placeholder="Email" name="users_email" id="users_email" onChange={onChange} />
                </div>
                <div className="form-2">
                  <label>Phone Number</label>
                  <input type="users_phone" placeholder="08xxxxxxxxxx" name="users_phone" id="users_phone" onChange={onChange} />
                </div>
                <div className="form-2">
                  <label>Create New Password</label>
                  <input type="password" placeholder="Create New Password" name="users_password" id="users_password " onChange={onChange} />
                </div>
                <div className="form-2">
                  <label>New Password</label>
                  <input type="password" placeholder="New Password" name="users_confirmpassword" id="users_confirmpassword" onChange={onChange} />
                </div>
                <div className="cekbox">
                  <input id="cb-1" type="checkbox" defaultChecked="checked" />
                  <label>I agree to terms &amp; conditions</label>
                </div>
                <button onClick={onClick}>Log in</button>
                <h6>Forgot Password ?</h6>
                <p id="foot">
                  Already have account?{" "}
                  <Link to="/Login">
                    {" "}
                    <span>Log in Here </span>
                  </Link>
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
