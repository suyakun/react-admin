import React, { Component } from 'react';
import { Button, message } from 'antd';
import { getCode } from '../../api/user';

let timer = null;

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            button_text: '获取验证码',
            button__desabled: false,
            username: this.props.username
        }
    }

    // 监听父组件传值
    componentWillReceiveProps({ username }) {
        this.setState({
            username
        })
    }

    // 组件销毁
    componentWillUnmount() {
        clearInterval(timer)
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
            this.setTimer()
            message.success(response.data.message, 5);
        }).catch((error) => {
            this.setState({
                code_btn_text: '重新获取'
            })
        })
        this.setState({
            code_btn_desabled: false
        })
    }

    // 倒计时
    setTimer = () => {
        let codeTime = 10
        timer = setInterval(() => {
            codeTime--;
            this.setState({
                button_text: `${codeTime}秒后获取`,
                button__desabled: true
            })
            if (codeTime <= 0) {
                clearInterval(timer)
                this.setState({
                    button_text: '重新获取',
                    button__desabled: false
                })
            }
        }, 1000)
    }

    render() {
        const { button_text, button__desabled } = this.state;
        return <Button onClick={this.getCode} block type="primary" danger disabled={button__desabled} className="login-form-button">
            {button_text}
        </Button>
    }
}

export default Code;