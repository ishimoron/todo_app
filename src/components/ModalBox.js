import React, {useContext, useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import {TodoContext} from "../context/TodoContext";

const ModalBox = ({id, show, hide}) => {

    const [value, setValue] = useState("");

    const {dispatch} = useContext(TodoContext);


    return (
        <div>
            <Modal show={show} onHide={hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Todo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setValue(e.target.value)}
                            value={value}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={hide}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            if (value.trim()) {
                                dispatch({
                                    type: "EDIT_TODO",
                                    payload: {
                                        id: id,
                                        task: value,
                                    },
                                });
                                hide();
                                setValue("");
                            } else {
                                alert("Input cant blank");
                            }
                        }}
                    >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModalBox;