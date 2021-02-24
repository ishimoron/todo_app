import React, {useState, useContext, Fragment} from 'react'
import {TodoContext} from "../context/TodoContext";


export const Input = () => {

    const [value, setValue] = useState('')

    const {state, dispatch} = useContext(TodoContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (value.trim()) {
            dispatch({type: 'ADD_TODO', payload: value});
            setValue('')
        } else {
            dispatch({
                type: 'SHOW_ALERT'
            })
        }
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                {state.alert ? (
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        Input can't be blank
                        <button
                            type="button"
                            className="close close-btn"
                            data-dismiss="alert"
                            aria-label="Close"
                            onClick={() => dispatch({type: 'HIDE_ALERT'})}
                        >
                            <span className="" aria-hidden="true">
                                &times;
                            </span>
                        </button>
                    </div>
                ) : ''}
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onChange={e => setValue(e.target.value)} value={value}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">Add Todo</button>
                    </div>
                </div>
            </form>
        </Fragment>

    )
}