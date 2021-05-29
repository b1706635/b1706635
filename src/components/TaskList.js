import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
 class TaskList extends Component {
  constructor(props){
    super(props);
    this.state={
      fillterName:'',
      fillterStatus:-1
    };
  }
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    if(name==='fillterStatus'){
      value=parseInt(value,10);
    }
    if(name==='fillterName'){
      value=value.toLowerCase();
    }
    this.props.onFillter(name==='fillterName'?value:this.state.fillterName,name==='fillterStatus'?value:this.state.fillterStatus);
     //console.log(name==='fillterName'?value:this.state.fillterName,"--",name==='fillterStatus'?value:this.state.fillterStatus);
    this.setState({
      [name]:value
    });
    
    
  }

	render() {
   //console.log(this.props.tasks);

    var { tasks } = this.props;
    //console.log(tasks);
    var elmTask = tasks.map((task,index)=>{
      return <TaskItem key={ index } name={task.name} stt={ index } status={task.status} id={ task.id }task={task}/>
    })
       
		return (
			 <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td />
                  <td><input type="text"  name="fillterName"className="form-control" value={this.state.fillterName} onChange={ this.onChange } /></td>
                  <td><select className="form-control"name="fillterStatus"value={ this.state.fillterStatus }onChange={ this.onChange }>
                      <option value={-1}>Tất cả</option>
                      <option value={0}>Ẩn</option>
                      <option value={1}>Kích hoạt</option>
                    </select></td>
                  <td />
                </tr>
              	{ elmTask }
              </tbody>
            </table>
		);
	}
}

const mapStoreToProps=(state)=>{
  return {
    tasks:state.tasks
  }
};
export default  connect(mapStoreToProps,null)(TaskList);