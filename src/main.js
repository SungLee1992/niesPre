// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import qs from 'qs'

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.config.productionTip = false;
//axios.defaults.baseURL = "http://localhost:80/toxicitypred/";		//如果nginx做转发或负载均衡，此处URL要改为Nginx服务器的地址和端口号
axios.defaults.baseURL = "/";
//axios.defaults.baseURL = "http://localhost:80/";
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
};
axios.defaults.timeout = 180000;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
