import axios from 'axios'
import qs from 'querystring'

const base_url = process.env.NODE_ENV === 'development' ?'http://localhost:9999/airui':'http://localhost:9999/airui'

const instance = axios.create({
  timeout: 5000,
  baseURL: base_url,
  headers: {
    'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
  }
})

 instance.interceptors.request.use(function (config) {
  //携带token
  config.headers['token'] = localStorage.getItem('token');
  return config;
  }, function (error) {
  return Promise.reject(error);
})
// //判断Error
instance.interceptors.response.use(function (response) {
  // 对response作处理
  return response;
   }, function (error) {
  if(error.response.status === 401){
    message.error('您未经授权,请重新登录');
    this.props.history.push({
     pathname: '/login'
    })
  }
})
/**
 * @description 用户登录
 * @param {Object} userinfo 用戶信息
 */
export const userLogin = function(userinfo) {
  return instance.request({
    method: 'POST',
    url: '/v1/account/login',
    data: qs.stringify(userinfo)
  })
}
