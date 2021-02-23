import React, {Fragment, useContext, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import {TodoContext} from "../context/TodoContext";

const TodoList = () => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState("");
    const [editTask, setEditTask] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {dispatch, state} = useContext(TodoContext);


    return (
        <Fragment>
            {state.todos.length > 0 ? (
                <div className="">
                    <ul className="list-group">
                        {state.todos.map((todo) => (
                            <li
                                key={todo.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                                style={{
                                    textDecoration: todo.completed ? "line-through" : "none",
                                    color: todo.priority ? 'red' : 'black',
                                    fontSize: todo.priority ? '20px' : '16px',
                                    fontStyle: todo.priority ? 'italic' : 'normal',
                                    fontWeight: todo.priority ? 'bold' : 'normal',
                                }}
                            >
                                <div className="col-6 d-flex align-items-center justify-content-between">
                                    <input
                                        type="checkbox"
                                        id="completed"
                                        onClick={() => {
                                            var checkBox = document.getElementById("completed");
                                            if (checkBox.checked) {
                                                dispatch({
                                                    type: "COMPLETED_TODO",
                                                    payload: todo.id,
                                                });
                                            } else {
                                                dispatch({
                                                    type: "UNCOMPLETED_TODO",
                                                    payload: todo.id,
                                                });
                                            }
                                        }}
                                        className="d-flex justify-content-start align-items-center"
                                    />
                                    {todo.task}
                                </div>
                                <div>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
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
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button
                                                variant="primary"
                                                onClick={() => {
                                                    if (value.trim()) {
                                                        dispatch({
                                                            type: "EDIT_TODO",
                                                            payload: {
                                                                id: editTask,
                                                                task: value,
                                                            },
                                                        });
                                                        handleClose();
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
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary mr-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch({type: 'PRIORITY', payload: todo.id})
                                        }}
                                    >
                                        <i className="fas fa-exclamation"/>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning mr-2"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setEditTask(todo.id);
                                            handleShow();
                                        }}
                                    >
                                        <i className="fas fa-pen"/>
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch({type: "DELETE_TODO", payload: todo.id});
                                        }}
                                    >
                                        <i className="fas fa-trash"/>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button type="button" className="btn btn-primary float-right mt-2"
                            onClick={() => dispatch({type: "CLEAR_TODO"})}>
                        Clear All
                    </button>
                </div>
            ) : (
                <p>No todo</p>
            )}
        </Fragment>
    );
};

export default TodoList;
