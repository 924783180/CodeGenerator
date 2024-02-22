import { createApp } from 'vue'
import {createPinia} from "pinia";
import './style.css'
import App from './App.vue'
import router from "./router";
import "./utils/prototype";// 在原型中添加的一些方法
import "reset.css";// 重置元素默认状态
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);
app.use(createPinia())
  .use(router)
  .use(ElementPlus, {zIndex: 3000, locale: zhCn})
  .mount("#app");
