import React, { Component } from 'react';

class StringInput extends Component{
	render(){
		return(
			<div>
			<input type="string" value = {this.props.value} onChange = {this.props.changeHandler}/> {this.props.label}
			</div>
		)
	}
}

export default StringInput;