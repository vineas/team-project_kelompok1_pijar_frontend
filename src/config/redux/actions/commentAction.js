import axios from "axios";

export const getDetailComment = (setCommet, recipes_id) => async (dispatch) => {
  try {
    axios
      .get(`https://green-scorpion-boot.cyclic.app/comments/${recipes_id}`)
      .then((res) => {
        setCommet(res.data.data);
        // console.log(res.data.data[0].comment_text);
      })
      .catch((err) => {
        console.log(err);
      });
    dispatch({ type: "GET_DETAIL_COMMENT", payload: "success" });
  } catch (error) {
    console.log(error);
  }
};

export const createComment = (data, setData) => async (dispatch) => {
  try {
    axios
      .post("https://green-scorpion-boot.cyclic.app/comments", data, {})
      .then((res) => {
        setData(res.data);
        alert("Comment");

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    dispatch({ type: "CREATE_COMMENT", payload: "success" });
  } catch (error) {}
};
