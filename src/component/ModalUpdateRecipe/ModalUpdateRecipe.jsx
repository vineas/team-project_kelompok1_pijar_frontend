import axios from 'axios';
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


const ModalUpdateRecipe = ({ recipes_id, recipes_title, recipes_ingredients, recipes_photo, recipes_video }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [data, setData] = useState({
        recipes_title,
        recipes_ingredients,
        recipes_video
    })

    const [image, setImage] = useState(null)

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleUpload = (e) => {
        setImage(e.target.files[0]);
    }

    const getid = localStorage.getItem('users_id')

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('recipes_title', data.recipes_title)
        formData.append('recipes_ingredients', data.recipes_ingredients)
        formData.append('recipes_photo', image)
        formData.append('recipes_video', data.recipes_video)
        axios.put(`https://tame-teal-shark-tie.cyclic.app/recipes/${recipes_id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then(() => {
                alert("Recipes Updated")
                setShow(false)
                window.location.reload()
            })
            .catch((err) => {
                alert(err);
                setShow(false)
            })
    }


    return (
        <>
            <button className='btn-warning' style={{ marginLeft: 30, borderRadius: 10 }} onClick={handleShow}>
                <i class="bi bi-pencil-square"></i>
            </button>

            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {/* {children}  */}
                        Edit Profile
                    </Modal.Title>
                </Modal.Header>
                <form
                onSubmit={handleSubmit}
                >
                    <Modal.Body>
                        <input
                            className="form-control mt-3"
                            type="file"
                            placeholder="Image"
                            name="image"
                            value={data.image}
                            onChange={handleUpload}
                        />

                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Title"
                            name="recipes_title"
                            value={data.recipes_title}
                            onChange={handleChange}
                        />
                        <textarea
                            className="form-control mt-3"
                            type="text"
                            placeholder="Ingredients"
                            name="recipes_ingredients"
                            value={data.recipes_ingredients}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mt-3"
                            type="recipes_video"
                            name="phone"
                            placeholder="Video"
                            value={data.recipes_video}
                            onChange={handleChange}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type="submit" className="btn btn-warning">Update</button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    )
}

export default ModalUpdateRecipe