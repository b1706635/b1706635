import { createStore} from 'redux';
var initialState={
	status:false,
	sort:{
		name:'sang',
		age:3
	}
}
var myReducer=(state=initialState,action)=>{
	if(action.type=="TOGGLE_STATUS"){
		state.status=!state.status;
	}
	if(action.type=="CHANGE_SORT"){
		return {
			status:state.status,
			sort:{
				name:action.sort.name,
				age:action.sort.age
			}
		}

	}
	return state;
}
var store=createStore(myReducer);
console.log("DEFAULT: ",store.getState());

//cap nhat status
var actionStatus={
	type:"TOGGLE_STATUS"
}
store.dispatch(actionStatus);
console.log("TOGGLE_STATUS: ",store.getState());
//
//cap nhat sort
var actionSort={
	type:"CHANGE_SORT",
	sort:{
		name:'thanh',
		age:15
	}
	
}
store.dispatch(actionSort);

console.log("CHANGE_SORT: ",store.getState());
//console.log(initialState);