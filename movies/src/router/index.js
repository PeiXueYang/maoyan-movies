import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
     // 首页
     {
      path: '/',
      name: 'home',
      component:  resolve => require(['../pages/home/home.vue'], resolve),//懒加载
    },
    // 登录
    {
      path: '/login',
      name: 'login',
      component:  resolve => require(['../pages/login/login.vue'], resolve),//懒加载
    },
    // 个人中心
    {
      path: '/personal',
      name: 'personal',
      component:  resolve => require(['../pages/personal/personal.vue'], resolve),//懒加载
    },
     // movie 详情页
     {
      path: '/detail/:id',
      name: 'detail',
      component:  resolve => require(['../pages/detail/detail.vue'], resolve),//懒加载
    },
  ]
})
