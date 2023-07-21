import axios from "axios";
// import swal from "sweetalert";
import Swal from "sweetalert2";

// Get
export const getRecipe = (setProducts) => async (dispatch) => {
  try {
    axios.get("https://0326-2001-448a-4005-2b24-491f-7814-7e4e-9e4e.ngrok-free.app/recipes").then(function (respose) {
      setProducts(respose.data.data);
    });

    dispatch({ type: "GET_ALL_PRODUCT", payload: "success" });
  } catch (error) {
    Swal.fire({
      text: error.respose.data.message,
      icon: "warning",
    });
  }
};

export const createRecipe = (data, recipes_photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("recipes_title", data.recipes_title);
    formData.append("recipes_ingredients", data.recipes_ingredients);
    formData.append("recipes_video", data.recipes_video);
    formData.append("recipes_photo", recipes_photo);

    // console.log(FormData.append("recipes_title", data.recipes_title));
    console.log(data);
    axios
      .post("https://0326-2001-448a-4005-2b24-491f-7814-7e4e-9e4e.ngrok-free.app/recipes", formData, {
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
