/**
 * @Name：admin axios请求模块
 * @Author：陈晨
 * @description：服务于api，统一设置axios参数
 */
import axios from "axios";
import Qs from 'qs';
import {getToken, underlineToHump} from "@/utils";
import {errorCallback} from "@/error";
import {ElMessage } from 'element-plus'
import {setter} from '@/config';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let param = {
  baseURL: setter.BASE_URL, // 请求域名
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  timeout: 60000
};
let {request: {format}} = setter;
if(format === 'form') {
  param.transformRequest = [function(data) {
    data = Qs.stringify(data);
    return data;
  }];
} else {
  delete param.transformRequest;
}
let request = axios.create(param);
// 添加一个请求拦截器
request.interceptors.request.use(
  /**
   * @description 从Session中获取token，并在接口访问时统一加入请求体
   */
  config => {
    let {request: {tokenName}} = setter;
    config.data = config.data || {};
    if(tokenName) {
      const token = getToken();
      if(token) {
        config.data[tokenName] = token;
        //config.headers['X-Token'] = token
      }
    }
    return config;
  },
  error => {
    // Do something with request error
    ElMessage .error({message: '请求超时!'});
    return Promise.resolve(error);
  }
);
// 添加一个响应拦截器
request.interceptors.response.use(
  /**
   * @description 对相应体数据进行处理，成功的请求返回data，失败的请求进入错误处理模块
   */
  response => {
    let responseData = response.data;
    let {response: {statusName, statusCode: {ok}, msgName, dataName}} = setter;
    let data = responseData[dataName];
    let state = responseData[statusName];
    let msg = responseData[msgName];
    if(state === ok) {
      return underlineToHump(data);
    } else {
      errorCallback(state, msg);
      return Promise.reject(new Error(msg || 'Error'))
    }
    // 错误处理模块
  },
  error => {
    console.log('err' + error) // for debug
    ElMessage ({
      message: error.message,
      type: 'error',
      duration: 5000
    })
    return Promise.reject(error);
  }
);
export default request;
