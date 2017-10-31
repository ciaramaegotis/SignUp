import React, { Component } from 'react';

class DateInput extends Component{
	constructor(props){
		super(props);

		this.state = {
			errorMessage: ""
		}
	}
	render(){
		return(
			<div className = "input-row">
			<input type="date" className = "input" value = {this.props.value} onChange = {this.props.changeHandler}/>
			<span className = "error-message" id = "errorMessage">{this.state.errorMessage}</span>
			</div>
		)
	}
}

export default DateInput;