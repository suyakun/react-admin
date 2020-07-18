import React, { Component } from 'react';
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js'
import './Index.scss'

class Index extends Component {

	// 声明属性
	constructor(props) {
		super(props);
		this.state = {
			formType: 'login'
		};
	}

	switchForm = (value) => {
		this.setState({
			formType: value
		})
	}

	render() {
		return ( 
			<div className = "Login-warp" >
				{
					this.state.formType === 'login' 
					? <LoginForm switchForm = {this.switchForm}></LoginForm> 
					: <RegisterForm switchForm = {this.switchForm}></RegisterForm>
				}
			</div>
		)
	}
}

export default Index
