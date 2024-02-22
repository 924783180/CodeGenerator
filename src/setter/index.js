/**
 * @Name：admin 系统配置模块
 * @Author：陈晨
 * @description：用于系统配置和声明常量
 */

export const setter = {
  version: 'V3.0.0-20220111', //版本号
  BASE_URL: '',
  DOWNLOAD_URL: '/resources/upload/',
  /* 自定义请求字段 */
  request: {
    tokenName: 'token', //自动携带 token 的字段名。可设置 false 不携带。
    format: 'json' //支持json和form
  },
  /* 自定义响应字段 */
  response: {
    statusName: 'code', //数据状态的字段名称
    statusCode: {
      ok: 0  //数据状态一切正常的状态码
    },
    msgName: 'msg', //状态信息的字段名称
    dataName: 'data' //数据详情的字段名称
  },
  entryPage: '/pack/list', //登录后进入的页面
  tagsView: false, // 是否开启页面选项卡功能，不推荐开启
};