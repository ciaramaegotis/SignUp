import React, { Component } from 'react';
import './SignUpForm.css';


class SignUp extends Component{
	constructor(props){
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			password: '',
			repeatPassword: '',
			birthday: '',
			province: '',
			municipality: '',
			isFirstName: false,
			isLastName: false,
			isPassword: false,
			isSamePassword: false,
			isLegalAge: false
		}

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
		this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
		this.handleProvinceChange = this.handleProvinceChange.bind(this);
		this.handleMunicipalityChange = this.handleMunicipalityChange.bind(this);
				
	}

	handleFirstNameChange(e){
		this.setState({firstName: e.target.value});
	}

	handleLastNameChange(e){
		this.setState({lastName: e.target.value});
	}

	handlePasswordChange(e){
		this.setState({password: e.target.value});
	}

	handleRepeatPasswordChange(e){
		this.setState({repeatPassword: e.target.value});
	}

	handleBirthdayChange(e){
		this.setState({birthday: e.target.value});
	}

	handleProvinceChange(e){
		this.setState({province: e.target.value});
	}

	handleMunicipalityChange(e){
		this.setState({municipality: e.target.value});
	}

	render(){
		return (
			<div>
				<p><b> Sign Up </b></p>
				<input type = "string" className = "input" label = "First Name" placeholder = "First Name"/>
				<input type = "string" className = "input" label = "Last Name" placeholder = "First Name"/>
				<input type = "password" className = "input" label = "Password" placeholder = "Password"/>
				<input type = "string" className = "input" label = "Retype Password" placeholder = "Retype Password"/>
				<p><b>Birthday</b></p>
				<input type = "date" className = "input" label = "Birthday"/>
				<select name="Province" className = "input">
				    <option value="volvo">Volvo</option>
				    <option value="saab">Saab</option>
				    <option value="fiat">Fiat</option>
				    <option value="audi">Audi</option>
			 	</select>
			 	<select name="Municipality" className = "input">
				    <option value="volvo">Volvo</option>
				    <option value="saab">Saab</option>
				    <option value="fiat">Fiat</option>
				    <option value="audi">Audi</option>
			 	</select>

				<button id = "signup-button">
				Create Account
				</button>
				
			</div>
		)
	}
}

export default SignUp;