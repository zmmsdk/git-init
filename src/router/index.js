import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置路由表：统一使用按需加载组件
const routes = [
  { // 登录
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  }
  // {
  //   path: '/',
  //   component: () => import('@/views/tab-bar'),
  //   // 二级路由组件
  //   children: [
  //     { // 首页
  //       name: 'home',
  //       path: '', // 默认子路由
  //       component: () => import('@/views/home')
  //     }
  //   ]
  // }
]
const router = new VueRouter({
  routes
})
export default router
