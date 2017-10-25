import React, { Component } from 'react';

class DropdownInput extends Component{
	render(){
		return(
			<div>
				<select name="Province" className = "input input-row">
				    <option value="volvo">Volvo</option>
				    <option value="saab">Saab</option>
				    <option value="fiat">Fiat</option>
				    <option value="audi">Audi</option>
			 	</select>
			</div>
		)
	}
}

export default DropdownInput;