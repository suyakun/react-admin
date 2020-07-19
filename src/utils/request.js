import axios from 'axios'

// 请求基本参数
const service = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 5000,
    headers: {'token': ''}
  });

// 请求拦截器
service.interceptors.request.use(function (config) {
    return config;
}, function(error) {
    return Promise.reject(error)
});

// 响应拦截器
service.interceptors.response.use(function (response) {
  return response;
}, function(error) {
  return Promise.reject(error)
});

export default service;