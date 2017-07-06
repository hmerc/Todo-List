export const ADD_TASK = 'ADD_TASK';
export const GET_TASKS_TODO = 'GET_TASKS_TODO';
export const MOVE_PROGRESS = 'MOVE_PROGRESS';
export const MOVE_DONE = 'MOVE_DONE';

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

export function moveDone(task) {
	return {
		type: MOVE_DONE,
		task
	};
}

export function moveProgress(task) {
	return {
		type: MOVE_PROGRESS,
		task
	};
}