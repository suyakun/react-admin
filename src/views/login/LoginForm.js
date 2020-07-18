import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	onFinish = values => {
		console.log('Received values of form: ', values);
	};

	chooseForm = () => {
		this.props.switchForm('register')
	}

	render() {
		return (
			<div className="Login-warp" >
				<div>
					<div className="title" >
						<h4> 登录 </h4>
						<span onClick={this.chooseForm}> 注册账号 </span>
					</div>

					<div className="Login-form" >
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{ remember: true }}
							onFinish={this.onFinish}
						>
							<Form.Item
								name="username"
								rules={[{ required: true, message: 'Please input your Username!' }]}
							>
								<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
							</Form.Item>
							<Form.Item
								name="password"
								rules={[{ required: true, message: 'Please input your Password!' }]}
							>
								<Input
									prefix={<LockOutlined className="site-form-item-icon" />}
									type="password"
									placeholder="Password"
								/>
							</Form.Item>

							<Row gutter={6}>
								<Col span={16}>
									<Form.Item
										name="code"
										rules={[{ required: true, message: 'Please input your Password!' }]}
									>
										<Input
											prefix={<LockOutlined className="site-form-item-icon" />}
											placeholder="验证码"
										/>
									</Form.Item>
								</Col>
								<Col span={8}>
									<Button block type="primary" htmlType="submit" className="login-form-button">
										获取验证码
									</Button>
								</Col>
							</Row>



							<Form.Item>
								<Button block type="primary" htmlType="submit" className="login-form-button">
									登录
							</Button>
							</Form.Item>
						</Form>

					</div>
				</div>
			</div>
		)
	}
}

export default LoginForm
