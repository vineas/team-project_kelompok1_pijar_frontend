import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../config/redux/actions/userAction";

const Login = () => {
  const [agreement, setAgreement] = useState(false);

  const handleChange = (e) => {
    setAgreement(e.target.checked);
  };

  const [data, setData] = useState({
    users_email: "",
    users_confirmpassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    // console.log(data);
  };
  const onClick = (e) => {
    dispatch(loginUser(data, navigate));
  };
  return (
    <>
      <section className="hero">
        <div className="row">
          <div className="background col-12 col-md-6">
            <div className="icon-1">
              <img src={require("../../assets/img/Login/icon.png")} crossOrigin="Anonymous" alt="grup-icon" />
            </div>
          </div>
          <div className="inputku col-12 col-md-6">
            <div className="inputlogin ">
              <h2>Welcome</h2>
              <p>Log in into your exiting account</p>
              <div className="  form">
                <div className=" container form-1">
                  <label>E-mail</label>
                  <input type="email" placeholder="examplexxx@gmail.com" name="users_email" id="email" onChange={onChange} required />
                </div>
                <div className="container form-2">
                  <label>Password</label>
                  <input type="password" placeholder="*****" name="users_confirmpassword" id="password" onChange={onChange} required />
                </div>
                <div className="container cekbox">
                  <input id="cb-1" type="checkbox" name="agreement" onChange={handleChange} />
                  <label>I agree to terms &amp; conditions</label>
                </div>
                <div>
                  {!agreement ? (
                    <button disabled={!agreement} style={{ backgroundColor: "#f5f5f5", color: "grey" }}>
                      Log in{" "}
                    </button>
                  ) : (
                    <button onClick={onClick}>Log in </button>
                  )}
                </div>
                <h6>Forgot Password ?</h6>
                <p id="foot">
                  Don’t have an account?{" "}
                  <Link to="/Register">
                    {" "}
                    <span>Sign Up</span>
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

export default Login;
