import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


const ModalUpdateRecipe = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    

    
    return (
        <>
            <button className='btn-warning' style={{ marginLeft: 180, borderRadius: 10 }} onClick={handleShow}>
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
                // onSubmit={handleSubmit}
                >
                    <Modal.Body>
                        <input
                            className="form-control mt-3"
                            type="text"
                            placeholder="Your Name"
                            name="name"
                        // value={data.name}
                        // onChange={handleChange}
                        />
                        <input
                            className="form-control mt-3"
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                        // value={data.price}
                        // onChange={handleChange}
                        />                      
                        <input
                            className="form-control mt-3"
                            type="file"
                            placeholder="Image"
                            name="image"
                        // onChange={handleUpload}
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

export default ModalUpdateRecipe