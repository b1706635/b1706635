
import './App.css';
import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { filter } from 'lodash';
//import demo from './constants/demo';
import { connect } from 'react-redux';
import * as actions from './actions/index';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      taskEditing:null,
      keywork:'',
      fillter:{
        name:'',
        status:-1
      },
      sort:{
        by:'name',
        value:1
      }
    };
    
  }


  onToggleForm=()=>{
    // this.setState({
    //   displayForm:!this.state.displayForm
    // });
    this.props.toggleForm();
  }
  onCloseForm=()=>{
    // this.setState({
    //   displayForm:false
    // })
  }
  onShowForm=()=>{
    // this.setState({
    //   displayForm:true
    // })
  }
  onSubmit=(data)=>{
    var tasks =this.state.tasks;
    if(data.id==''){
      data.id=require("randomstring").generate(4);
     tasks.push(data);
    }else{
       tasks.forEach((value,index)=>{
      if(value.id===data.id){
        
          tasks[index]=data;
        this.setState({
          tasks:tasks,

        })
        //console.log(tasks[index].status);
      }
      
    });
    }
    this.setState({
          tasks : tasks,
          taskEditing:null
        });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  
    //console.log(data);
  }

  onFillter=(fillterName,fillterStatus)=>{
  this.setState({
    fillter:{
      name:fillterName,
      status:fillterStatus
    }
  });
  
 //console.log(fillterName,"-",fillterStatus);
  }
  onSort=(data)=>{

    this.setState({
      sort:data
    })
    //console.log(this.state.sort);
  }
  render() {
    
   // console.log(this.state.fillter);
    //console.log(this.props.displayForm);
   // console.log(this.state.displayForm);
    var { tasks, taskEditing, fillter
      //, keywork

      ,sort} = this.state;
    // if(fillter){
    //   if(fillter.name){
    //     tasks=tasks.filter((task)=>{
    //       return task.name.toLowerCase().indexOf(fillter.name)!==-1;
    //     });
    //   }
    //   if(fillter.status===-1){
    //     tasks=tasks.filter((task)=>{
    //       return task;
    //     });
    //   }
    //   else{
    //     tasks=tasks.filter((task)=>{
    //       return task.status===(fillter.status===0)?false:true;
    //     });
    //   }
    // }
    // if(keywork){
    //   tasks=filter(tasks,(task)=>{
    //     return task.name.toLowerCase().indexOf(keywork)!==-1;
    //   });
    // }
    // if(sort.by==='name'){
    //   tasks.sort((a,b)=>{
    //     if(a.name>b.name)return sort.value;
    //     else if(a.name<b.name)return -sort.value;
    //     else return 0;
    //   })
    // }
    // else {
    //     tasks.sort((a,b)=>{
    //     if(a.status>b.status)return -sort.value;
    //     else if(a.status<b.status)return sort.value;
    //     else return 0;
    //   })
    // }
    return (
      <div className="container">
         <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={this.props.displayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}>
            {this.props.displayForm===true ? <TaskForm tasks={taskEditing} onCloseForm={this.onCloseForm}onSubmit={this.onSubmit}/>: ''}
          </div>
          <div className={ this.props.displayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "" }>
        
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <button type="button" className="btn btn-primary"onClick={ this.onToggleForm }><i className="fa fa-plus"  />&nbsp;Thêm công việc</button>
           
          </div>
        </div>
          <Control  onSort={ this.onSort }/>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <TaskList onFillter={ this.onFillter }/>
          </div>
        </div>
          </div>
        </div>
      </div>

      
     
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    displayForm:state.displayForm
  }
}
const mapDispatchToProps=(dispatch,props)=>{
  return {
    toggleForm:()=>{
      dispatch(actions.toggleForm());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);