import React, {Fragment} from 'react';
import {Input} from "../components/Input";
import TodoList from "../components/TodoList";


const Home = () => {


    return (
        <Fragment>
            <Input/>
            <TodoList/>
        </Fragment>
    );
};

export default Home;