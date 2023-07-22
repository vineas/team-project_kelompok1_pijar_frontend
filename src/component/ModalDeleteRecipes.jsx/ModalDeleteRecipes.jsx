import axios from 'axios';
import React, { Fragment, useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteRecipes = ({ recipes_id, recipes_title }) => {
    const getid = localStorage.getItem('users_id')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete = () => {
        axios
            .delete(`https://tame-teal-shark-tie.cyclic.app/recipes/${recipes_id}`)
            .then((res) => {
                alert("delete success");
                setShow(false)
                window.location.reload()
            })
            .catch((err) => {
                alert("delete failed");
                setShow(false)
            });
    };

    return (
        <>
            <button className='btn-danger' style={{ marginLeft: 10, borderRadius: 10 }} onClick={handleShow}>
                <i class="bi bi-trash3"></i>
            </button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are sure want to delete this recipe? {recipes_title}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ModalDeleteRecipes