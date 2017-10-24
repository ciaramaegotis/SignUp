import React, { Component } from 'react';

class PasswordInput extends Component{
	render(){
		return(
			<div>
			<input type="password" className = "input input-row" value = {this.props.value} placeholder = {this.props.placeholder} onChange = {this.props.changeHandler}/>
			</div>
		)
	}
}

export default PasswordInput;