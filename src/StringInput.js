import React, { Component } from 'react';

class StringInput extends Component{
	constructor(props){
		super(props);

		this.state = {
			errorMessage: ""
		}
	}
	render(){
		return(
			<div className = "input-row">
			<input type="string" className = "input" value = {this.props.value} placeholder = {this.props.placeholder} onChange = {this.props.changeHandler}/>
			<span className = "error-message" id = "errorMessage">{this.state.errorMessage}</span>
			</div>
		)
	}
}

export default StringInput;