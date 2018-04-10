import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import DashboardAdmin from '@/views/admin/Dashboard'
import TeachersAdmin from '@/views/admin/Teachers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        { path: '/', component: DashboardAdmin },
        { path: 'teachers/', component: TeachersAdmin }
      ]
    }
  ]
})
