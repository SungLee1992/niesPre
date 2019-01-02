import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Forecast from '@/pages/forecast/index.vue'
import ForecastResult from '@/pages/forecast/Result.vue'
import SettingResult from '@/pages/data-set/Result.vue'
import Setting from '@/pages/data-set/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base:'/nies/',
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
