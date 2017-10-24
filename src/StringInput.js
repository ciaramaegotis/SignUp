import React, { Component } from 'react';

class StringInput extends Component{
	render(){
		return(
			<div>
			<input type="string" className = "input" value = {this.props.value} placeholder = {this.props.placeholder} onChange = {this.props.changeHandler}/>
			</div>
		)
	}
}

export default StringInput;