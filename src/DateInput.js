import React, { Component } from 'react';

class DateInput extends Component{
	render(){
		return(
			<div>
			<input type="date" className = "input input-row" value = {this.props.value} placeholder = {this.props.placeholder} onChange = {this.props.changeHandler}/>
			</div>
		)
	}
}

export default DateInput;