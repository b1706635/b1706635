import * as types from './../constants/ActionTypes';
var initialState={};
var myReducer=(state=initialState,action)=>{
	switch(action.type){
		case types.EDIT_TASK:
			state=action.task;
			//console.log(action);
			return state;
		default:
			return state;
	}
}
export default myReducer