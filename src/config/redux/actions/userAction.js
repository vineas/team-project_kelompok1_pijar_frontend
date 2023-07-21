import axios from "axios";
import Swal from "sweetalert2";

export const userRegister = (data, navigate) => async (dispatch) => {
  try {
    axios.post("https://careful-petticoat-fox.cyclic.app/users/register", data).then((res) => {
      console.log(res);

      if (res.status == 201) {
        Swal.fire({
          title: "Register Added",
          text: `New product have been added`,
          icon: "success",
        })
          .then((result) => {
            navigate("/Login");
          })
          .catch((err) => {});
      }
      Swal.fire({
        title: "Error",
        text: `Input Error`,
        icon: "Error",
      });
    });
    dispatch({ type: "CREATE_USER", payload: data });
  } catch (err) {
    Swal.fire({
      text: err.response.data.message,
      icon: "warning",
    });
    console.log(err);
  }
};

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    axios.post("https://careful-petticoat-fox.cyclic.app/users/login", data).then((res) => {
      console.log(res.data.data);
      const user = res.data.data;
      console.log(user);
      localStorage.setItem("token", user.token);
      localStorage.setItem("refreshToken", user.refreshToken);
      if (res.data.status === "success") {
        Swal.fire("Login Success", "Your account Success Login", "success")
          .then((result) => {
            navigate("/Home");
          })
          .catch((err) => {});
        // return navigate("/home");
      }
      dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    });
  } catch (error) {
    console.log(error);
  }
};
