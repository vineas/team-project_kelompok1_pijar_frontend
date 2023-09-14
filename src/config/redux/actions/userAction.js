import axios from "axios";
import Swal from "sweetalert2";

export const userRegister = (data, navigate) => async (dispatch) => {
  try {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/users/register`, data)
      .then((res) => {
        console.log(res);

        if (res.status === 201) {
          Swal.fire({
            title: "Register Added",
            text: `New product have been added`,
            icon: "success",
          })
            .then((result) => {
              navigate("/Login");
            })
            .catch((err) => {});
        } else {
          const datas = res.data;

          datas.forEach((res) => {
            console.log(res.message);
            Swal.fire({
              title: "Error",
              text: res.message,
              icon: "Error",
            });
          });

          // console.log(res.data[0].message);
        }
      });
    dispatch({ type: "CREATE_USER", payload: data });
  } catch (err) {
    if (err === 404) {
      Swal.fire({
        text: err.response.data.message,
        icon: "warning",
      });
      console.log(err);
    }
  }
};

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    axios
      .post(`${process.env.REACT_APP_API_KEY}/users/login`, data)
      .then((res) => {
        if (res.data.status === "success") {
          Swal.fire("Login Success", "Your account Success Login", "success")
            .then((result) => {
              navigate("/home");
              localStorage.setItem("users_id", res.data.data.users_id);
              localStorage.setItem("users_id_profile", res.data.data.users_id);
              localStorage.setItem("token", res.data.data.token_user);
            })
        } else {
          console.log(res.data.message);
          Swal.fire("Login Failed", res.data.message, "error");
        }
        dispatch({ type: "USER_LOGIN_SUCCESS", payload: data });
      });
  } catch (error) {
    console.log(error);
  }
};
