import * as types from './../constants/ActionTypes';
export const listAll=()=>{
	return {
		type:types.LIST_ALL
	}
}
export const onAddTask=(task)=>{
	return {
		type:types.ADD_TASK,
		task
	}
}
export const toggleForm=()=>{
	return {
		type:types.TOGGLE_FORM
	}
}
export const openForm=()=>{
	return {
		type:types.OPEN_FORM
	}
}
export const closeForm=()=>{
	return {
		type:types.CLOSE_FORM
	}
}
export const updateStatus=(id)=>{
	return {
		type:types.UPDATE_STATUS,
		id
	}
}

export const keywork=(key)=>{
	return {
		type:types.KEYWORK,
		key
	}
}
export const onDelete=(id)=>{
	return {
		type:types.DELETE_TASK,
		id
	}
}

export const editTask=(task)=>{
	return {
		type:types.EDIT_TASK,
		task
	}
}




