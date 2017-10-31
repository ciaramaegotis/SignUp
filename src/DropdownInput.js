import React, { Component } from 'react';
import Provinces from './provinces';

class DropdownInput extends Component{
	constructor(props){
		super(props);
		this.state = {
			options: Provinces.provinces
		}
				
	}
	render(){
		return(
			<div>
				<select className = "input input-row" name = {this.props.name} onChange = {this.props.changeHandler}>
				    {this.state.options.map(province => <option> {province.name} </option>)}
				</select>

			</div>
		)
	}
}

export default DropdownInput;