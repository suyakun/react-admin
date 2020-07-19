import service from '../utils/request.js'

// 获取验证码
export function getCode(data) {
    return service.request({
        url: '/getSms/',
        method: 'post',
        data
    })
}

// 登录
export function login(data) {
    return service.request({
        url: '/login/',
        method: 'post',
        data
    })
}