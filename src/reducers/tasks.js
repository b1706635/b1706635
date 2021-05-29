import * as types from './../constants/ActionTypes';
var data=JSON.parse(localStorage.getItem('tasks'));
var initialState=data?data:[];
var findIndex=(tasks,id)=>{
	var result=-1;
	tasks.forEach((task,index)=>{
		if(task.id===id)
			result=index;
	});
	return result;

}
var myReducer=(state=initialState,action)=>{
	switch(action.type){

		case types.LIST_ALL:
			return state;
		case types.ADD_TASK:
			//console.log(action.task);
			console.log(action.task);
			if(action.task.id!==''){
			var index=findIndex(state,action.task.id);
			//state[index]=action.state;
			console.log(state[index]);
			console.log(action.state);
		}
		else{
			var newState={
				id:require("randomstring").generate(4),
				name:action.task.name,
				status:action.task.status
			}

			state.push(newState);
		}
			
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];
		case types.UPDATE_STATUS:
			var index=findIndex(state,action.id);
			state[index].status=!state[index].status;
			//console.log(state[index]);
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];
		case types.DELETE_TASK:
			var index=findIndex(state,action.id)
			state.splice(index,1);
			//console.log(index);
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];
		default:
			return state;
	}
}
export default myReducer