import uuid from 'uuid/v4';

const TodoReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":
            const newTodos = [...state.todos, {
                id: uuid(),
                task: action.payload,
                completed: false,
                priority: false
            }]
            return {
                ...state,
                todos: newTodos
            }
        case "DELETE_TODO":
            const deleteTodo = state.todos.filter(todo => todo.id !== action.payload)
            return {
                ...state,
                todos: deleteTodo,
            }
        case "EDIT_TODO":
            const editTodo = state.todos.map(todo => todo.id === action.payload.id ? {
                ...todo,
                task: action.payload.task
            } : todo)
            return {
                ...state,
                todos: editTodo
            }
        case "CLEAR_TODO":
            return {
                ...state,
                todos: []
            }
        case "COMPLETED_TODO":
            const completedTodo = state.todos.map(todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            );
            return {
                ...state,
                todos: completedTodo,
            }
        case "UNCOMPLETED_TODO":
            const unCompletedTodo = state.todos.map(todo =>
                todo.id === action.payload ? {...todo, completed: !todo.completed} : todo
            );
            return {
                ...state,
                todos: unCompletedTodo,
            }
        case "SHOW_ALERT":
            state.alert = true
            return {
                ...state,
            }
        case "HIDE_ALERT":
            state.alert = false
            return {
                ...state,
            }
        case "PRIORITY":
            const priority = state.todos.map(todo =>
                todo.id === action.payload ? {...todo, priority: !todo.priority} : todo
            );
            return {
                ...state,
                todos: priority,
            }

        default:
            return state;
    }
}

export default TodoReducer