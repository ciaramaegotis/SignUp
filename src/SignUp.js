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
			firstName: "",
			lastName: "",
			password: "",
			repeatPassword: "",
			birthday: "",
			province: "",
			municipality: "",
			isFirstName: false,
			isLastName: false,
			isPassword: false,
			isSamePassword: false,
			isLegalAge: false,
		}

		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);
		this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
		this.handleProvinceChange = this.handleProvinceChange.bind(this);
		this.handleMunicipalityChange = this.handleMunicipalityChange.bind(this);
		this.getInformation = this.getInformation.bind(this);
				
	}

	getInformation(e){
		if (this.state.firstName == ""){
			this.firstNameInput.setState({errorMessage: "First name is required"});
		}else{
			this.firstNameInput.state.errorMessage = "";
		}

		if (this.state.lastName == ""){
			this.lastNameInput.setState({errorMessage: "Last name is reuiqred"});
		}else{
			this.lastNameInput.state.errorMessage = "";
		}

		if (this.state.password == ""){
			this.passwordInput.setState({errorMessage: "Password is required"});
		}else{
			this.passwordInput.state.errorMessage = "";
		}
		if (this.state.repeatPassword == ""){
			this.repeatPasswordInput.setState({errorMessage: "Repeat password is required"});
		}else{
			if (this.state.repeatPassword != this.state.password){
				this.repeatPasswordInput.setState({errorMessage: "Passwords dont't match"});
			}else{
				this.repeatPasswordInput.state.errorMessage = "";
			}
		}

		if (this.state.birthday == ""){
			this.birthdayInput.setState({errorMessage: "birthday is required"});
		}else{
			var date = new Date();
			var newCurDate = date.getFullYear()  + '-' + ((date.getMonth() + 1) + '-' + date.getDate());
			var date1 = (Number((newCurDate).substring(0,4))*365)+(Number((newCurDate).substring(5,7))*30)+(Number((newCurDate).substring(8,)));
			var date2 = (Number((this.state.birthday).substring(0,4))*365)+(Number((this.state.birthday).substring(5,7))*30)+(Number((this.state.birthday).substring(8,)));
			var age =  (date1-date2)/365;

			if (age < 18){
				this.birthdayInput.setState({errorMessage: "Age should be greater than 18"});
			}else{
				this.birthdayInput.setState({errorMessage: ""});
			}
		}
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
		var i = 0;
		var newOptions = [];
		console.log(Provinces.provinces.length);
		for (var i = 0; i < Provinces.provinces.length; ++i){
			if (Provinces.provinces[i].name == this.state.province){
				console.log("this are " + Provinces.provinces[i].name + "and " + this.state.province);
				for (var j = 0; j < Provinces.provinces[i].municipalities.length; ++j){
					newOptions.push({name: Provinces.provinces[i].municipalities[j]});
				}
			}
		}
		this.municipalityInput.setState({options: newOptions});
	}

	handleMunicipalityChange(options){
		this.setState({municipality: options});
	}

	render(){
		return (
			<div>
				<p><b> Sign Up </b></p>
				<StringInput label = "First Name" placeholder = "First Name" changeHandler = {this.handleFirstNameChange} value = {this.state.firstName} ref = {(input) => {this.firstNameInput = input}}/>
				<StringInput label = "Last Name" placeholder = "Last Name" changeHandler = {this.handleLastNameChange} value = {this.state.lastName} ref = {(input) => {this.lastNameInput = input}}/>
				<PasswordInput label = "Password" placeholder = "Password" changeHandler = {this.handlePasswordChange} value = {this.state.password} ref = {(input) => {this.passwordInput = input}}/>
				<PasswordInput label = "Retype Password" placeholder = "Retype Password" changeHandler = {this.handleRepeatPasswordChange} value = {this.state.repeatPassword} ref = {(input) => {this.repeatPasswordInput = input}}/>
				<p><b>Birthday</b></p>
				<DateInput label = "Birthday" changeHandler = {this.handleBirthdayChange} value = {this.state.birthday} ref = {(input) => {this.birthdayInput = input}}/>
				<DropdownInput label = "Province" changeHandler = {this.handleProvinceChange} value = {this.state.province} ref = {(input) => {this.provinceInput = input}}/>
			 	<DropdownInput label = "Municipality" changeHandler = {this.handleMunicipalityChange} value = {this.state.municipality} ref = {(input) => {this.municipalityInput = input}}/>

				<button id = "signup-button" className = "input-row" onClick = {this.getInformation}>
				Create Account
				</button>
			</div>
		)
	}
}

export default SignUp;