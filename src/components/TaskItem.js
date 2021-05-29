import React, { Component } from 'react';
import * as actions from './../actions/index';
import { connect } from 'react-redux';
class TaskItem extends Component {
  onChangeStatus(id){
    this.props.updateStatus(id);
  }
  onDelete=(id)=>{
    this.props.onDelete(id);
    this.props.closeForm();
  }
  onUpdate=(task)=>{
    this.props.openForm();
    this.props.editTask(task);
    //this.props.onUpdate(this.props.id);
    //console.log(task);
  }
	render() {
		return (
			  <tr>
                  <td>{ this.props.stt+1}</td>
                  <td>{this.props.name}</td>
                  <td className="text-center"><span className={this.props.status===true ? 'label label-danger': 'label label-success'}onClick={ ()=>this.onChangeStatus(this.props.id) }>{ this.props.status===true ? 'Kích hoạt':'Ẩn' }</span></td>
                  <td className="text-center">
                    <button type="button" className="btn btn-warning"onClick={()=>this.onUpdate(this.props.task)}><i className="fa fa-pencil" />&nbsp;Sửa</button>&nbsp;
                    <button type="button" className="btn btn-danger"onClick={ ()=>this.onDelete(this.props.id) }><i className="fa fa-trash-o"  />&nbsp;Xóa</button>
                  </td>
                </tr>
		);
	}
}
const mapStateToProps=(state)=>{
  return {
    
  }

}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    updateStatus:(id)=>{
      dispatch(actions.updateStatus(id));
    },
    onDelete:(id)=>{
      dispatch(actions.onDelete(id));
    },
    closeForm:()=>{
      dispatch(actions.closeForm());
    },
    openForm:()=>{
      dispatch(actions.openForm());
    },
    editTask:(task)=>{
      dispatch(actions.editTask(task));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);