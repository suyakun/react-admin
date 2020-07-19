import React, { Component } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { getCode, login } from '../../api/user';

class LoginForm extends Component {

	// 属性
	constructor(props) {
		super(props);
		this.state = {
			code_btn_desabled: false,
			code_btn_text: '发送验证码',
			username: ''
		};
	}

	// 获取验证码
	getCode = () => {
		if (!this.state.username) {
			message.warning('邮箱不能为空');
			return false
		}
		this.setState({
			code_btn_desabled: true,
			code_btn_text: '获取中...'
		})

		const data = {
			username: this.state.username
		}

		getCode(data).then((response) => {
			let codeTime = 10
			let code = setInterval(() => {
				codeTime--;
				this.setState({
					code_btn_text: `${codeTime}秒后获取`,
					code_btn_desabled: true
				})
				if (codeTime <= 0) {
					clearInterval(code)
					this.setState({
						code_btn_text: '重新获取',
						code_btn_desabled: false
					})
				}
			}, 1000)
			message.success(response.data.message,10);
		}).catch((error) => {
			this.setState({
				code_btn_text: '重新获取'
			})
		})
		this.setState({
			code_btn_desabled: false
		})
	}

	// 用户框内容
	inputChange = (e) => {
		this.setState({
			username: e.target.value
		})
	}

	// 登录
	onFinish = values => {
		login().then((response) => {

		}).catch((error) => {

		})

	};

	// 切换登录/注册
	chooseForm = () => {
		this.props.switchForm('register')
	}

	// 页面模板
	render() {
		const { code_btn_desabled, code_btn_text } = this.state
		return (
			<div className="Login-warp" >
				<div>
					<div className="title" >
						<h4> 登录 </h4>
						<span onClick={this.chooseForm}> 注册账号 </span>
					</div>
					{/* 表单 */}
					<div className="Login-form" >
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{ remember: true }}
							onFinish={this.onFinish}
						>
							<Form.Item
								name="email"
								rules={
									[
										{ required: true, message: '邮箱不能为空' },
										{ type: 'email', message: '邮箱格式错误' }
									]
								}
							>
								<Input onChange={this.inputChange} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="邮箱" />
							</Form.Item>
							<Form.Item
								name="password"
								rules={
									[
										{ required: true, message: '密码不能为空' },
										{ min: 6, message: '密码不能小于6位' }
									]
								}
							>
								<Input
									prefix={<LockOutlined className="site-form-item-icon" />}
									type="password"
									placeholder="密码"
								/>
							</Form.Item>
							<Row gutter={6}>
								<Col span={16}>
									<Form.Item
										name="code"
										rules={[{ required: true, message: '验证码不能为空' }]}
									>
										<Input
											prefix={<LockOutlined className="site-form-item-icon" />}
											placeholder="验证码"
										/>
									</Form.Item>
								</Col>
								<Col span={8}>
									<Button onClick={this.getCode} block type="primary" danger disabled={code_btn_desabled} className="login-form-button">
										{code_btn_text}
									</Button>
								</Col>
							</Row>
							<Form.Item>
								<Button block type="primary" htmlType="submit" className="login-form-button">登录</Button>
							</Form.Item>
						</Form>

					</div>
				</div>
			</div>
		)
	}
}

export default LoginForm
