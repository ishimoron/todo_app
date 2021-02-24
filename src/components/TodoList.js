import React, {Fragment, useContext, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import TodoListItem from "./TodoListItem";
import ModalBox from "./ModalBox";

const TodoList = () => {
    const [show, setShow] = useState(false);
    const [editTask, setEditTask] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {state, dispatch} = useContext(TodoContext);

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
                                <TodoListItem id={todo.id} task={todo.task}/>
                                <ModalBox id={editTask} show={show} hide={handleClose}/>
                                <div>
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
                <h1 className="font-monospace lead">No todo</h1>
            )}
        </Fragment>
    );
};

export default TodoList;
