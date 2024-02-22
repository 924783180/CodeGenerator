/**
 * @Name：admin api模块
 * @Author：陈晨
 * @description：本文件中编写通用接口，各页面具体接口请在 src/api 中建立文件夹，如：src/api/User/index.js 是用户模块使用的api
 */
import request from "@/request";

/* 登录 */
export function loginByUsername(data = {}) {
  return request({
    url: '/admin/login',
    method: "post",
    data
  });
}
/* 注册 */
export function register(data = {}) {
  return request({
    url: '/admin/register',
    method: "post",
    data
  });
}

/* 获取用户信息 */
export function getUserInfo() {
  return request({
    url: '/admin/sysUser/getUserInfo',
    method: "post"
  });
}

/* 登出 */
export function logout() {
  return request({
    url: '/admin/logout',
    method: "post"
  });
}

export function getTemplateList(data) {
  return request({
    url: '/user/getTemplateList',
    method: "post",
    data
  });
}
export function deleteTemplate(data) {
  return request({
    url: '/user/deleteTemplate',
    method: "post",
    data
  });
}

/* 修改密码 */
export function updatePassWord(data) {
  return request({
    url: '/admin/updatePassWord',
    method: "post",
    data
  });
}























