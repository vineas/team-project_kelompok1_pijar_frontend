import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import validator from "validator";

const ModalUpdateRecipe = ({ recipes_id, recipes_title, recipes_ingredients, users_id, recipes_video }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // const [errorMessage, setErrorMessage] = useState("");
  // const validate = (value) => {
  //   if (validator.isURL(value)) {
  //     setErrorMessage("Is Valid URL");
  //   } else {
  //     setErrorMessage("Is Not Valid URL");
  //   }
  // };

  const [data, setData] = useState({
    recipes_title,
    recipes_ingredients,
    users_id,
    recipes_video,
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("recipes_photo", image);
      formData.append("recipes_title", data.recipes_title);
      formData.append("recipes_ingredients", data.recipes_ingredients);
      formData.append("users_id", users_id);
      formData.append("recipes_video", data.recipes_video);

      // Make the axios.put request to update the recipe
      await axios.put(`${process.env.REACT_APP_API_KEY}/recipes/${recipes_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Recipes Updated");
      setShow(false);
      window.location.reload();
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  return (
    <>
      <button className="btn-warning" style={{ borderRadius: 10 }} onClick={handleShow}>
        <i className="bi bi-pencil-square"></i>
      </button>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <input className="form-control mt-3" type="file" placeholder="Image" name="recipes_photo" value={data.image} onChange={handleUpload} />

            <input className="form-control mt-3" type="text" placeholder="Title" name="recipes_title" value={data.recipes_title} onChange={handleChange} />
            <textarea className="form-control mt-3" placeholder="Ingredients" name="recipes_ingredients" value={data.recipes_ingredients} onChange={handleChange} />

            <input
              className="form-control mt-3"
              type="text"
              name="recipes_video"
              placeholder="Url Youtube"
              value={data.recipes_video}
              // onChange={handleChange}
              // onChange={(e) => validate(e.target.value)}
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {/* {errorMessage} */}
            </span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-warning">
              Update
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdateRecipe;
