export const ADD_TASK = 'ADD_TASK';
export const GET_TASKS_TODO = 'GET_TASKS_TODO';

export function createTask(title,hours){
	return {
		type: ADD_TASK,
		title,
		hours
	};
}

export function getTasks() {
	return {
		type: GET_TASKS_TODO
	};
}
