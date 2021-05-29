import React, { Component } from 'react';

export default class Sort extends Component {
  constructor(props){
    super(props);
    this.state={
      sort:{
        by:'name',
        value:1
      }
    }
  }
  onClick =async(by,value)=>{
    await this.setState({
      sort:{
        by:by,
        value:value
      }
    });
    this.props.onSort(this.state.sort);
  }
	render() {
		return (
			      <div className="dropdown">
              <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Sắp xếp
                &nbsp;<span className="fa fa-caret-square-o-down" /></button>
              <ul className="dropdown-menu">
                <li onClick={ ()=>this.onClick('name',1)}><a role="button" ><i className="fa fa-sort-alpha-asc"  />&nbsp;Tên A-Z <i className={ (this.state.sort.by==='name' && this.state.sort.value===1)?"fa fa-check":"" }></i></a></li>
                <li onClick={ ()=>this.onClick('name',-1)}><a role="button"><i className="fa fa-sort-alpha-desc"  />&nbsp;Tên Z-A <i className={ (this.state.sort.by==='name' && this.state.sort.value===-1)?"fa fa-check":"" }></i></a></li>
                <li className="divider" />
                <li onClick={ ()=>this.onClick('status',1)}><a role="button">Trạng thái kích hoạt <i className={ (this.state.sort.by==='status' && this.state.sort.value===1)?"fa fa-check":"" }></i></a> </li>
                <li onClick={ ()=>this.onClick('status',-1)}><a role="button">Trạng thái ẩn <i className={ (this.state.sort.by==='status' && this.state.sort.value===-1)?"fa fa-check":"" }></i></a></li>
              </ul>
            </div>
		);
	}
}
