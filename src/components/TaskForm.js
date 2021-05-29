import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index'; 
class TaskForm extends Component {
  constructor(props){
    super(props);
    this.state={
      id:'',
      name:'',
      status:false
    };
  }
  onCloseForm=()=>{
    this.props.closeForm();
  }
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value; 
    if(name==='status')
      value=target.value==='true'? true : false;
    this.setState({
      [name]:value
    });
  }
  onSubmit=(event)=>{
    event.preventDefault();
    //console.log(this.state);
   // this.props.onSubmit(this.state)
   //console.log(this.state);
   this.props.onAddTask(this.state);
    this.onClear();
    this.onCloseForm();
  }
  onClear=()=>{
    this.setState({
      id:'',
      name:'',
      status:false
    })
  }

  // componentWillMount() {
  //   if(this.props.taskItem && this.props.taskItem!==null){
  //     this.setState({
  //       id:this.props.taskItem.id,
  //       name:this.props.taskItem.name,
  //       status:this.props.taskItem.status
  //     })
  //   }
  //   else this.onClear();
  // }
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.taskItem && nextProps.taskItem){
  //     this.setState({
  //       id:nextProps.taskItem.id,
  //       name:nextProps.taskItem.name,
  //       status:nextProps.taskItem.status
  //     })
  //   }
  //   else this.onClear();
  // }
  render() {
    //console.log(this.props.taskItem);
    console.log(this.props.taskItem);
    return (
      
       <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">{ this.state.id!=''?"Cập Nhật Công Việc":"Thêm Công Việc" }<i className="fa fa-times-circle text-right"onClick={this.onCloseForm}></i></h3>
              </div>
              <div className="panel-body">
                <form  onSubmit={this.onSubmit}>
                  
                  <div className="form-group">
                    <label >Tên</label>
                    <input type="text" name="name"value={this.state.name}onChange={this.onChange}className="form-control"/>
                  </div>
                  <div className="form-group">
                    <label >Trạng thái</label>
                    <select name="status" value={this.state.status}onChange={this.onChange}className="form-control">
                      <option value={true}>Kích hoạt</option>
                       <option value={false}>Ẩn</option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning"><i className="fa fa-plus" />&nbsp;Lưu Lại</button>&nbsp;
                    <button type="button" className="btn btn-danger"onClick={ this.onClear }><i className="fa fa-times" ></i>&nbsp;Hủy Bỏ</button>
                  </div>
                </form>
              </div>
            </div>
        

    );
  }
}
const mapStateToProps=(state)=>{
  return {
    displayForm:state.displayForm,
    taskItem:state.taskItem
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    onAddTask:(task)=>{
      dispatch(action.onAddTask(task));
    },
    closeForm:()=>{
      dispatch(action.closeForm());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);