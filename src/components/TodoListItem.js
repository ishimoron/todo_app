import React, {useContext} from 'react';
import {TodoContext} from "../context/TodoContext";

const TodoListItem = ({id, task}) => {

    const {dispatch} = useContext(TodoContext);

    return (
        <div className="col-6 d-flex align-items-center justify-content-between">
            <input
                type="checkbox"
                id="completed"
                onClick={() => {
                    var checkBox = document.getElementById("completed");
                    if (checkBox.checked) {
                        dispatch({
                            type: "COMPLETED_TODO",
                            payload: id,
                        });
                    } else {
                        dispatch({
                            type: "UNCOMPLETED_TODO",
                            payload: id,
                        });
                    }
                }}
                className="d-flex justify-content-start align-items-center"
            />
            {task}
        </div>
    );
};

export default TodoListItem;