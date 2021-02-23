import uuid from 'uuid/v4';

const TodoState = {
	todos: [
		{id: uuid(), task: 'Read book', completed: false, priority: false},
		{id: uuid(), task: 'Cook dinner', completed: false, priority: false},
	],
	alert: false,
	priority: false
};

export default TodoState;