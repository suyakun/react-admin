import React, { Component } from 'react';
import LoginForm from './LoginForm.js'
import RegisterForm from './RegisterForm.js'
import './Index.scss'

class Index extends Component {

	// 属性
	constructor(props) {
		super(props);
		this.state = {
			formType: 'login'
		};
	}

	// 方法
	switchForm = (value) => {
		this.setState({
			formType: value
		})
	}

	// 模板
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
