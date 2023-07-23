import axios from "axios";
// import swal from "sweetalert";
import Swal from "sweetalert2";

// Get
export const getRecipe = (setRecipe) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_API_KEY}/recipes`).then(function (respose) {
      setRecipe(respose.data.data);
    });

    dispatch({ type: "GET_ALL_PRODUCT", payload: "success" });
  } catch (error) {
    Swal.fire({
      text: error.respose.data.message,
      icon: "warning",
    });
  }
};

export const getDetailRecepe = (setRecipe, id) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_API_KEY}/recipes/${id}`).then((res) => {
      setRecipe(res.data.data[0]);

      console.log(res.data.data[0]);

      localStorage.setItem("recipes_id", res.data.data[0].recipes_id);
      localStorage.setItem("users_id", res.data.data[0].users_id);
      // console.log(product);
    });
    dispatch({ type: "GET_DETAIL_RECEPE", payload: "success" });
  } catch (err) {
    console.log(err);
  }
};

export const createRecipe = (data, recipes_photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("recipes_title", data.recipes_title);
    formData.append("recipes_ingredients", data.recipes_ingredients);
    formData.append("recipes_video", data.recipes_video);
    formData.append("recipes_photo", recipes_photo);
    formData.append("users_id", data.users_id);

    // console.log(FormData.append("recipes_title", data.recipes_title));
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_API_KEY}/recipes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Recipe Added",
          text: `New product have been added`,
          icon: "success",
        });

        window.location.reload();
      });
    dispatch({ type: "CREATE_PRODUCT", payload: "success" });
  } catch (err) {
    Swal.fire({
      text: err.response.data.message,
      icon: "warning",
    });
  }
};
