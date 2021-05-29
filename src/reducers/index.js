import { combineReducers } from 'redux';
import tasks from './tasks';
import displayForm from './isDisplayForm';
import taskItem from './taskItem';
var myReducer=combineReducers({
	tasks,
	displayForm,
	taskItem
})
export default myReducer;