import axios from 'axios';
import React, { useState } from 'react'
import { Button, Image } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'
const edit = require('../../assets/img/profile/edit.png')


const ModalUpdateProfile = ({ users_id, users_name, users_phone, users_photo }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [data, setData] = useState({
        users_name,
        users_phone,
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('users_name', data.users_name)
        formData.append('users_phone', data.users_phone)
        formData.append('users_photo', image)
        axios.put(`https://tame-teal-shark-tie.cyclic.app/users/profile/${users_id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })
            .then(() => {
                alert("Profile Updated")
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
            <Link >
                <Image
                    alt='image'
                    src={edit}
                    type="button"
                    onClick={handleShow}
                    style={{
                        width: 20,
                        height: 20,
                        flexDirection: "row",
                        justifyContent: "center"
                    }}
                />
            </Link>
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
                            type="text"
                            placeholder="Your Name"
                            name="users_name"
                            value={data.users_name}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="text"
                            name="users_phone"
                            placeholder="Phone Number"
                            value={data.users_phone}
                            onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="file"
                            placeholder="Image"
                            name="users_photo"
                            value={data.image}
                            onChange={handleUpload}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">
                            Change Password
                        </Button>
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

export default ModalUpdateProfile