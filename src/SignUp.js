import React, { Component } from 'react';
import './SignUpForm.css';
import StringInput from './StringInput';
import PasswordInput from './PasswordInput';
import DateInput from './DateInput';
import Provinces from './provinces';
import DropdownInput from './DropdownInput';

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

	getInformation(e){

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
				<StringInput label = "First Name" placeholder = "First Name" changeHandler = {this.handleFirstNameChange}/>
				<StringInput label = "Last Name" placeholder = "First Name" changeHandler = {this.handleLastNameChange}/>
				<PasswordInput label = "Password" placeholder = "Password" changeHandler = {this.handlePasswordChange}/>
				<PasswordInput label = "Retype Password" placeholder = "Retype Password" changeHandler = {this.handleRepeatPasswordChange}/>
				<p><b>Birthday</b></p>
				<DateInput label = "Birthday" changeHandler = {this.handleBirthdayChange}/>
				<DropdownInput label = "Province" changeHandler = {this.handleProvinceChange}/>
			 	<DropdownInput label = "Municipality" changeHandler = {this.handleMunicipalityChange}/>

				<button id = "signup-button" className = "input-row">
				Create Account
				</button>
				
			</div>
		)
	}
}

export default SignUp;