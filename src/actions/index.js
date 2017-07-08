export const ADD_TASK = 'ADD_TASK';
export const GET_TASKS_TODO = 'GET_TASKS_TODO';
export const MOVE_PROGRESS = 'MOVE_PROGRESS';
export const MOVE_DONE = 'MOVE_DONE';
export const DELETE_TASK = 'DELETE_TASK';
export const MOVE_TODO = 'MOVE_TODO';
export const MESSAGE = 'MESSAGE';
export const EDIT_SAVE_TASK = 'EDIT_SAVE_TASK';
export const EDIT_TASK = 'EDIT_TASK';

export function createTask(props){
	return {
		type: ADD_TASK,
		props
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

export function deleteTask(task){
	return {
		type: DELETE_TASK,
		task
	}
}

export function moveToDo(task){
	return {
		type: MOVE_TODO,
		task
	}
}

export function editSaveTask(props){
	return {
		type: EDIT_SAVE_TASK,
		props
	}
}

export function editTask(edit){
	return {
		type: EDIT_TASK,
		edit
	}
}

export function generateMessage(message){
	return {
		type: MESSAGE,
		message
	}
}