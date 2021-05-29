import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state={
			keywork:''
		}
	}
	onChange=(event)=>{
		var target=event.target;
		var name=target.name;
		var value=target.value;
		this.setState({
			[name]:value
		});
	}
	onSearch=()=>{
		this.props.onSearch(this.state.keywork);
		//console.log(this.state.keywork);
	}
	render() {
		return (
			<div className="input-group">
              <input type="text"  className="form-control" name="keywork"value={this.state.keywork}onChange={ this.onChange }placeholder="Nhập từ khóa..." />
              <span className="input-group-btn">
                <button type="button" className="btn btn-primary"onClick={ this.onSearch }><i className="fa fa-search" />&nbsp;Tìm</button>
              </span>
            </div>
		);
	}
}
