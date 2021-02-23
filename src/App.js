import React from 'react'
import {Navbar} from "./components/Navbar";
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import {TodoContext} from "./context/TodoContext";
import TodoReducer from "./context/TodoReducer";
import TodoState from "./context/TodoState";
import useLocalStorageReducer from "./hooks/useLocalStorage";

function App() {

    // const [state, dispatch] = useReducer(TodoReducer, TodoState)

    const [state, dispatch] = useLocalStorageReducer(
        'state',
        TodoReducer,
        TodoState
    );

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <Navbar/>
            <div className="container pt-4">
                <Switch>
                    <Route component={Home} path="/" exact/>
                    <Route component={About} path="/about" exact/>
                </Switch>
            </div>
        </TodoContext.Provider>


    );
}

export default App;
