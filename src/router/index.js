import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Forecast from '@/pages/forecast/index.vue'
import ForecastResult from '@/pages/forecast/Result.vue'
import SettingResult from '@/pages/data-set/Result.vue'
import Setting from '@/pages/data-set/index.vue'

Vue.use(Router)

export default new Router({
  //mode: 'history',	//如果你的vue工程用的路由是history模式，需要将客户端发来的url重定向到默认的index.html，才能正常访问。否则只能看到主页。刷新或点击其他页面都会404。
  base:'/niespre',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/forecast',
    children: [{
      path: '/setting',
      name: "setting",
      component: Setting
    }, {
      path: '/forecast',
      name: 'forecast',
      component: Forecast
    }, {
      path: '/result/:dataType',
      name: 'result',
      component: SettingResult,
      props: true
    }]
  }]
})
